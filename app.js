const express = require('express')

const mysql =  require(("mysql"))
const app = express()

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:''
})
const port = 5000

app.get('/', (req, res) => {
  res.send('<h1>Home Page')
})

app.listen(port, () => {
  console.log(`Server is working ${port}`)
})