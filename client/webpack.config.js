const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'angular',
            'angular-aria',
            'angular-animate',
            'angular-messages',
            'angular-material',
            'angular-material/angular-material.css',
            'angular-route',
            'material-design-icons/iconfont/material-icons.css'
        ],
        app: "./src/app.module.js",
        specs: './src/browser-specs-bundle.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, use: ['raw-loader'] },
            { test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['specs', 'app', 'vendor']
        }),
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: 'index.html',
            inject: 'head',
            excludeChunks: ['specs']
        }),
        new HtmlWebpackPlugin({ filename: 'specs.html' })
    ],
    devServer: {
        proxy: {
            '/api': {
                // logLevel: 'debug',
                target: 'http://127.0.0.1:8078'
            }
        }
    }
};
