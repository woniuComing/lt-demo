module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 输出路径
    outputDir: 'dist',
    // 打包后的静态资源文件位置
    assetsDir: 'static',
    // 打包文件名是否hash
    filenameHashing: false,
    // eslint-loader是否在保存时候检查
    lintOnSave: true,
    // 是否生成sourcemap文件
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/main.ts',
            title: '联想电脑管家-反馈'
        }
    },
    // 服务项配置
    devServer: {
        host: 'localhost',
        port: 8888,
        // https: false,
        open: true,
        hotOnly: true, // 热更新
        proxy: {
            '/api': {
                target: 'https://lt.lenovo.com.cn/iip/api/v2',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }

        }
    }

}