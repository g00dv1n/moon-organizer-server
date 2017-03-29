import jwt from 'jsonwebtoken'

const verifyToken = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })
}

const jwtVerify = (secret) => {
  return async (ctx, next) => {
    if (!ctx.header.authorization) ctx.throw(401, 'Authorization required')

    const [scheme, token] = ctx.header.authorization.split(' ')
    if (scheme !== 'Bearer') ctx.throw(401, 'Invalid token type. Use Bearer.')

    try {
      const payload = await verifyToken(token, secret)

      // print payload for debug
      ctx.debug('jwt payload: %o', payload)

      ctx.state.user = payload
    } catch (e) {
      if (e.message === 'invalid token') ctx.throw(401, 'Invalid JWT')
      ctx.throw(e.status || 500, e.message)
    }
    await next()
  }
}

export default jwtVerify
