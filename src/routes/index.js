// src/routes/numberRoutes.js
const express = require("express");
const router = express.Router();
const { classifyNumber } = require("../controllers/numberController");

router.get("/classify-number", classifyNumber);

module.exports = router;
