const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    // mode: 'production',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                optinos: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    entry: './src/index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    // plugins: [new HtmlWebpackPlugin({
    //     title: 'My Webpack App',1
    //     // filename: 'index.html',
    //     // template: './src/index.html',
    // })],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpack App',
            // filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'nuevo-estilo.css',
            ignoreOrder: false,
        }),
    ],
};