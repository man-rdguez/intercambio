const express = require("express");
const router = express.Router();
const {
	getEntregaByOtorgante,
	performRaffle,
} = require("../controller/entrega");
const validator = require("../middleware/validator");
const jwtValidator = require("../middleware/jwt");

const {
   creaEsquemaEntrega,
   updateEsquemaEntrega,
	paramsEsquema,
} = require("../validation/entrega");

router.get("/intercambios/entregas/:id_otorgante", validator.params(paramsEsquema), getEntregaByOtorgante);

router.post("/intercambios/:id_intercambio/entregas/raffles", jwtValidator, validator.params(paramsEsquema), performRaffle);

module.exports = router;