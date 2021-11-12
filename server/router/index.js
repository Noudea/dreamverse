import apiRoutes from './api'


const Router = (app) => {
    app.use('/api',apiRoutes)
}


export default Router