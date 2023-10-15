const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("participante", {
	/*
	id_usuario: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_intercambio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	*/
},
{
	tableName: 'participante',
	timestamps: false,
});