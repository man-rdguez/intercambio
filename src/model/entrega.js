const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("entrega", {
	/*
	id_intercambio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_otorgante: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_receptor: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_estado_entrega: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
*/
},
{
	tableName: 'entrega',
	timestamps: false,
});