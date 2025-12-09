const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(bodyParser.json());

// POST API to add a user
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    // Validate request body
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error("Database error:", err);  // log the actual error
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "User added successfully!", userId: result.insertId });
    });
});

// GET API to fetch all users
app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(results);
    });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
