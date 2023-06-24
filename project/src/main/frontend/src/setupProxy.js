// #main/frontend/src/setupProxy.js
const{ createProxyMiddleware } = require('http-proxy-middleware');

// "/api" 경로가 시작하면 프록시 미들웨어 실행
module.exports = function (app){
    app.use(
        '/api',
        createProxyMiddleware({
            target : 'http://localhost:9090',
            changeOrigin:true
        })
    );
};