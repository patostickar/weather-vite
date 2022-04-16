const express = require("express");
const router = express.Router();

const { watchAgain } = require("../models/model");

router.get("/", (req, res) => {
  const { user } = req.query;
  try {
    res.json(watchAgain(user));
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
