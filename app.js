const express = require("express");

const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});
const port = 5000;

db.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Mysql connected")
  }
});
app.get("/", (req, res) => {
  res.send("<h1>Home Page");
});

app.listen(port, () => {
  console.log(`Server is working ${port}`);
});
