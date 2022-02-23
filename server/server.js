import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './services/database/connection'
import Router from './router'
// import bodyParser from 'body-parser'

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

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Dreamverse server listening at http://localhost:${8000}`)
})
