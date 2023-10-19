const express = require("express");
const router = express.Router();
const {
	creaParticipante,
	getParticipantes,
} = require("../controller/participante");
const validator = require("../middleware/validator");

const {
   creaEsquemaParticipante,
   updateEsquemaParticipante,
	paramsEsquema,
} = require("../validation/participante");

router.get("/intercambios/:id_intercambio/participantes", getParticipantes);
router.post(
	"/intercambios/participantes",
	creaParticipante
);

module.exports = router;