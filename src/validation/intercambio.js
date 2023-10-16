const Joi = require("joi");

exports.creaEsquemaIntercambio = Joi.object({
	descripcion: Joi.string().min(5).max(120).required(),
	fecha_sorteo: Joi.date().required(),
	fecha_intercambio: Joi.date().required(),
});

exports.updateEsquemaIntercambio = Joi.object({
	descripcion: Joi.string().min(5).max(120).optional(),
	fecha_sorteo: Joi.date().optional(),
	fecha_intercambio: Joi.date().optional(),
}).min(1);

exports.paramsEsquema = Joi.object({
	id_intercambio: Joi.number().required(),
});