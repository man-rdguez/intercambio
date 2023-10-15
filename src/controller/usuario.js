const { insert } = require("../service/usuario");

exports.creaUsuario = async function (request, response) {
	const {nombre_usuario, password, nombre, email } = request.body;
	const usuario = await insert({ nombre_usuario, password, nombre, email });
	response.status(201).json(usuario);
};
