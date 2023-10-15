const express = require("express");
const router = express.Router();
const { creaUsuario } = require("../controller/usuario");
const { creaEsquemaUsuario} = require("../validation/usuario");
const validator = require("../middleware/validator");

router.post("/usuarios", validator.body(creaEsquemaUsuario), creaUsuario);

module.exports = router;