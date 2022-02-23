import express from 'express'
import { createUser, getUser, updateUser } from '../../../services/database/user'
import { isAuthenticated } from '../../../services/middlewares/auth'
import { hashPassword, verifyPassword } from '../../../services/password'
import { createAccessToken, createRefreshToken } from '../../../services/token'

const router = express.Router()

/**
 * signup api route, this route is used to register an user
 */
router.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const userExist = await getUser({ email })
    if (userExist) {
      throw new Error('user_already_exist')
    }

    const user = {
      email: email,
      password: hashPassword(password),
      refreshToken: createRefreshToken({ email })
    }
    createUser(user)

    return res.status(200).json({
      success: 'success register'
    })
  } catch (error) {
    next(error)
  }
})

/**
 * signin api route, this route is used to login an user
 */
router.post('/signin', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await getUser({ email })

    if (!user) {
      throw new Error('missing_ressource')
    }

    // verify password
    const verifyPass = verifyPassword(password, user.password)
    if (!verifyPass) {
      throw new Error('invalid_authentication')
    }

    // update de the refresh token
    const updatedUser = await updateUser({ email }, { refreshToken: createRefreshToken({ email }) })

    return res.status(200).json({
      success: 'success signin',
      refreshToken: updatedUser.refreshToken,
      accessToken: createAccessToken({ email }),
      user: {
        email: updatedUser.email
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/protected', isAuthenticated, async (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Welcome user!!', email: req.email, accessToken: req.accessToken })
})
export default router
