const express = require("express");
const router = express.Router();

const { addSerie, listSeries, rateSerie } = require("../models/model");

router.get("/", (req, res) => {
  res.json(listSeries());
});

router.get("/:category", (req, res) => {
  const { category } = req.params;
  try {
    res.json(listSeries(category));
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("/", (req, res) => {
  const { name, seasons, category, year } = req.body;
  try {
    const msg = addSerie(name, seasons, category, year);
    res.status(201).json({ msg: msg });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
