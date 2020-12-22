import chokidar from "chokidar";
import establishErrorHandling from "./src/scaffolding/error-handling";
import exitProcess from "./src/scaffolding/exit-process";
import parseProcessArgv from "./src/plugins/process-argv-parsing";
import parseProcessArgs from "./src/plugins/process-args-parsing";
import fabricateTerminal, { createTerminalListener } from "./src/plugins/terminal-fabricating";
import observeCompilation from "./src/plugins/compilation-observing";
import handleInjection from "./src/plugins/injection-handling";
import store from "./src/utils/state/store";
import { argsSliceActions } from "./src/utils/state/slices/args-slice";
import { handleInjectionSliceActions } from "./src/utils/state/slices/handle-injections-slice";

const main = (processArgv: string[]): void => {
    establishErrorHandling();
    store.dispatch(argsSliceActions.setProcessArgs(parseProcessArgv(processArgv)));

    parseProcessArgs().then((newlyprojectArgs) => {
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

            exitProcess(revertFunction);

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
    });
};

export default main;
