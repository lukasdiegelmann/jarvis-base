import webpack from "webpack";
import store from "../../utils/state/store";
import { ObserveCompilation } from "./types";

const observeCompilation: ObserveCompilation = (focus, listener) => {
    const internalState = [];
    const { processArgs, projectArgs } = store.getState().args;

    for (let i = 0; i < projectArgs.withoutAtomics["@jarvis/base/config"].bundle.length; i++) {
        const { header, config } = projectArgs.withoutAtomics["@jarvis/base/config"].bundle[i];

        const focusTemplate = `${focus}:${processArgs.compilation.mode}`.replace(/\\/g, "/");
        const configTemplate = `^${header.milieu.cwdPath}.*:${config.mode}`.replace(/\\/g, "/");

        if (!header.behavior) header.behavior = {};
        if (!internalState[i]) internalState[i] = {};

        if (
            focusTemplate.match(new RegExp(configTemplate)) &&
            !(internalState[i].isInitiated && header.behavior.shouldJustInit) &&
            !internalState[i].isRunning
        ) {
            internalState[i].isInitiated = true;
            internalState[i].isRunning = true;

            const webpackCompiler = webpack(config);

            if (!header.behavior.isQuiet) {
                webpackCompiler.hooks.compilation.tap("invalid", () => listener(0, i));
            }

            webpackCompiler.hooks.done.tap("done", (webpackStats) => {
                if (!header.behavior.isQuiet) {
                    listener(1, webpackStats, i);
                }

                if (header.behavior.shouldExecute) {
                    // ... execute here ...
                }
            });

            webpackCompiler.run((err) => {
                if (err) {
                    throw {
                        errno: 600,
                        err,
                    };
                }
            });
        }
    }
};

export default observeCompilation;
