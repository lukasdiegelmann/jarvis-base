import fs from "fs";
import Ajv from "ajv";
import replaceAtomics from "./atomics-replacing";
import jarvisConfigSchema from "../../assets/json/jarvis-config.json";
import store from "../utils/state/store";
import formatJson from "json-format";
import { Args } from "../utils/typings/lib";

const parseProcessArgs = (): Promise<Args["projectArgs"]> =>
    new Promise((resolve, reject) => {
        const state = store.getState();

        fs.readFile(
            state.args.processArgs.milieu.projectPath,
            { encoding: "utf8" },
            (err, data) => {
                if (err) {
                    reject({
                        name: "ProjectArgsError",
                        message: `Could not find file at '${state.args.processArgs.milieu.projectPath}'. This is probably due to an incorrect current working directory.`,
                    });
                }

                const json = JSON.parse(data);

                if (!json["@jarvis/base/config"]) {
                    reject({
                        name: "ProjectArgsError",
                        message: `Property '@jarvis/base/config' could not be found on project configuration. Please define a @jarvis/base config.`,
                    });
                }

                if (new Ajv().compile(jarvisConfigSchema)(json["@jarvis/base/config"])) {
                    resolve({
                        withAtomics: json,
                        withoutAtomics: replaceAtomics(JSON.parse(JSON.stringify(json))),
                    });
                } else {
                    reject({
                        name: "ProjectArgsError",
                        message: `Invalid jarvis config received. Please compare to json-schema: \n\n${formatJson(
                            jarvisConfigSchema
                        )}`,
                    });
                }
            }
        );
    });

export default parseProcessArgs;
