const express = require("express");

const mysql = require("mysql");
const env = require("dotenv");

dotenv.config({ path: "./env" });
const app = express();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABSE_USER,
  password:process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
const port = 5000;

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql connected");
  }
});
app.get("/", (req, res) => {
  res.send("<h1>Home Page");
});

app.listen(port, () => {
  console.log(`Server is working ${port}`);
});
