const express = require("express");
const router = express.Router();

const { rateSerie } = require("../models/model");

router.post("/:serie", (req, res) => {
  const { serie } = req.params;
  const { email, score } = req.body;
  try {
    const msg = rateSerie(serie, email, score);
    res.status(200).json({ msg: msg });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
