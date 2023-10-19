const Joi = require("joi");

exports.creaEsquemaParticipante = Joi.object({
	id_usuario: Joi.number().required(),
	id_participante: Joi.number().required(),
});

exports.updateEsquemaParticipante = Joi.object({
	id_usuario: Joi.number().optional(),
	id_participante: Joi.number().optional(),
}).min(1);

exports.paramsEsquema = Joi.object({
	id_participante: Joi.number().required(),
});