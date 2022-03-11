
import { errorLogger, errorResponder, failSafeHandler } from '../services/middlewares'
import { isAuthenticated } from '../services/middlewares/auth'
import apiRoutes from './api'
import authRoutes from './auth'

const Router = (app) => {
  app.use('/api', isAuthenticated, apiRoutes)
  app.use('/auth', authRoutes)
  app.use(errorLogger)
  app.use(errorResponder)
  app.use(failSafeHandler)
}

export default Router
