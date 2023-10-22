const Usuario = require("../model/usuario");

exports.insert = function (data) {
	return Usuario.create(data);
};

exports.findByNombre_Usuario = function (nombre_usuario) {
	// SELECT * FROM usuario WHERE usuario = '...';
	return Usuario.findOne({
		where: {
			nombre_usuario,
		},
	});
};

exports.findById = function (id) {
	// SELECT * FROM usuario WHERE id = '...';
	return Usuario.findByPk(id);
};