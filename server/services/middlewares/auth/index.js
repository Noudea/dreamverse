import { getUser } from '../../database/user'
import { createAccessToken, verifyAccessToken, verifyRefreshToken } from '../../token'

/**
 * check if the user is authenticated by checking the access token and refresh token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isAuthenticated = async (req, res, next) => {
  try {
    let token = req.get('authorization')
    if (!token) {
      throw new Error('missing_token')
    }
    token = token.split(' ')[1]
    const decoded = verifyAccessToken(token)
    console.log(decoded)
    if (!decoded.tokenInfos) {
      throw new Error('invalid_authentication')
    }
    if (!decoded.valid) {
      // get user refresh token
      const user = await getUser({ email: decoded.tokenInfos.user.email })
      const userRefreshToken = user.refreshToken
      // verify refresh token
      verifyRefreshToken(userRefreshToken)
      // create new access token
      const newAccessToken = createAccessToken({ email: user.email })
      req.accessToken = newAccessToken
      next()
    }
    next()
  } catch (error) {
    error.message = 'invalid_authentication'
    next(error)
  }
}

export { isAuthenticated }
