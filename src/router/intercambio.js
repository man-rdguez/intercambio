const express = require("express");
const router = express.Router();
const {
	creaIntercambio,
	getIntercambios,
	getIntercambioById,
	getIntercambioByFechaIntercambio,
	updateIntercambio,
} = require("../controller/intercambio");
const validator = require("../middleware/validator");
//const jwtValidator = require("../middleware/jwt");

const {
   creaEsquemaIntercambio,
   updateEsquemaIntercambio,
	paramsEsquema,
} = require("../validation/intercambio");

router.get("/intercambios", getIntercambios);
router.get("/intercambios/:id_intercambio", validator.params(paramsEsquema), getIntercambioById);
router.post(
	"/intercambios",
	creaIntercambio
);
/*
router.post(
	"/intercambios",
	//jwtValidator,
	validator.body(creaEsquemaIntercambio),
	creaIntercambio
);
*/
router.put(
	"/intercambios/:id_intercambio",
	//jwtValidator,
	validator.params(paramsEsquema),
	validator.body(updateEsquemaIntercambio),
	updateIntercambio
);

module.exports = router;