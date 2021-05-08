const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    /* 1、entry 入口entry 指示webpack以那个文件作为入口文件起点开始打包，分析内部的依赖图 */
    // 单入口，如果只是一个入口，使用字符串指定一个入口文件，打包一个chunk，输出一个bundle，chunk的名称是默认
    entry: ['./src/index.js', './src/index.html'],

    /* 2、输出配置 */
    output: {
        // 输出多个文件
        filename: '[name].js',
        // 指定打包文件的路径
        path: resolve(__dirname, 'build')
    },

    /* 3、loader配置 */
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                // 有顺序
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            // {
            //     // eslint只检查js语法
            //     test: /\.js$/,
            //     // 只检查自己的代码，不检查第三方的代码
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         // 修复
            //         fix: true
            //     }

            // }
        ]
    },

    // 在webpack5 需要加上这个配置项，才会自动刷新
    target: "web",

    /* 4、插件 */
    plugins: [
        new HtmlWebpackPlugin({
            // 复制 './src/index.html'文件，并自动引入打包输出的所有资源（js/css）
            template: './src/index.html',
            // 默认是index.html名称，通过filename设置输出文件的名称
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        // 压缩css
        new OptimizeCssPlugin()
    ],
    /* 5、打包环境 开发 生产 development production */
    // mode: 'development',
    // devServer: {
    //     port: 8888,
    //     compress: true,
    //     open: true,
    //     hot: true
    // }
}
