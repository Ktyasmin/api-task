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


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) console.error("Error connecting to MySQL:", err);
    else console.log("MySQL Connected!");
});

module.exports = connection;
