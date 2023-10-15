const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("intercambio", {
	descripcion: {
		type: DataTypes.STRING(120),
		allowNull: false,
		unique: true,
	},
	/*
	id_estado_intercambio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	*/
	fecha_sorteo: {
		type: DataTypes.DATE,
		allowNull: false,
		unique: true,
	},
	fecha_intercambio: {
		type: DataTypes.DATE,
		allowNull: false,
		unique: true,
	},
},
{
	tableName: 'intercambio',
	timestamps: false,
});
