import chalk from "chalk";
import blessed from "blessed";
import path from "path";
import formatWebpackMessages from "webpack-format-messages";
import constructString from "../utils/logging/string-constructor";
import store from "../utils/state/store";
import { SimpleTerminal, ComplexTerminal } from "../utils/typings/lib";
import { Stats } from "webpack";

const fabricateComplexTerminal = (): ComplexTerminal => {
    const internalState = [];
    const { processArgs } = store.getState().args;

    // @ts-ignore
    const screen = blessed.screen({
        smartCSR: true,
        autoPadding: true,
        cursor: { artificial: true, shape: "line", blink: true, color: "black" },
    });

    // @ts-ignore
    const processesPanel = blessed.list({ width: "100%", height: "100%" });

    processesPanel.on("prerender", () => {
        for (let i = 0; i < processesPanel.children.length; i++) {
            processesPanel.children[i].width = `${Math.floor(
                100 / processesPanel.children.length
            )}%`;
            processesPanel.children[i].left = `${Math.floor(
                (100 * i) / processesPanel.children.length
            )}%`;
        }
    });

    screen.key(["right"], () => {
        for (let i = 0; i < processesPanel.children.length; i++) {
            if (processesPanel.children[i].children[1].focused) {
                const k =
                    i + 1 < processesPanel.children.length - 1
                        ? i + 1
                        : processesPanel.children.length - 1;
                processesPanel.children[k].children[1].focus();
                screen.render();
                break;
            }
        }
    });

    screen.key(["left"], () => {
        for (let i = 0; i < processesPanel.children.length; i++) {
            if (processesPanel.children[i].children[1].focused) {
                const k = i - 1 >= 0 ? i - 1 : 0;
                processesPanel.children[k].children[1].focus();
                screen.render();
                break;
            }
        }
    });

    screen.key(["C-c"], () => {
        store
            .getState()
            .handleInjection.revertFunction()
            .then(() => process.exit(0));
    });

    screen.append(processesPanel);
    screen.render();

    return {
        type: "complex",
        fin: (info) => {
            if (internalState[info.linearID].invalidateProgress) {
                internalState[info.linearID].invalidateProgress();
            }
            const processPanelID = internalState[info.linearID].id;

            processesPanel.children[processPanelID].children[0].content = constructString(
                "high/terminal/complex/header",
                {
                    compilationMode: processArgs.compilation.mode,
                    entryPath: path.relative(process.cwd(), info.focusPath),
                    webpackStats: info.webpackStats,
                }
            );
            screen.render();
        },
        init: (info) => {
            if (!internalState[info.linearID]) {
                processesPanel.append(
                    // @ts-ignore
                    blessed.box({
                        width: "100%",
                        height: "100%",
                        border: {
                            type: "line",
                        },
                        children: [
                            // @ts-ignore
                            blessed.box({
                                width: "100%-2",
                                height: 1,
                                align: "center",
                            }),
                            // @ts-ignore
                            blessed.log({
                                width: "100%-2",
                                height: "100%-3",
                                top: 1,
                                alwaysScroll: true,
                                scrollable: true,
                                focusable: true,
                                keys: true,
                                scrollbar: {
                                    ch: chalk.inverse(" "),
                                },
                            }),
                            // @ts-ignore
                            blessed.progressbar({
                                orientation: "horizontal",
                                width: "100%-2",
                                height: "100%-2",
                                hidden: true,
                                style: {
                                    bar: {
                                        fg: "white",
                                    },
                                },
                                ch: chalk.inverse(" "),
                            }),
                        ],
                    })
                );
            }

            const { id: processPanelID } = (internalState[info.linearID] = {
                id: processesPanel.children.length - 1,
            });

            let isInvalidated = false;
            const progressLoop = (progress = 0) =>
                setTimeout(() => {
                    if (!isInvalidated) {
                        const newProgress = progress + (100 - progress) / 8;
                        processesPanel.children[processPanelID].children[2].filled = newProgress;
                        processesPanel.children[processPanelID].children[2].hidden = false;
                        screen.render();
                        progressLoop(newProgress);
                    } else {
                        processesPanel.children[processPanelID].children[2].hidden = true;
                        screen.render();
                    }
                }, 100);
            progressLoop();

            processesPanel.children[processPanelID].children[1].content = "";
            processesPanel.children[processPanelID].children[1].focus();
            screen.render();

            internalState[info.linearID].invalidateProgress = () => (isInvalidated = true);
        },
        log: (info) => {
            const processPanelID = internalState[info.linearID].id;

            processesPanel.children[processPanelID].children[1].log(info.log);
        },
    };
};

const fabricateSimpleTerminal = (): SimpleTerminal => {
    const { processArgs } = store.getState().args;

    return {
        type: "simple",
        fin: (info) => {
            process.stdout.write(
                constructString("high/terminal/simple/done", {
                    compilationMode: processArgs.compilation.mode,
                    entryPath: path.relative(process.cwd(), info.focusPath),
                    webpackStats: info.webpackStats,
                }) + "\n"
            );

            if (info.webpackStats.hasWarnings()) {
                process.stdout.write(
                    `${formatWebpackMessages(info.webpackStats).warnings.reduce(
                        (p: string, c: string) => `${p}\n${c}`,
                        ""
                    )}\n`
                );
            }

            if (info.webpackStats.hasErrors()) {
                process.stdout.write(
                    `${formatWebpackMessages(info.webpackStats).errors.reduce(
                        (p: string, c: string) => `${p}\n${c}`,
                        ""
                    )}\n`
                );
            }
        },
        init: (info) => {
            process.stdout.write(
                constructString("high/terminal/simple/compiling", {
                    compilationMode: processArgs.compilation.mode,
                    entryPath: path.relative(process.cwd(), info.focusPath),
                }) + "\n"
            );
        },
        log: (info) => {
            process.stdout.write(
                constructString("high/terminal/simple/log", {
                    compilationMode: processArgs.compilation.mode,
                    entryPath: path.relative(process.cwd(), info.focusPath),
                    log: info.log,
                }) + "\n"
            );
        },
    };
};

const fabricateTerminal = <T extends "simple" | "complex">(
    type: T
): T extends "simple" ? SimpleTerminal : ComplexTerminal => {
    switch (type) {
        case "complex":
            // @ts-expect-error
            return fabricateComplexTerminal();
        case "simple":
            // @ts-expect-error
            return fabricateSimpleTerminal();
    }
};

export const createTerminalListener = (
    terminal: SimpleTerminal | ComplexTerminal,
    focusPath: string
) => {
    return <T extends 0 | 1 | 2>(
        eventCode: T,
        info: { id: number; webpackStats?: Stats; log?: string }
    ): void => {
        switch (eventCode) {
            case 0:
                terminal.init({ linearID: info.id, focusPath });
                break;
            case 1:
                terminal.fin({
                    focusPath,
                    linearID: info.id,
                    webpackStats: info.webpackStats,
                });
                break;
            case 2:
                terminal.log({ focusPath, linearID: info.id, log: info.log });
                break;
        }
    };
};

export default fabricateTerminal;
