const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const DB = process.env.DATABASE

const mongoose = require('mongoose')
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful!'))
  .catch((err) => {
    console.log(err)
  })

const userRouter = require('./routes/user')
app.use('/api/users', userRouter)
const userAuth = require('./routes/auth')
app.use('/api/auth', userAuth)

app.listen(process.env.PORT || 5000, () => {
  console.log('server running')
})
