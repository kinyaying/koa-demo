const Koa = require('koa')
// 1. 创建koa应用
const app = new Koa()
// 2. koa中间件
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})
// 3. 起服务
app.listen(8080)
