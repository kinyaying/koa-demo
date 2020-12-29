/**
 * compose实现
 * @param {*} middlewares
 */
function compose(middlewares) {
  // koa 核心代码
  const dispatch = (i) => {
    if (i === middlewares.length) return Promise.resolve()
    return Promise.resolve(
      middlewares[i](() => {
        dispatch(i + 1) // 当用户调用next时会取出下一个继续执行
      })
    )
  }
  return dispatch(0)
}

/**
 * 以下代码为compose的调用
 */
async function fn1(next) {
  console.log('fn1 before next')
  await next()
  console.log('fn1 after next')
}
async function fn2(next) {
  console.log('fn2 before next')
  await next()
  console.log('fn2 after next')
}

let middlewares = [fn1, fn2]
compose(middlewares)
