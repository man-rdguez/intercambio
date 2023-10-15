const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("estado_entrega", {
	nombre: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
},
{
	tableName: 'estado_entrega',
	timestamps: false,
});