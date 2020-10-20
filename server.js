const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

//Connect DB
connectDB()

app.get('/', (req, res) => res.send('API Running'))

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`)
})
