const {
	findAll,
	insert,
} = require("../service/participante");

const ROL_PARTICIPANTE = 1;
const ROL_ORGANIZADOR  = 2;

exports.creaParticipante = async function (request, response) {
   console.log(request.body);
	const {id_intercambio, id_usuario} = request.body;
	const participante = await insert({id_intercambio, id_usuario});

	response.status(201).json(participante);
};

exports.getParticipantes = async function (request, response) {
	const { id_intercambio } = request.params;
	const participantes = await findAll( id_intercambio );
	response.status(200).json(participantes);
};