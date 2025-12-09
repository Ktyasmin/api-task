const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',     
    password: '',     
    database: 'user-app'
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL:", err);
        return;
    }
    console.log("MySQL Connected!");
});

module.exports = connection;
