
import { errorLogger, errorResponder, failSafeHandler } from '../services/middlewares'
import apiRoutes from './api'
import authRoutes from './auth'

const Router = (app) => {
  app.use('/api', apiRoutes)
  app.use('/auth', authRoutes)
  app.use(errorLogger)
  app.use(errorResponder)
  app.use(failSafeHandler)
}

export default Router
