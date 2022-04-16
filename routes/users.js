"use strict";

const express = require("express");
const router = express.Router();

const { addUser, listUsers, switchPlan } = require("../models/model");

router.get("/plan", (req, res) => {
  // const { user } = req.query;
  res.json("Hola");
  // try {
  // const msg = switchPlan(user);
  // res.json({ msg: msg });
  // } catch (err) {
  // res.status(404).json({ error: err });
  // }
});

router.get("/", (req, res) => {
  res.json(listUsers());
});

router.post("/", (req, res) => {
  const { email, name } = req.body;
  try {
    const msg = addUser(email, name);
    res.status(201).json({ msg: msg });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
