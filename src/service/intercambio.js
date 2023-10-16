const Intercambio = require("../model/intercambio");

exports.insert = function (data) {
   console.log(data);
	return Intercambio.create(data);
};

exports.findByFechaIntercambio = function (fecha_intercambio) {
	// SELECT * FROM intercambio WHERE intercambio = '...';
	return Intercambio.findOne({
		where: {
			fecha_intercambio,
		},
	});
};

exports.findById = function (id) {
	// SELECT * FROM intercambio WHERE id = '...';
	return Intercambio.findByPk(id);
};

exports.findAll = function () {
	return Intercambio.findAll();
};

exports.update = async function (id, data) {
	await Intercambio.update(data, {
		where: {
			id,
		},
	});
};