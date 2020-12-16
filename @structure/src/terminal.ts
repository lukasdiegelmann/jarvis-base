import T from "../typings/lib";
import blessed from "blessed";
import fs from "fs";
import format_json from "json-format";
import chalk from "chalk";
import hash_generator from "hash-generator";
import path from "path";

const create_terminal: T.CreateTerminal = (project, transpiled) => {
    const screen = blessed.screen({
        smartCSR: true,
        autoPadding: true,
        cursor: {
            artificial: true,
            shape: "line",
            blink: true,
            color: "black",
        },
    });

    const processes_panel = blessed.list({
        width: "100%",
        height: "100%",
    });

    processes_panel.on("prerender", () => {
        for (let i = 0; i < processes_panel.children.length; i++) {
            processes_panel.children[i].set(
                "width",
                `${Math.floor(100 / processes_panel.children.length)}%`
            );
            processes_panel.children[i].set(
                "left",
                `${Math.floor((100 * i) / processes_panel.children.length)}%`
            );
        }
    });

    screen.key(["C-c"], () => {
        fs.writeFile("./package.json", format_json(project), (err) => {
            if (err) throw err;
            process.exit(0);
        });
    });
    screen.key(["left"], () => {
        for (let i = 0; i < processes_panel.children.length; i++) {
            if (processes_panel.children[i].children[1].get("focused", false)) {
                const next_index = i - 1 > -1 ? i - 1 : 0;

                processes_panel.children[next_index].children[1].set("focused", true);
                screen.render();
                return;
            }
        }
    });
    screen.key(["right"], () => {
        for (let i = 0; i < processes_panel.children.length; i++) {
            if (processes_panel.children[i].children[1].get("focused", false)) {
                const next_index =
                    i + 1 < processes_panel.children.length - 1
                        ? i + 1
                        : processes_panel.children.length - 1;

                processes_panel.children[next_index].children[1].set("focused", true);
                screen.render();
                return;
            }
        }
    });

    screen.append(processes_panel);
    screen.render();

    return {
        createProcessPanel: (webpack_config_id) => {
            if (
                transpiled.workspace_config.webpackConfig[webpack_config_id].cache
                    .process_panel_id === undefined
            ) {
                const process_panel_id = (transpiled.workspace_config.webpackConfig[
                    webpack_config_id
                ].cache.process_panel_id = processes_panel.children.length);

                processes_panel.append(
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

                processes_panel.children[process_panel_id].children[1].set("focused", true);
                screen.render();
            }
        },
        startProgressAnimation: (webpack_config_id) => {
            const process_panel_id =
                transpiled.workspace_config.webpackConfig[webpack_config_id].cache.process_panel_id;

            let is_invalidated = false;
            const progress_loop = (progress = 0) =>
                setTimeout(() => {
                    if (!is_invalidated) {
                        const new_progress = progress + (100 - progress) / 8;
                        processes_panel.children[process_panel_id].children[2].set(
                            "filled",
                            new_progress
                        );
                        processes_panel.children[process_panel_id].children[2].set("hidden", false);
                        screen.render();
                        progress_loop(new_progress);
                    } else {
                        processes_panel.children[process_panel_id].children[2].set("hidden", true);
                        screen.render();
                    }
                }, 50);
            progress_loop();

            return () => (is_invalidated = true);
        },
        setProcessPanelHeader: (webpack_config_id, options) => {
            const process_panel_id =
                transpiled.workspace_config.webpackConfig[webpack_config_id].cache.process_panel_id;

            const header_template = `${chalk.inverse(`${options.compilation_time}ms`)} ${
                process.argv[2] === "development" ? "d" : "p"
            }:[${hash_generator(8)}] ${chalk.inverse(
                `${options.event_name} at ${chalk.underline(
                    path.relative(__dirname, options.file_path)
                )} ${
                    options.compilation_stats.hasErrors()
                        ? chalk.underline.bold.red("ERR!")
                        : stats.hasWarnings()
                        ? chalk.underline.bold.yellow("WRN!")
                        : chalk.underline.bold.green("SCS!")
                }`
            )}`;

            processes_panel.children[PROCESS_PANEL_ID].children[0].setContent(header_template);
        },
        logToProcessPanel: (i, string) => {
            const PROCESS_PANEL_ID = TRANSPILED["$frame::compilation"][i].$process.panel;

            processes_panel.children[PROCESS_PANEL_ID].children[1].setContent(
                `${processes_panel.children[PROCESS_PANEL_ID].children[1].content}${string}`
            );
        },
        clearProcessPanel: (i) => {
            const PROCESS_PANEL_ID = TRANSPILED["$frame::compilation"][i].$process.panel;

            processes_panel.children[PROCESS_PANEL_ID].children[1].setContent("");
        },
    };
};

export default create_terminal;
