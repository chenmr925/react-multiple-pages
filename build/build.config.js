const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        qrcode: "./src/js/code.js",
        login: "./src/login/index.js",
        positionList: "./src/positionList/index.js",
        positionDetail: "./src/positionDetail/index.js",
        positionSearch: "./src/positionSearch/index.js",
        personalCenter: "./src/personalCenter/index.js",
        companyHome: "./src/companyHome/index.js",
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
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'positionDetail.html',
            chunks: ["vendor", "swiper", "positionDetail"],
            PUBLIC_URL: "./public",
            title: "职位详情"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'positionSearch.html',
            chunks: ["vendor", "positionSearch"],
            PUBLIC_URL: "./public",
            title: "搜索"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'personalCenter.html',
            chunks: ["vendor", "personalCenter"],
            PUBLIC_URL: "./public",
            title: "个人中心"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'companyHome.html',
            chunks: ["vendor", "companyHome"],
            PUBLIC_URL: "./public",
            title: "走进企业"
        })
    ]
}

module.exports = config;
