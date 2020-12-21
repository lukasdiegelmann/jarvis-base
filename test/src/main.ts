const t = () =>
    setTimeout(() => {
        process.stdout.write(Math.random().toString());
        t();
    }, 1000);
t();
