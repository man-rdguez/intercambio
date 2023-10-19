const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("rol_participante", {
},
{
	tableName: 'rol_participante',
	timestamps: false,
});