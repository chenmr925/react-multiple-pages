const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
                            limit: 8172,
                            name: "./img/[name].[ext]?[hash]"
                        }
                    }
                ]
            },
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new UglifyJSPlugin(),
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
    ]
};

module.exports = config;
