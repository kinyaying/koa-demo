/**
 * koa中间件：next()调用
 * 由于没有使用await next()方式调用，请求遇到中间件2的异步代码后不等待，直接走中间件1 next()后的代码返回。
 * 请求返回的是‘Hello World1’
 */
const Koa = require('koa')
const app = new Koa()
const loop = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('ok')
      resolve()
    }, time)
  })

app.use(async (ctx, next) => {
  ctx.body = 'Hello World1'
  next()
})
app.use(async (ctx, next) => {
  // 异步代码
  await loop(3000)
  ctx.body = 'Hello World2'
  next()
})
app.use(async (ctx, next) => {
  ctx.body = 'Hello World3'
})
app.listen(8081)
