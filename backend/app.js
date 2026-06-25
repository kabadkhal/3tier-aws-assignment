//javascript
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to 3-Tier AWS Assignment 🚀");
});

// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is working successfully!"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});

