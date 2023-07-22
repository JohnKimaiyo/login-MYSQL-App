const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('<h1>Home Page')
})

app.listen(port, () => {
  console.log(`Server is working ${port}`)
})