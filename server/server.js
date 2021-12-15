import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './services/database/connection'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { SwaggerOptions } from './documentation/swagger'
import Router from './router'
import bodyParser from 'body-parser'

dotenv.config()
const app = express()
const port = 8000
// connect to db
connectDb()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

Router(app)

// create doc
const specs = swaggerJsDoc(SwaggerOptions)
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs)
)

/**
 * @swagger
 * /helloWorld:
 *  get:
 *    summary: hello world
 *    description: exemple route
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    responses:
 *      200:
 */
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Dreamverse server listening at http://localhost:${8000}`)
})
