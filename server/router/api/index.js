import express from 'express'
import dreamRoutes from './dream'
import dreamsRoutes from './dreams'

const router = express.Router()

router.use('/dream', dreamRoutes)
router.use('/dreams', dreamsRoutes)

router.get('/', async (req, res) => {
  return res.status(200).json({
    data: 'welcome to the dreamverse api'
  })
})

export default router
