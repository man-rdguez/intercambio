const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("rol_participante", {
	/*
	id_participante: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_rol: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
*/
},
{
	tableName: 'rol_participante',
	timestamps: false,
});