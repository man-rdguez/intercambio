const { findByNombre_Usuario } = require("../service/usuario");
const jwt = require("jsonwebtoken");

exports.login = async function (request, response) {
	const { nombre_usuario, password } = request.body;

	const usuario = await findByNombre_Usuario(nombre_usuario);

	if (!usuario) {
		return response.status(400).json({
			message: "Usuario o contraseña inválidos",
			messagedev: "No se encontro el usuario en la base de datos",
			code: "ERR_AUTH",
		});
	}

	if (usuario.password !== password) {
		return response.status(400).json({
			message: "Usuario o contraseña inválidos",
			messagedev: "No se encontro el usuario en la base de datos",
			code: "ERR_AUTH",
		});
	}

	const token = jwt.sign(
		{ id: usuario.id, nombre_usuario: usuario.nombre_usuario },
		process.env.JWT_SECRET
	);

	response.status(200).json({
		jwt: token,
	});
};
