const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(bodyParser.json());


app.post('/users', (req, res) => {
    const { name, email } = req.body;

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) throw err;
        res.json({ message: "User added successfully!", userId: result.insertId });
    });
});


app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
