const express = require("express");
const router = express.Router();
const {
	//creaEntrega,
	//getEntregas,
	//getEntregaById,
	//getEntregaByFechaEntrega,
	//updateEntrega,
	getEntregaByOtorgante,
	performRaffle,
} = require("../controller/entrega");
const validator = require("../middleware/validator");
//const jwtValidator = require("../middleware/jwt");

const {
   creaEsquemaEntrega,
   updateEsquemaEntrega,
	paramsEsquema,
} = require("../validation/entrega");

router.get("/intercambios/entregas/:id_otorgante", validator.params(paramsEsquema), getEntregaByOtorgante);

router.post("/intercambios/:id_intercambio/entregas/raffles", validator.params(paramsEsquema), performRaffle);

/*
router.get("/entregas", getEntregas);
router.get("/entregas/:id_entrega", validator.params(paramsEsquema), getEntregaById);
router.post(
	"/entregas",
	creaEntrega
);
*/
/*
router.post(
	"/entregas",
	//jwtValidator,
	validator.body(creaEsquemaEntrega),
	creaEntrega
);
router.put(
	"/entregas/:id_entrega",
	//jwtValidator,
	validator.params(paramsEsquema),
	validator.body(updateEsquemaEntrega),
	updateEntrega
);
*/

module.exports = router;