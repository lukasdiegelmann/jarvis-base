import chalk from "chalk";
import blessed from "blessed";
import fs from "fs";
import formatJson from "json-format";
import path from "path";
import formatWebpackMessages from "webpack-format-messages";
import store from "../../utils/state/store";
import { FabricateComplexTerminal, FabricateSimpleTerminal, FabricateTerminal } from "./types";

const fabricateComplexTerminal: FabricateComplexTerminal = () => {
    const internalState = [];
    const { processArgs, projectArgs } = store.getState().args;

    const screen = blessed.screen({
        smartCSR: true,
        autoPadding: true,
        cursor: { artificial: true, shape: "line", blink: true, color: "black" },
    });

    const processesPanel = blessed.list({ width: "100%", height: "100%" });

    processesPanel.on("prerender", () => {
        for (let i = 0; i < processesPanel.children.length; i++) {
            processesPanel.children[i].set(
                "width",
                `${Math.floor(100 / processesPanel.children.length)}%`
            );
            processesPanel.children[i].set(
                "left",
                `${Math.floor((100 * i) / processesPanel.children.length)}%`
            );
        }
    });

    screen.key(["rechts"], () => {
        for (let i = 0; i < processesPanel.children.length; i++) {
            if (processesPanel.children[i].children[1].get("focused", false)) {
                const k =
                    i + 1 < processesPanel.children.length - 1
                        ? i + 1
                        : processesPanel.children.length - 1;
                processesPanel.children[k].children[1].set("focused", true);
                break;
            }
        }
    });

    screen.key(["left"], () => {
        for (let i = 0; i < processesPanel.children.length; i++) {
            if (processesPanel.children[i].children[1].get("focused", false)) {
                const k = i - 1 >= 0 ? i - 1 : 0;
                processesPanel.children[k].children[1].set("focused", true);
                break;
            }
        }
    });

    screen.key(["C-c"], () => {
        fs.writeFile(processArgs.milieu.projectPath, formatJson(projectArgs.withAtomics), (err) => {
            if (err) {
                throw [500, err];
            }
            process.exit(0);
        });
    });

    screen.append(processesPanel);
    screen.render();

    return {
        type: "complex",
        fin: (linearID, payload) => {
            if (internalState[linearID].invalidate) {
                internalState[linearID].invalidate();
            }

            const processPanelID = internalState[linearID].id;

            const focus = `${chalk.bold("[focus]")} ${chalk.underline(payload.filePath)}`;
            const compilationMode = `${chalk.bold("[mode]")} ${processArgs.compilation.mode}`;
            const compilationTime = `${chalk.bold("[time]")} ${
                payload.webpackStats.endTime - payload.webpackStats.startTime
            }`;
            const compilationState = `${chalk.bold("[state]")} ${
                payload.webpackStats.hasErrors()
                    ? chalk.bold.red("ERR!")
                    : payload.webpackStats.hasWarnings()
                    ? chalk.bold.yellow("WRN!")
                    : chalk.bold.green("SCS!")
            }`;

            processesPanel.children[processPanelID].children[0].set(
                "content",
                `(${focus} • ${compilationMode} • ${compilationTime} • ${compilationState})`
            );
        },
        init: (linearID) => {
            if (!internalState[linearID]) {
                const { id: processPanelID } = (internalState[linearID] = {
                    id: processesPanel.children.length,
                });

                processesPanel.append(
                    blessed.box({
                        width: "100%",
                        height: "100%",
                        border: {
                            type: "line",
                        },
                        children: [
                            blessed.box({
                                width: "100%-2",
                                height: 1,
                                align: "center",
                            }),
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

                let isInvalidated = false;
                const progressLoop = (progress = 0) =>
                    setTimeout(() => {
                        if (!isInvalidated) {
                            const newProgress = progress + (100 - progress) / 8;
                            processesPanel.children[processPanelID].children[2].set(
                                "filled",
                                newProgress
                            );
                            processesPanel.children[processPanelID].children[2].set(
                                "hidden",
                                false
                            );
                            progressLoop(newProgress);
                        } else {
                            processesPanel.children[processPanelID].children[2].set("hidden", true);
                        }
                    }, 50);
                progressLoop();

                processesPanel.children[processPanelID].children[1].set("content", "");
                processesPanel.children[processPanelID].children[1].set("focused", true);

                internalState[linearID].invalidateProgress = () => (isInvalidated = true);
            }
        },
        log: (linearID, string) => {
            const processPanelID = internalState[linearID].id;

            processesPanel.children[processPanelID].children[1].set(
                "content",
                `${processesPanel.children[processPanelID].children[1].children[1].get(
                    "content",
                    ""
                )}${string}`
            );
        },
    };
};

const fabricateSimpleTerminal: FabricateSimpleTerminal = () => {
    const { processArgs } = store.getState().args;
    const focus = `${chalk.bold("[focus]")} ${chalk.underline(
        path.relative(process.cwd(), processArgs.milieu.focusedPath)
    )}`;
    const compilationMode = `${chalk.bold("[mode]")} ${processArgs.compilation.mode}`;

    return {
        type: "simple",
        fin: (webpackStats) => {
            const compilationTime = `${chalk.bold("[time]")} ${
                webpackStats.endTime - webpackStats.startTime
            }ms`;
            const compilationState = `${chalk.bold("[state]")} ${
                webpackStats.hasErrors()
                    ? chalk.bold.red("ERR!")
                    : webpackStats.hasWarnings()
                    ? chalk.bold.yellow("WRN!")
                    : chalk.bold.green("SCS!")
            }`;

            process.stdout.write(
                `${focus} • ${compilationMode} • ${compilationTime} >> ${compilationState}\n`
            );

            if (webpackStats.hasWarnings()) {
                process.stdout.write(
                    `${formatWebpackMessages(webpackStats).warnings.reduce(
                        (p: string, c: string) => `${p}\n${c}`,
                        ""
                    )}\n`
                );
            }

            if (webpackStats.hasErrors()) {
                process.stdout.write(
                    `${formatWebpackMessages(webpackStats).errors.reduce(
                        (p: string, c: string) => `${p}\n${c}`,
                        ""
                    )}\n`
                );
            }
        },
        init: () => {
            process.stdout.write(
                `${focus} • ${compilationMode} >> ${chalk.bold.cyan("compiling...")}\n`
            );
        },
        log: (string) => {
            process.stdout.write(`${focus} • ${compilationMode} >>\n${string}\n<<`);
        },
    };
};

// @ts-ignore
const fabricateTerminal: FabricateTerminal = (type) => {
    switch (type) {
        case "complex":
            return fabricateComplexTerminal();
        case "simple":
            return fabricateSimpleTerminal();
    }
};

export default fabricateTerminal;
