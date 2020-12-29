/**
 * koa中间件：await next()调用
 * 请求在走完所有中间件后返回，返回页面的是‘Hello World3’
 */
const Koa = require('koa')
const app = new Koa()
const loop = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

app.use(async (ctx, next) => {
  console.log(1)
  ctx.body = 'Hello World1'
  await next()
  console.log(2)
})
app.use(async (ctx, next) => {
  // 异步代码
  console.log(3)
  ctx.body = 'Hello World2'
  await loop(3000)
  await next()
  console.log(4)
})
app.use(async (ctx, next) => {
  console.log(5)
  ctx.body = 'Hello World3'
  await next()
  console.log(6)
})
app.listen(8081)
