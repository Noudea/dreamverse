import apiRoutes from './api'
import authRoutes from './auth'

const Router = (app) => {
    app.use('/api',apiRoutes)
    app.use('/auth',authRoutes)
}


export default Router