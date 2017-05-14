import Router from 'koa-router'
import { UserModel } from '../models/users'

const router = new Router({prefix: '/api/private'})

router.get('/', ctx => {
  ctx.body = 'private API'
})

router.get('/user', async ctx => {
  ctx.body = await await new UserModel({id: ctx.state.user.id}).fetch({
    columns: ['id', 'name', 'surname', 'email', 'categories', 'birthday', 'avatarUrl']
  })
});

export default router
