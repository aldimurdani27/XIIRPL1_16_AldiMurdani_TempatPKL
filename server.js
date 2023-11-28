const express = require('express')
const app = express()
const port = 5000
const companyrouter = require('./router/company')
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Selamat datang di pendataan tempat pkl!')
})

connectDB()
app.use(companyrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})