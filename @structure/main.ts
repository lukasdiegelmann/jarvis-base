import T from "./typings/lib";
import transpiler from "./src/transpiler";
import get_options from "./src/get_options";
import fs from "fs";
import json_format from "json-format";

const cli: T.CLI = (cwd, ...process_args) => {
    const options = get_options(cwd, process_args);
    const project = JSON.parse(fs.readFileSync(options.project, { encoding: "utf8" }));
    const transpiled = transpiler(project);

    if (!options.directory) {
        fs.writeFileSync(options.project, json_format(transpiled), { encoding: "utf8" });
    }
};

export default cli;
