import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './services/database/connection'

dotenv.config()
const app = express()
const port = 3000

connectDb()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(process.env.DB_HOST)
  console.log(`Example app listening at http://localhost:${port}`)
})