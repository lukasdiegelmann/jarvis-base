import chalk, { ChalkFunction } from "chalk";
import { Stats } from "webpack";

interface Components {
    "low/tag": { string: string; formatting?: ChalkFunction; braces: string };
    "low/tag/jarvis-base": Record<string, never>;
    "low/shift": { string: string; width: number };
    "low/line-break": { string: string; range: number };
    "high/terminal/simple/prefix": { entryPath: string; compilationMode: string };
    "high/terminal/simple/compiling": Components["high/terminal/simple/prefix"];
    "high/terminal/simple/done": Components["high/terminal/simple/prefix"] & {
        webpackStats: Stats;
    };
    "high/terminal/simple/log": Components["high/terminal/simple/prefix"] & { log: string };
    "high/terminal/complex/header": Components["high/terminal/simple/done"];
    "high/error": { name: string; message: string; stack?: string };
}

type ConstructString = <K extends keyof Components>(component: K, info: Components[K]) => string;

const constructString: ConstructString = (component, info) => {
    switch (component) {
        case "low/tag": {
            const i = info as Components["low/tag"];
            return `${i.braces[0]}${chalk.bold(i.formatting ? i.formatting(i.string) : i.string)}${
                i.braces[1]
            }`;
        }
        case "low/shift": {
            const i = info as Components["low/shift"];
            return `|${" ".repeat(i.width)}${JSON.stringify(i.string)
                .replace(/\\n/g, `\n|${" ".repeat(i.width)}`)
                .split("")
                .filter((_a, b, c) => b !== 0 && b !== c.length - 1)
                .join("")}`;
        }
        case "low/line-break": {
            const i = info as Components["low/line-break"];
            const chars = i.string.split("");

            let newStr = "";
            for (let k = 0; k < chars.length; k++) {
                if (k % i.range === 0 && k !== 0) {
                    newStr += "\n";
                }
                newStr += chars[k];
            }

            return newStr;
        }
        case "low/tag/jarvis-base": {
            return constructString("low/tag", {
                braces: "{}",
                formatting: chalk.underline.cyan,
                string: "@jarvis/base",
            });
        }
        case "high/terminal/simple/prefix": {
            const i = info as Components["high/terminal/simple/prefix"];
            return `↳ ${constructString("low/tag/jarvis-base", {})} → ${constructString("low/tag", {
                braces: "[]",
                string: "entryPath",
            })} ${i.entryPath} • ${constructString("low/tag", { braces: "[]", string: "mode" })} ${
                i.compilationMode
            } >>`;
        }
        case "high/terminal/simple/compiling": {
            const i = info as Components["high/terminal/simple/compiling"];
            return `${constructString("high/terminal/simple/prefix", i)} ${chalk.bold.cyan(
                "compiling..."
            )}`;
        }
        case "high/terminal/simple/done": {
            const i = info as Components["high/terminal/simple/done"];
            return `${constructString(
                "high/terminal/simple/prefix",
                i
            )} ${constructString("low/tag", { braces: "()", string: "time" })} ${
                i.webpackStats.endTime - i.webpackStats.startTime
            }ms • ${constructString("low/tag", { braces: "()", string: "state" })} ${
                i.webpackStats.hasErrors()
                    ? chalk.bold.red("ERR!")
                    : i.webpackStats.hasWarnings()
                    ? chalk.bold.yellow("WRN!")
                    : chalk.bold.green("SCS!")
            }`;
        }
        case "high/terminal/simple/log": {
            const i = info as Components["high/terminal/simple/log"];
            return `${constructString(
                "high/terminal/simple/prefix",
                i
            )} ${constructString("low/tag", { braces: "()", string: "output" })} ${i.log}`;
        }
        case "high/terminal/complex/header": {
            const i = info as Components["high/terminal/complex/header"];
            return `(${constructString("low/tag", { braces: "[]", string: "entryPath" })} ${
                i.entryPath
            } • ${constructString("low/tag", { braces: "[]", string: "mode" })} ${
                i.compilationMode
            } >> ${constructString("low/tag", { braces: "()", string: "time" })} ${
                i.webpackStats.endTime - i.webpackStats.startTime
            }ms • ${constructString("low/tag", { braces: "()", string: "state" })} ${
                i.webpackStats.hasErrors()
                    ? chalk.bold.red("ERR!")
                    : i.webpackStats.hasWarnings()
                    ? chalk.bold.yellow("WRN!")
                    : chalk.bold.green("SCS!")
            })`;
        }
        case "high/error": {
            const i = info as Components["high/error"];

            return `↳ ${constructString("low/tag/jarvis-base", {})} → ${constructString("low/tag", {
                braces: "()",
                string: i.name,
                formatting: chalk.red,
            })}\n•\n${constructString("low/shift", {
                width: 1,
                string: constructString("low/line-break", {
                    range: process.stdout.columns - 10,
                    string: i.message,
                }),
            })}\n•${
                i.stack
                    ? `\n${constructString("low/shift", {
                          width: 1,
                          string: constructString("low/line-break", {
                              range: process.stdout.columns - 10,
                              string: i.stack,
                          }),
                      })}\n•`
                    : ""
            }\n\n`;
        }
    }
};

export default constructString;
