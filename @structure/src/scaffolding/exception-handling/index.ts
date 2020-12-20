import chalk from "chalk";
import { HandleException } from "./types";

const handleException: HandleException = (exception) => {
    if (exception.errno && exception.err) {
        process.stderr.write(
            `${chalk.bold.red(`ERR ${exception.errno}`)}: ${chalk.underline.bold(exception.err)}`
        );
    } else {
        process.stderr.write(`${chalk.bold.red("ERR!")}: ${exception}`);
    }

    process.exit(exception.errno);
};

export default handleException;
