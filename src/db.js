const { connect, sync } = require("./model/sequelize");
const Usuario = require("./model/usuario");
const Participante = require("./model/participante");
const Intercambio = require("./model/intercambio");
const Estado_Intercambio = require("./model/estado_intercambio");
const Rol = require("./model/rol");
const Rol_Participante = require("./model/rol_participante");
const Lista_Deseos = require("./model/lista_deseos");
const Entrega = require("./model/entrega");
const Estado_Entrega = require("./model/estado_entrega");

// "Un usuario puede participar en muchos intercambios"
Usuario.hasMany(Participante, {foreignKey: 'id_usuario', allowNull: false});
Participante.belongsTo(Usuario, {foreignKey: 'id_usuario', allowNull: false});

// "Un intercambio tiene muchos participantes
Intercambio.hasMany(Participante, {foreignKey: 'id_intercambio', allowNull: false});
Participante.belongsTo(Intercambio, {foreignKey: 'id_intercambio', allowNull: false});

// "Un intercambio tiene un estado"
Estado_Intercambio.hasMany(Intercambio, {foreignKey: 'id_estado_intercambio', allowNull: false});
Intercambio.belongsTo(Estado_Intercambio, {foreignKey: 'id_estado_intercambio', allowNull: false});

// "Un intercambio tiene muchas entregas"
Intercambio.hasMany(Entrega, {foreignKey: 'id_intercambio', allowNull: false});
Entrega.belongsTo(Intercambio, {foreignKey: 'id_intercambio', allowNull: false});

// "Un participante otorga un regalo"
Participante.hasMany(Entrega, {foreignKey: 'id_otorgante', allowNull: false});
Entrega.belongsTo(Participante, {foreignKey: 'id_otorgante', allowNull: false});

// "Un participante recibe un regalo"
Participante.hasMany(Entrega, {foreignKey: 'id_receptor', allowNull: false});
Entrega.belongsTo(Participante, {foreignKey: 'id_receptor', allowNull: false});

// "Un participante tiene muchos roles"
Participante.hasMany(Rol_Participante, {foreignKey: 'id_participante', allowNull: false});
Rol_Participante.belongsTo(Participante, {foreignKey: 'id_participante', allowNull: false});

// "Un rol esta asociado a muchos participantes"
Rol.hasMany(Rol_Participante, {foreignKey: 'id_rol', allowNull: false});
Rol_Participante.belongsTo(Rol, {foreignKey: 'id_rol', allowNull: false});

// "Un participante tiene muchos deseos"
Participante.hasMany(Lista_Deseos, {foreignKey: 'id_participante', allowNull: false});
Lista_Deseos.belongsTo(Participante, {foreignKey: 'id_participante', allowNull: false});

Estado_Entrega.hasMany(Entrega, {foreignKey: 'id_estado_entrega', allowNull: false});
Entrega.belongsTo(Estado_Entrega, {foreignKey: 'id_estado_entrega', allowNull: false});

exports.initDatabase = async function () {
	await connect();
	await sync();
};
