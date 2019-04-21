import koa from 'koa'

const app = new Koa()
 
app.use(ctx => {
  ctx.body = ''
})
 
app.listen(3000)