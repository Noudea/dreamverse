import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  return res.status(200).json({
    data: 'test'
  })
})

router.post('/', async (req, res) => {
  return res.status(201).json({
    success: req.body
  })
})

export default router
