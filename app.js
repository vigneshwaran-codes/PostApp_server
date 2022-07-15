const express = require('express')
const dotenv = require('dotenv')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
// Mongo
const mongo = require('./helper')

dotenv.config()

const app = express()
const PORT = process.env.PORT

// Req -> Parse body
app.use(express.json())

async function loadApp () {
  try {
    // Mongo Connection
    await mongo.connect()

    app.get('/', (req, res) => {
      res.send('Welcome to my blog app')
    })

    // Started Server
    app.listen(PORT, () => {
      console.log('the Sever is Connected Successfully', PORT)
    })
  } catch (err) {
    console.log(err)
  }
}

loadApp()

app.use('/posts', postRoute)
app.use('/users', userRoute)
