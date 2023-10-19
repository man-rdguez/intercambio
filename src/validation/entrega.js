const Joi = require("joi");

exports.creaEsquemaEntrega = Joi.object({
	id_intercambio: Joi.number().required(),
	id_otorgante: Joi.number().required(),
	id_receptor: Joi.number().required(),
	id_estado_entrega: Joi.number().required(),
});

exports.updateEsquemaEntrega = Joi.object({
	id_intercambio: Joi.number().optional(),
	id_otorgante: Joi.number().optional(),
	id_receptor: Joi.number().optional(),
	id_estado_entrega: Joi.number().optional(),
}).min(1);

exports.paramsEsquema = Joi.object({
	id_intercambio: Joi.number().required(),
});