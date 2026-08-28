const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql = `
        INSERT INTO contact_messages (name, email, message)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("Error saving message:", err.message);

            return res.status(500).json({
                success: false,
                message: "Failed to save message."
            });
        }

        console.log("Contact message saved to MySQL!");

        res.json({
            success: true,
            message: "Message sent successfully!"
        });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});