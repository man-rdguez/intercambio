const Participante = require("../model/participante");

exports.insert = function (data) {
   console.log(data);
	return Participante.create(data);
};

exports.findAll = function ( id_intercambio ) {
	// SELECT * FROM participante WHERE id_intercambio = '...';
	return Participante.findAll({
		where: {
			id_intercambio,
		},
	});
};