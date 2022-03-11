import express from 'express'
import { getDream } from '../../../services/database/dream'
import { decodeAccessToken } from '../../../services/token'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const userId = await decodeAccessToken(req.accessToken).user.id
    console.log('userId', userId)
    const dreams = await getDream({ user: userId })
    return res.status(200).json({
      dreams,
      accesstoken: req.accessToken
    })
  } catch (error) {
    next(error)
  }
})

export default router
