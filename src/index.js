// src/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const numberRoutes = require("./routes/index"); // Import your routes

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Root route: Redirect to /api/classify-number?number=9
app.get("/", (req, res) => {
  res.redirect("/api/classify-number");
});

// Mount routes under /api
app.use("/api", numberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});

module.exports = app; // Export for testing if needed
