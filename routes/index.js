"use strict";
// const { response } = require('../app')

const express = require("express");
const router = express.Router();

const users = require("./users");
const series = require("./series");
const watchAgain = require("./watchAgain");
const rating = require("./rating");
const play = require("./play");

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

router.use("/users", users);
router.use("/series", series);
router.use("/watchAgain", watchAgain);
router.use("/rating", rating);
router.use("/play", play);

// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.
module.exports = router;
