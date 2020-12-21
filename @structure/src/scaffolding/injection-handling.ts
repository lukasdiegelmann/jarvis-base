import fs from "fs";
import formatJson from "json-format";
import store from "../utils/state/store";

const handleInjection = (): (() => Promise<undefined>) => {
    const { processArgs, projectArgs } = store.getState().args;

    fs.writeFile(processArgs.milieu.projectPath, formatJson(projectArgs.withoutAtomics), (err) => {
        if (err) throw { errno: 100, err };
    });

    return () =>
        new Promise((resolve, reject) => {
            fs.writeFile(
                processArgs.milieu.projectPath,
                formatJson(projectArgs.withAtomics),
                (err) => {
                    if (err) {
                        reject({ errno: 100, err });
                    }
                    resolve(undefined);
                }
            );
        });
};

export default handleInjection;
