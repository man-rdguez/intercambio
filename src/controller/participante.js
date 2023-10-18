const {
	findAll,
	//findById,
	//findByFechaParticipante,
	insert,
	//update,
} = require("../service/participante");

const ROL_PARTICIPANTE = 1;
const ROL_ORGANIZADOR  = 2;

//const insert_participante = require("../service/participante.insert");

exports.creaParticipante = async function (request, response) {
   console.log(request.body);
	const {id_intercambio, id_usuario} = request.body;
	const participante = await insert({id_intercambio, id_usuario});
   //const participante = await insert_participante({ id_usuario: request.id_usuario, id_participante: participante.id});
   //const rol_participante = await insert_rol_participante({ id_participante: participante.id, id_rol: ROL_PARTICIPANTE });
   //const rol_participante = await insert_rol_participante({ id_participante: participante.id, id_rol: ROL_ORGANIZADOR });

	response.status(201).json(participante);
};

exports.getParticipantes = async function (request, response) {
	const { id_intercambio } = request.params;
	const participantes = await findAll( id_intercambio );
	response.status(200).json(participantes);
};

/*
exports.getParticipanteById = async function (request, response) {
	const { id_participante } = request.params;
	const participante = await findById(id_participante);
	response.status(200).json(participante);
};

exports.getParticipanteByFechaParticipante = async function (request, response) {
	const { fecha_participante } = request.params;
	const participante = await findByFechaParticipante(fecha_participante);
	response.status(200).json(participante);
};

exports.updateParticipante = async function (request, response) {
	const { descripcion } = request.body;
	const { id_participante } = request.params;

	await update(id_participante, { descripcion });
	response.status(204).end();
};
*/