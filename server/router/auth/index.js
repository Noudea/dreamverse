import express from 'express'
import googleAuthRoutes from './google'
import dreamverseAuthRoutes from './dreamverse'
const router = express.Router()

router.use('/google', googleAuthRoutes)
router.use('/dreamverse', dreamverseAuthRoutes)

export default router
