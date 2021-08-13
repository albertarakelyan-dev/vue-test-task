module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://reqres.in/api',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {'^/api': '/'},
            }
        }
    },
}