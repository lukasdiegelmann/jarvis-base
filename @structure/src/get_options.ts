import T from "../typings/lib";
import path from "path";

const parse_flag_string: T.ParseFlagString = (key, process_args) => {
    const flag_string = process_args.filter((v) => v.match(new RegExp(`^--${key}=.+$`)))[0];

    return flag_string ? flag_string.split("=")[1] : null;
};

const get_cli_options: T.GetCLIOptions = (cwd, process_args) => ({
    compilation_mode: parse_flag_string("mode", process_args) ?? "development",
    directory: parse_flag_string("dir", process_args),
    options_override: JSON.parse(
        (parse_flag_string("options", process_args) ?? "{}").replace(/'/g, '"')
    ),
    project: parse_flag_string("project", process_args) ?? path.resolve(cwd, "./package.json"),
});

export default get_cli_options;
