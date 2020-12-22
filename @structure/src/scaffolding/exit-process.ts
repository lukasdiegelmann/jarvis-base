const exitProcess = (cleanup: () => Promise<undefined>): void => {
    const signals = ["SIGINT", "SIGTERM", "SIGQUIT", "SIGKILL", "beforeExit"];

    for (let i = 0; i < signals.length; i++) {
        const signal = signals[i];

        process.on(signal, () => {
            cleanup().then(() => process.exit());
        });
    }
};

export default exitProcess;
