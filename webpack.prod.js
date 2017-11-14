const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const buildConfig = require('./build/build.config');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
});

const config = {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "./img/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
        extractSass
    ]
};

const webpackConfig = merge(config, baseConfig, buildConfig);

module.exports = webpackConfig;
