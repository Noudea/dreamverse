import { getUser, updateUser } from '../../database/user'
import { createAccessToken, createRefreshToken, decodeRefreshToken, verifyAccessToken, verifyRefreshToken } from '../../token'

/**
 * check if the user is authenticated by checking the access token and refresh token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isAuthenticated = async (req, res, next) => {
  try {
    let accessToken = req.get('authorization')
    if (!accessToken) {
      throw new Error('missing_token')
    }
    accessToken = accessToken.split(' ')[1]
    const decoded = verifyAccessToken(accessToken)
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
      const decodedRefreshToken = await decodeRefreshToken(userRefreshToken)
      if (decodedRefreshToken.accessToken === accessToken) {
        // update refresh token
        const newAccessToken = createAccessToken({ email: user.email, id: user.id })
        updateUser({ _id: user._id }, { refreshToken: createRefreshToken({ email: user.email, accessToken: newAccessToken }) })
        req.accessToken = newAccessToken
        next()
      } else {
        throw new Error('invalid_authentication')
      }
    } else {
      req.accessToken = accessToken
      next()
    }
  } catch (error) {
    error.message = 'invalid_authentication'
    next(error)
  }
}

export { isAuthenticated }
