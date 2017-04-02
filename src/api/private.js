import Router from 'koa-router'

const router = new Router({prefix: '/api/private'})

router.get('/', ctx => {
  ctx.body = 'private API'
})

export default router
