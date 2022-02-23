import jwt from 'jsonwebtoken'

/**
 *
 * @param {Object} user
 * @returns {String} refresh token
 */
const createRefreshToken = (user) => {
  const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '10m' })
  return refreshToken
}

/**
 *
 * @param {Object} user
 * @returns {String} access token
 */
const createAccessToken = (user) => {
  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' })
  return accessToken
}

/**
 *
 * @param {String} token refresh token to verify
 * @returns {Object} decoded token
 */
const verifyRefreshToken = (token) => {
  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
  return decoded
}

/**
 *
 * @param {String} token access token to decode
 * @returns {Object} decoded token
 */
const decodeAccessToken = (token) => {
  const decoded = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET)
  return decoded
}

/**
 *
 * @param {String} token Access token to verify
 * @returns {Object} {valid : boolean, tokenInfos : Object}
 */
const verifyAccessToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return {
        valid: false,
        tokenInfos: decodeAccessToken(token)
      }
    }
    if (decoded) {
      return {
        valid: true,
        tokenInfos: decoded
      }
    }
  })

  return decodedToken
}
export { createRefreshToken, createAccessToken, verifyRefreshToken, decodeAccessToken, verifyAccessToken }
