var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'angular',
            'angular-route',
            'angular-aria',
            'angular-animate',
            'angular-material',
            'angular-material/angular-material.css'
        ],
        app: "./src/App.js",
        specs: './src/Specs.js'
    },
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.html$/, loader: 'raw' },
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
                target: 'http://127.0.0.1:8078'
            }
        }
    }
};
