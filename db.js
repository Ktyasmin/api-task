// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',     
//     password: '',     
//     database: 'user-app'
// });

// connection.connect((err) => {
//     if (err) {
//         console.log("Error connecting to MySQL:", err);
//         return;
//     }
//     console.log("MySQL Connected!");
// });

// module.exports = connection;

const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL Connected!");
});

module.exports = connection;


