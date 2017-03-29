import Router from 'koa-router'

const router = new Router({prefix: '/api/public'})

router.get('/', ctx => {
  ctx.body = 'public API'
})

export default router

