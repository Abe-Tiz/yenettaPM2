const mysql = require("mysql");
//db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "productInventory",
});

module.exports = db;
