const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(require("cors")());

// Sample route
app.get("/", (req, res) => {
    res.json({ message: "Hello, world!" });
});

// Another API route
app.get("/api/data", (req, res) => {
    res.json({ data: "Sample data from API" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
