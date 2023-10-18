const {
//	findAll,
//	findById,
//	findByFechaEntrega,
//	insert,
//	update,
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

//const insert_otorgante = require("../service/otorgante.insert");

/*
exports.creaEntrega = async function (request, response) {
   console.log(request.body);
	const {descripcion, fecha_sorteo, fecha_entrega, id_estado_entrega} = request.body;
	const entrega = await insert({ descripcion, fecha_sorteo, fecha_entrega, id_estado_entrega});
   //const otorgante = await insert_otorgante({ id_usuario: request.id_usuario, id_entrega: entrega.id});
   //const rol_otorgante = await insert_rol_otorgante({ id_otorgante: otorgante.id, id_rol: ROL_otorgante });
   //const rol_otorgante = await insert_rol_otorgante({ id_otorgante: otorgante.id, id_rol: ROL_ORGANIZADOR });

	response.status(201).json(entrega);
};

exports.getEntregas = async function (request, response) {
	const entregas = await findAll();
	response.status(200).json(entregas);
};

exports.getEntregaById = async function (request, response) {
	const { id_entrega } = request.params;
	const entrega = await findById(id_entrega);
	response.status(200).json(entrega);
};

exports.getEntregaByFechaEntrega = async function (request, response) {
	const { fecha_entrega } = request.params;
	const entrega = await findByFechaEntrega(fecha_entrega);
	response.status(200).json(entrega);
};

exports.updateEntrega = async function (request, response) {
	const { descripcion } = request.body;
	const { id_entrega } = request.params;

	await update(id_entrega, { descripcion });
	response.status(204).end();
};
*/