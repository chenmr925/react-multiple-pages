const path = require('path');
const HotModuleReplacementPlugin = require('react-hot-loader');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const buildConfig = require('./build/build.config');

const config = {
    devtool: 'source-map',
    module: {
        rules: [
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
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

const webpackConfig = merge(config, baseConfig, buildConfig);

module.exports = webpackConfig;
