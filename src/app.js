import Koa from 'koa'
const app = new Koa()
// response
app.use(ctx => {
  ctx.body = 'Hello g00dv1n'
})

app.listen(8081)
