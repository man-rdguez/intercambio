const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("estado_intercambio", {
	nombre: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
},
{
	tableName: 'estado_intercambio',
	timestamps: false,
});