const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('react-hot-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
});

const config = {
    entry: {
        vendor: ["react", "react-dom"],
        position: "./src/position/index.js",
        login: "./src/login/index.js"
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    externals: {jquery: "jQuery"},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3072,
                            name: "./img/[name].[ext]?[hash]"
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        extractSass,
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
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    devServer: {
        port: 8888,
        inline: true,//实时刷新
        hot: true,
        compress: true,
        contentBase: [path.join(__dirname, "dist"), ],
        proxy: {
            "/resumeCloud/": "http://www.jianliyun.me/"
        }
    }
};

module.exports = config;
