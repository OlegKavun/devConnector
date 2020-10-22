const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

//Connect DB
connectDB()

//Init middlware

app.use(express.json({extended:false}))

app.get('/', (req, res) => res.send('API Running'))

//Define Routes
app.use('/api/user', require('./routes/api/user'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`)
})
