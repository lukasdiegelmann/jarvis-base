import fs from "fs";
import Ajv from "ajv";
import replaceAtomics from "./atomics-replacing";
import jarvisConfigSchema from "../utils/schemas/jarvis-config.json";
import store from "../utils/state/store";
import { Args } from "../utils/typings/lib";

const parseProcessArgs = (): Promise<Args["projectArgs"]> =>
    new Promise((resolve, reject) => {
        const state = store.getState();

        fs.readFile(
            state.args.processArgs.milieu.projectPath,
            { encoding: "utf8" },
            (err, data) => {
                const json = JSON.parse(data);

                if (err) {
                    reject({ errno: 200, err });
                }

                if (!json["@jarvis/base/config"]) {
                    reject({
                        errno: 201,
                        err: `'${json["@jarvis/base/config"]}' is not a valid jarvis config`,
                    });
                }

                if (new Ajv().compile(jarvisConfigSchema)(json["@jarvis/base/config"])) {
                    resolve({
                        withAtomics: json,
                        withoutAtomics: replaceAtomics(JSON.parse(JSON.stringify(json))),
                    });
                } else {
                    reject({
                        errno: 202,
                        err: `Invalid jarvis config received. Please compare to json-schema: \n\n${jarvisConfigSchema}`,
                    });
                }
            }
        );
    });

export default parseProcessArgs;
