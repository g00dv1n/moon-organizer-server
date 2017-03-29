import Router from 'koa-router'

const router = new Router({prefix: '/api/private'})

router.get('/', ctx => {
  ctx.body = 'public API'
})

export default router
