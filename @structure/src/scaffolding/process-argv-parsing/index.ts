import path from "path";
import { ParseProcessArgv, SearchArgValue } from "./types";

const searchArgValue: SearchArgValue = (processArgv, search) => {
    const arg = processArgv.filter((a) => a.match(new RegExp(`-+${search}=.+`)))[0];

    return arg ? arg.split("=")[1] : null;
};

const parseProcessArgv: ParseProcessArgv = (processArgv) => {
    const argValues = {
        compilation: {
            mode: searchArgValue(processArgv, "mode"),
            header: searchArgValue(processArgv, "header"),
        },
        milieu: {
            projectPath: searchArgValue(processArgv, "projectPath"),
            focusedPath: searchArgValue(processArgv, "focusedPath"),
        },
    };

    if (
        !argValues.compilation.mode ||
        !argValues.compilation.mode.match(/d|development|p|production/)
    ) {
        throw {
            errno: 100,
            err: `'${argValues.compilation.mode}' is not a valid compilation mode.`,
        };
    }

    if (!argValues.milieu.projectPath) {
        throw {
            errno: 101,
            err: `'${argValues.milieu.projectPath}' is not a valid project path.`,
        };
    }

    return {
        compilation: {
            mode: (argValues.compilation.mode ?? "").match(/d|development/)
                ? "development"
                : "production",
            header: JSON.parse(argValues.compilation.header ?? "{}"),
        },
        milieu: {
            projectPath:
                path.resolve(process.cwd(), argValues.milieu.projectPath) ??
                path.resolve(process.cwd(), "./package.json"),
            focusedPath: searchArgValue(processArgv, "focusedPath")
                ? path.resolve(process.cwd(), argValues.milieu.focusedPath)
                : null,
        },
    };
};

export default parseProcessArgv;
