const {
   findByOtorgante,
   raffle
} = require("../service/entrega");

const ROL_otorgante = 1;
const ROL_ORGANIZADOR  = 2;

exports.getEntregaByOtorgante = async function (request, response) {
	const { id_otorgante } = request.params;
	const entrega = await findByOtorgante(id_otorgante);
	response.status(200).json(entrega);
};

exports.performRaffle = async function (request, response) {
	const { id_intercambio } = request.params;
	const entregas = await raffle( id_intercambio );
	response.status(200).json(entregas);
};