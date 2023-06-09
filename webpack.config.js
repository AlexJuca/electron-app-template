const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;

module.exports = {
    entry: "./app/src/index.jsx",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
    module: {
        rules: [
            // loads .js/jsx/json files
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, "app/src")],
                loader: "babel-loader",
            },
            {
                // loads .html files
                test: /\.(html)$/,
                include: [path.resolve(__dirname, "app/src")],
                use: {
                    loader: "html-loader"
                }
            },
            {
                // loads .css files
                test: /\.css$/,
                include: [path.resolve(__dirname, "app/src")],
                use: [                    
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app/src/index.html"),
            filename: "index.html"
        })
    ]
};
