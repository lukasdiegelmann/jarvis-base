import chokidar from "chokidar";
import parseProcessArgv from "./src/scaffolding/process-argv-parsing";
import parseProcessArgs from "./src/scaffolding/process-args-parsing";
import fabricateTerminal, { createTerminalListener } from "./src/scaffolding/terminal-fabricating";
import observeCompilation from "./src/scaffolding/compilation-observing";
import handleInjection from "./src/scaffolding/injection-handling";
import store from "./src/utils/state/store";
import { argsSliceActions } from "./src/utils/state/slices/args-slice";
import { handleInjectionSliceActions } from "./src/utils/state/slices/handle-injections-slice";

const main = (processArgv: string[]): void => {
    store.dispatch(argsSliceActions.setProcessArgs(parseProcessArgv(processArgv)));

    parseProcessArgs()
        .then((newlyprojectArgs) => {
            store.dispatch(argsSliceActions.setProjectArgs(newlyprojectArgs));

            const { processArgs, projectArgs } = store.getState().args;
            const terminal = fabricateTerminal(processArgs.output);

            if (processArgs.milieu.compilePath) {
                observeCompilation(
                    processArgs.milieu.compilePath,
                    createTerminalListener(terminal, processArgs.milieu.compilePath)
                );
            } else {
                store.dispatch(handleInjectionSliceActions.setRevertFunction(handleInjection()));
                const { revertFunction } = store.getState().handleInjection;

                ["SIGINT", "SIGTERM", "beforeExit"].forEach((signal) => {
                    process.on(signal, () =>
                        revertFunction()
                            .then(() => process.exit(0))
                            .catch(() => process.exit(1))
                    );
                });

                const chokidarWatchPaths = [
                    ...new Set(
                        projectArgs.withoutAtomics["@jarvis/base/config"].bundle.map(
                            (a) => a.header.milieu.cwdPath
                        )
                    ),
                ];
                const chokidarWatcher = chokidar.watch(chokidarWatchPaths, {
                    ignoreInitial: true,
                    persistent: true,
                });

                chokidarWatcher.on("all", (_eventName, filePath) => {
                    observeCompilation(filePath, createTerminalListener(terminal, filePath));
                });
            }
        })
        .catch((exception) => {
            throw exception;
        });
};

export default main;
