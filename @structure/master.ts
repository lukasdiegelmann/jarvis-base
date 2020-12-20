import chokidar from "chokidar";
import { Stats } from "webpack";
import parseProcessArgv from "./src/scaffolding/process-argv-parsing";
import parseProcessArgs from "./src/scaffolding/process-args-parsing";
import handleException from "./src/scaffolding/exception-handling";
import fabricateTerminal from "./src/scaffolding/terminal-fabricating";
import observeCompilation from "./src/scaffolding/compilation-observing";
import store, { argsSliceActions } from "./src/utils/state/store";
import { Main } from "./src/utils/typings/functions";

const main: Main = (processArgv) => {
    try {
        store.dispatch(argsSliceActions.setProcessArgs(parseProcessArgv(processArgv)));

        parseProcessArgs()
            .then((newlyprojectArgs) => {
                store.dispatch(argsSliceActions.setProjectArgs(newlyprojectArgs));

                const { processArgs, projectArgs } = store.getState().args;

                if (processArgs.milieu.focusedPath) {
                    const terminal = fabricateTerminal("simple");

                    observeCompilation(processArgs.milieu.focusedPath, (eventCode, ...data) => {
                        switch (eventCode) {
                            case 0:
                                terminal.init();
                                break;
                            case 1:
                                terminal.fin(data[0] as Stats);
                                break;
                            case 2:
                                terminal.log(data[0] as string);
                                break;
                        }
                    });
                } else {
                    const terminal = fabricateTerminal("complex");
                    const watchPaths = [
                        ...new Set(
                            projectArgs.withoutAtomics["@jarvis/base/config"].bundle.map(
                                (a) => a.header.milieu.cwdPath
                            )
                        ),
                    ];
                    const watcher = chokidar.watch(watchPaths, {
                        ignoreInitial: true,
                        persistent: true,
                    });

                    watcher.on("all", (_eventName, filePath) => {
                        observeCompilation(filePath, (eventCode, ...data) => {
                            switch (eventCode) {
                                case 0:
                                    terminal.init(data[1]);
                                    break;
                                case 1:
                                    terminal.fin(data[1], {
                                        filePath,
                                        webpackStats: data[0] as Stats,
                                    });
                                    break;
                                case 2:
                                    terminal.log(data[1], data[0] as string);
                                    break;
                            }
                        });
                    });
                }
            })
            .catch((exception) => {
                handleException(exception);
            });
    } catch (exception) {
        handleException(exception);
    }
};

export default main;
