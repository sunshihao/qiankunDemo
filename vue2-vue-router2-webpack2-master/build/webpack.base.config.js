var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');
// const { name } = require('..package.json');

const { name } = "app-vue-qk";


function resolve(relPath) {
    return path.resolve(__dirname, relPath);
}

module.exports = {
    entry: {
        index: resolve('../src/main.js'),
    },
    output: {
        // filename: 'js/[name].js',
        // chunkFilename: "js/[name].[chunkhash].js"
        library: `${name}-[name]`,
        libraryTarget: 'umd', // 把微应用打包成 umd 库格式
        jsonpFunction: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('../src'),
            '~': resolve('../src/assets')
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: "babel-loader",
                include: [resolve('../src')]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: utils.vueLoaderOptions()
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    }
}
