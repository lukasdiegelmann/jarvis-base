import path from "path";
import { Args } from "../utils/typings/lib";

const searchArgValue = (processArgv: string[], search: string): string | null => {
    const arg = processArgv.filter((a) => a.match(new RegExp(`-+${search}=.+`)))[0];

    return arg ? arg.split("=")[1] : null;
};

const parseProcessArgv = (processArgv: string[]): Args["processArgs"] => {
    const argValues = {
        compilation: {
            mode: searchArgValue(processArgv, "mode"),
            header: searchArgValue(processArgv, "header"),
        },
        output: searchArgValue(processArgv, "output"),
        milieu: {
            projectPath: searchArgValue(processArgv, "projectPath"),
            compilePath: searchArgValue(processArgv, "compilePath"),
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

    if (!argValues.output) {
        throw {
            errno: 102,
            err: `'${argValues.output}' is not a valid output type.`,
        };
    }

    return {
        compilation: {
            mode: (argValues.compilation.mode ?? "").match(/d|development/)
                ? "development"
                : "production",
            header: JSON.parse(argValues.compilation.header ?? "{}"),
        },
        output: argValues.output === "complex" ? "complex" : "simple",
        milieu: {
            projectPath:
                path.resolve(process.cwd(), argValues.milieu.projectPath) ??
                path.resolve(process.cwd(), "./package.json"),
            compilePath: searchArgValue(processArgv, "compilePath")
                ? path.resolve(process.cwd(), argValues.milieu.compilePath)
                : null,
        },
    };
};

export default parseProcessArgv;
