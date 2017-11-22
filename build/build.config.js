const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        qrcode: "./src/js/code.js",         //独立第三方库
        login: "./src/login/index.js",
        position: "./src/position/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'login.html',
            chunks: ["vendor", "login"],
            title: "登录"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'position.html',
            chunks: ["vendor", "qrcode", "position"],
            title: "首页"
        })
    ]
}

module.exports = config;
