import Router from 'koa-router'
import { UserModel } from '../models/users'
import asyncBusboy from 'async-busboy'
import fs from 'fs'
import config from 'config'
import {storeAvatars, removeAvatars} from '../helpers/storeAvatars'

const router = new Router({prefix: '/api/private'})

router.get('/', ctx => {
  ctx.body = 'private API'
})

router.get('/user', async ctx => {
  ctx.body = await new UserModel({id: ctx.state.user.id}).fetch({
    columns: ['id', 'name', 'surname', 'email', 'categories', 'birthday', 'avatarUrl']
  })
});

router.put('/avatar', async ctx => {
  const {files} = await asyncBusboy(ctx.req)

  try {
    const file = files[0]
    if(file) {
      // save new avatar to fs
      const outName = `${ctx.state.user.email}@${new Date().getTime()}.png`
      const avatarPath = storeAvatars(file, outName)
      ctx.debug('Store user avatar: %s', avatarPath)

      // delete last if exists
      const user = await new UserModel({id: ctx.state.user.id}).fetch()
      if (user.get('avatarUrl')) {
        const r = await removeAvatars(user.get('avatarUrl'))
        ctx.debug((r ? 'delete last avatar: ' : 
        'cannot delete last avatar: ') + user.get('avatarUrl'))
      }
      // save new name to user model
      ctx.body = await new UserModel({
        id: ctx.state.user.id, 
        avatarUrl: outName
      }).save()
     }
  } catch(err)  {
    ctx.throw(400, err)
  }
})

export default router
