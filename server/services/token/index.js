import jwt from 'jsonwebtoken'

const createRefreshToken = (user) => {
  const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '10m' })
  return refreshToken
}

const createAccessToken = (user) => {
  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' })
  return accessToken
}

const verifyRefreshToken = (token) => {
  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
  return decoded
}

const decodeAccessToken = (token) => {
  const decoded = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET)
  return decoded
}

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
