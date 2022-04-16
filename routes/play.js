const express = require("express");
const router = express.Router();

const { play } = require("../models/model");

router.get("/:serie", (req, res) => {
  const { serie } = req.params;
  const { user } = req.query;
  try {
    const msg = play(serie, user);
    res.json({ msg: msg });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
