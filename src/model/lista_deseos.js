const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("lista_deseos", {
	descripcion: {
		type: DataTypes.STRING(120),
		allowNull: false,
		unique: true,
	},
	url: {
		type: DataTypes.STRING(500),
		allowNull: false,
		unique: true,
	},
},
{
	tableName: 'lista_deseos',
	timestamps: false,
});