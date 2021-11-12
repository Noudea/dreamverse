import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './services/database/connection'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { SwaggerOptions } from './documentation/swagger'

dotenv.config()
const app = express()
const port = 3000
connectDb()


const specs = swaggerJsDoc(SwaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

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
app.get('/helloWorld', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Dreamverse server listening at http://localhost:${port}`)
})