const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
console.log("🔍 MONGO_URI from .env:", process.env.MONGO_URI); // Debug log

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB error:", err));

app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});
