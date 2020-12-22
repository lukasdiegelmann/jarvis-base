import constructString from "../utils/logging/string-constructor";

const establishErrorHandling = (): void => {
    process.on("uncaughtException", (error) => {
        process.stdout.write(constructString("high/error", error));
    });

    process.on("unhandledRejection", (reason: any) => {
        process.stdout.write(constructString("high/error", reason));
    });
};

export default establishErrorHandling;
