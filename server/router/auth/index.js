import express from 'express'
import googleAuthRoutes from './google'

const router = express.Router()

router.use('/google', googleAuthRoutes)

export default router
