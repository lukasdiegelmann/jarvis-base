const PATH = require("path");

module.exports = [
    {
        name: "npm.workspace/development",
        mode: "development",
        devtool: "source-map",
        entry: {
            "npm-workspace": PATH.resolve(__dirname, "./@source/main.ts"),
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
            path: PATH.resolve(__dirname, "./dist/development"),
        },
    },
    {
        name: "npm.workspace/production",
        mode: "production",
        entry: {
            "npm-workspace": PATH.resolve(__dirname, "./@source/main.ts"),
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
            path: PATH.resolve(__dirname, "./dist/production"),
        },
    },
];
