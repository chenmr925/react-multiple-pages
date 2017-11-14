const path = require('path');
const webpack = require("webpack");

const config = {
    entry: {
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    externals: {jquery: "jQuery"},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ],
}

module.exports = config;
