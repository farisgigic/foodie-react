const express = require("express");
const pool = require("./db"); // Database connection
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true // If using cookies or session
}));

// Middleware to parse JSON
app.use(express.json());

// Test Database Connection
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Database connected:", res.rows[0]);
    }
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

// Login Endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Received email:", email);
    console.log("Received password:", password);

    try {
        // Check if user exists in the database
        const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        console.log("User query result:", userQuery.rows);

        const user = userQuery.rows[0];
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Compare provided password with the password in the database
        if (password !== user.password) {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (err) {
        console.error("Error during login:", err.message, err.stack);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
