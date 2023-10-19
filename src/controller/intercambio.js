const {
	findAll,
	findById,
	findByFechaIntercambio,
	insert,
	update,
} = require("../service/intercambio");

const ROL_PARTICIPANTE = 1;
const ROL_ORGANIZADOR  = 2;

exports.creaIntercambio = async function (request, response) {
   console.log(request.body);
	const {descripcion, fecha_sorteo, fecha_intercambio, id_estado_intercambio} = request.body;
	const intercambio = await insert({ descripcion, fecha_sorteo, fecha_intercambio, id_estado_intercambio});
	response.status(201).json(intercambio);
};

exports.getIntercambios = async function (request, response) {
	const intercambios = await findAll();
	response.status(200).json(intercambios);
};

exports.getIntercambioById = async function (request, response) {
	const { id_intercambio } = request.params;
	const intercambio = await findById(id_intercambio);
	response.status(200).json(intercambio);
};

exports.getIntercambioByFechaIntercambio = async function (request, response) {
	const { fecha_intercambio } = request.params;
	const intercambio = await findByFechaIntercambio(fecha_intercambio);
	response.status(200).json(intercambio);
};

exports.updateIntercambio = async function (request, response) {
	const { descripcion } = request.body;
	const { id_intercambio } = request.params;

	await update(id_intercambio, { descripcion });
	response.status(204).end();
};