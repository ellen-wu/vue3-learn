const webpack = require('webpack')
module.exports = {
    outputDir: 'build',
    // 使用webpack配置
    configureWebpack: {
        plugins: [
            new webpack.BannerPlugin({
                banner: '我是测试'
            })
        ]
    }
}