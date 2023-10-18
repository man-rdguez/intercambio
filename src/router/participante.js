const express = require("express");
const router = express.Router();
const {
	creaParticipante,
	getParticipantes,
//	getParticipanteById,
//	getParticipanteByFechaParticipante,
//	updateParticipante,
} = require("../controller/participante");
const validator = require("../middleware/validator");
//const jwtValidator = require("../middleware/jwt");

const {
   creaEsquemaParticipante,
   updateEsquemaParticipante,
	paramsEsquema,
} = require("../validation/participante");

router.get("/intercambios/:id_intercambio/participantes", getParticipantes);
//router.get("/participantes/:id_participante", validator.params(paramsEsquema), getParticipanteById);
router.post(
	"/intercambios/participantes",
	creaParticipante
);
/*
router.post(
	"/participantes",
	//jwtValidator,
	validator.body(creaEsquemaParticipante),
	creaParticipante
);
*/
/*
router.put(
	"/participantes/:id_participante",
	//jwtValidator,
	validator.params(paramsEsquema),
	validator.body(updateEsquemaParticipante),
	updateParticipante
);
*/

module.exports = router;