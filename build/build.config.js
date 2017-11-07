const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        qrcode: "./src/js/code.js",
        login: "./src/login/index.js",
        positionList: "./src/positionList/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'login.html',
            chunks: ["vendor", "login"],
            PUBLIC_URL: "./public",
            title: "登录"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'positionList.html',
            chunks: ["vendor", "positionList"],
            PUBLIC_URL: "./public",
            title: "微招聘"
        })
    ]
}

module.exports = config;
