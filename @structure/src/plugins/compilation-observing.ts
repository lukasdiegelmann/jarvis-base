import fs from "fs";
import childProcess from "child_process";
import path from "path";
import webpack, { Stats } from "webpack";
import store from "../utils/state/store";
import { observeCompilationSliceActions } from "../utils/state/slices/compilation-observing-slice";

type ObserveCompilation = (
    focus: string,
    listener: <T extends 0 | 1 | 2>(
        eventCode: T,
        info: { id: number; webpackStats?: Stats; log?: string }
    ) => void
) => void;

const observeCompilation: ObserveCompilation = (focus, listener) => {
    const { processArgs, projectArgs } = store.getState().args;

    for (let i = 0; i < projectArgs.withoutAtomics["@jarvis/base/config"].bundle.length; i++) {
        const { header, config } = projectArgs.withoutAtomics["@jarvis/base/config"].bundle[i];

        const focusTemplate = `${focus}:${processArgs.compilation.mode}`.replace(/\\/g, "/");
        const configTemplate = `^${header.milieu.cwdPath}.*:${config.mode}`.replace(/\\/g, "/");

        let internal = store.getState().observeCompilation.internals[i];

        if (!header.behavior) header.behavior = {};
        if (!internal) {
            store.dispatch(
                observeCompilationSliceActions.setInternal({
                    id: i,
                    internal: { isInitiated: false, isRunning: false, child: null },
                })
            );

            internal = store.getState().observeCompilation.internals[i];
        }

        if (
            focusTemplate.match(new RegExp(configTemplate)) &&
            !(internal.isInitiated && header.behavior.shouldJustInit) &&
            !internal.isRunning
        ) {
            store.dispatch(
                observeCompilationSliceActions.setInternal({
                    id: i,
                    internal: { isInitiated: true, isRunning: true },
                })
            );

            internal = store.getState().observeCompilation.internals[i];

            if (internal.child) {
                internal.child.kill();
            }

            const webpackCompiler = webpack(config);

            if (!header.behavior.isQuiet) {
                webpackCompiler.hooks.compilation.tap("invalid", () => listener(0, { id: i }));
            }

            webpackCompiler.hooks.done.tap("done", (webpackStats) => {
                store.dispatch(
                    observeCompilationSliceActions.setInternal({
                        id: i,
                        internal: { isRunning: false },
                    })
                );

                if (!header.behavior.isQuiet) {
                    listener(1, { id: i, webpackStats });
                }

                if (header.behavior.shouldExecute) {
                    const execFilePath = path.resolve(
                        config.output.path,
                        config.output.filename as string
                    );

                    const environmentVariables = header.milieu.envPath
                        ? JSON.parse(fs.readFileSync(header.milieu.envPath, { encoding: "utf8" }))
                        : undefined;

                    const child = childProcess.spawn("node", [execFilePath], {
                        cwd: config.output.path,
                        env: environmentVariables,
                    });

                    child.stdout.on("data", (buffer: Buffer) => {
                        listener(2, { id: i, log: buffer.toString("utf8") });
                    });

                    child.stderr.on("data", (buffer: Buffer) => {
                        listener(2, { id: i, log: buffer.toString("utf8") });
                    });

                    store.dispatch(
                        observeCompilationSliceActions.setInternal({
                            id: i,
                            internal: { child },
                        })
                    );
                }
            });

            webpackCompiler.run((err) => {
                if (err) {
                    throw err;
                }
            });
        }
    }
};

export default observeCompilation;
