import fs from "fs";
import formatJson from "json-format";
import store from "../utils/state/store";

const handleInjection = (): (() => Promise<undefined>) => {
    const { processArgs, projectArgs } = store.getState().args;
    const printToProject = { ...projectArgs.withoutAtomics };

    if (projectArgs.withoutAtomics["@jarvis/base/config"].inject) {
        projectArgs.withoutAtomics["@jarvis/base/config"].inject.forEach(
            (injection) => (printToProject[injection.key] = injection.value)
        );
    }

    fs.writeFile(processArgs.milieu.projectPath, formatJson(printToProject), (err) => {
        if (err)
            throw {
                name: "InjectionError",
                message: `Could not write to file '${processArgs.milieu.projectPath}'. This could be related to an internal error, but please check the path anyways.`,
            };
    });

    return () =>
        new Promise((resolve, reject) => {
            fs.writeFile(
                processArgs.milieu.projectPath,
                formatJson(projectArgs.withAtomics),
                (err) => {
                    if (err) {
                        reject({
                            name: "InjectionError",
                            message: `Could not write to file '${processArgs.milieu.projectPath}'. This could be related to an internal error, but please check the path anyways.`,
                        });
                    }
                    resolve(undefined);
                }
            );
        });
};

export default handleInjection;
