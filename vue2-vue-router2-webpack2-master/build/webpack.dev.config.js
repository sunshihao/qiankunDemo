var webpack = require("webpack");
var merge = require("webpack-merge");
var baseWebpackConfig = require("./webpack.base.config");
var utils = require("./utils");
var config = require("./config");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const { name } = "app-vue-qk";

module.exports = merge(baseWebpackConfig, {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true, // 热更新
        quiet: true,
        port: config.dev.port, // 端口
        open: true, // 自动打开浏览器
        publicPath: config.dev.outputPublicPath // 和下面的 output.publicPath

    },
    output: {
        // path: config.dev.outputPath,
        // publicPath: config.dev.outputPublicPath
        library: `${name}-[name]`,
        libraryTarget: 'umd', // 把微应用打包成 umd 库格式
        jsonpFunction: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
    module: {
        rules: utils.styleLoaders()
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        ...utils.genHtmlPlugins(),
        new FriendlyErrorsPlugin()
    ]
});
