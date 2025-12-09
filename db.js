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
    host: process.env.DB_HOST,       // Use Render environment variable
    user: process.env.DB_USER,       // Use Render environment variable
    password: process.env.DB_PASSWORD, // Use Render environment variable
    database: process.env.DB_NAME    // Use Render environment variable
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL:", err);
        return;
    }
    console.log("MySQL Connected!");
});

module.exports = connection;
