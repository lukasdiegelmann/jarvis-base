const PATH = require("path");

module.exports = [
    {
        name: "jarvisBase/production",
        mode: "development",
        target: "node",
        entry: {
            jarvisBase: PATH.resolve(__dirname, "./@structure/master.ts"),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env", "@babel/preset-typescript"],
                                plugins: [
                                    "@babel/plugin-transform-typescript",
                                    "@babel/plugin-transform-runtime",
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".ts"],
        },
        externals: [require("webpack-node-externals")()],
        output: {
            filename: "[name].bundle.js",
            path: PATH.resolve(__dirname, "./dist/"),
            library: "jarvisBase",
            libraryTarget: "commonjs",
        },
    },
];
