require('dotenv').config()
const express = require('express')
const cors = require('cors')
const BodyParser = require('body-parser')

const connectDB = require('./DB/connect.js')

connectDB.then(() => console.log('connectDB'))
  .catch(err => console.log(err))

const CRUD = require('./routes/CRUD.js')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.options('*', cors)
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended: true}))

app.use('/api', CRUD)

app.get('', (req, res) => {
  res.status(200).send('Hello World')
})

app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));