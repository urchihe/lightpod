const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Light Pod L3 Backend is running" });
});

// Example API route
app.get("/api/status", (req, res) => {
  res.json({
    system: "Light Pod L3",
    status: "online",
    timestamp: new Date()
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});