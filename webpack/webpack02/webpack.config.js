const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* 1、entry 入口entry 指示webpack以那个文件作为入口文件起点开始打包，分析内部的依赖图 */
    // 单入口，如果只是一个入口，使用字符串指定一个入口文件，打包一个chunk，输出一个bundle，chunk的名称是默认
    entry: './src/index.js',

    // Array多入口写多个文件，所有的入口型号才能一个chunk，名称是默认的，输出也只有一个bundle
    //entry: ['./src/index.js', './src/main.js'],

    // entry: {
    //     one: './src/index.js',
    //     two: './src/main.js'
    // },

    // 特殊用法
    entry: {
        onea: ['./src/index.js', './src/main.js'],
        twob: './src/main.js'
    },

    /* 2、输出配置 */
    // output: {
    //     // 输出多个文件
    //     filename: '[name].js',
    //     // 指定打包文件的路径
    //     path: resolve(__dirname, 'build')
    // },

    /* 3、loader配置 */
    module: {},

    /* 4、插件 */
    plugins: [
        // new HtmlWebpackPlugin()
        new HtmlWebpackPlugin({
            // 复制 './src/index.html'文件，并自动引入打包输出的所有资源（js/css）
            template: './src/index.html',
            // 默认是index.html名称，通过filename设置输出文件的名称
            filename: 'demo.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        })
    ],
    /* 5、打包环境 开发 生产 development production */
    mode: 'development'
}
