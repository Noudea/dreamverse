import express from 'express'

const router = express.Router()

router.post('/signup', async (req, res, next) => {
  try {
    return res.status(200).json({
      success: 'success register'
    })
  } catch (error) {
    next(error)
  }
})

export default router
