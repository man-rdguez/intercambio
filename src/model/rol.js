const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("rol", {
	nombre: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
},
{
	tableName: 'rol',
	timestamps: false,
});