const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        position: "./src/position/index.js",
        login: "./src/login/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'login.html',
            chunks: ["vendor", "login"],
            PUBLIC_URL: "./public"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'position.html',
            chunks: ["vendor", "position"],
            PUBLIC_URL: "./public"
        })
    ]
}

module.exports = config;
