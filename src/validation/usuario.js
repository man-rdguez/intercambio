const Joi = require("joi");

exports.creaEsquemaUsuario = Joi.object({
	nombre_usuario: Joi.string()
		.min(5)
		.max(50)
		.pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
		.required(),
	password: Joi.string().min(8).max(50).required(),
	nombre: Joi.string().max(120).required(),
	email: Joi.string().max(120).email().required(),
});

exports.loginSchema = Joi.object({
	nombre_usuario: Joi.string().min(5).max(50).required(),
	password: Joi.string().min(8).max(50).required(),
});