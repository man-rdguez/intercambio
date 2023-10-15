const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("usuario", {
	nombre_usuario: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			len: [8, 50],
		},
	},
	nombre: {
		type: DataTypes.STRING(120),
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING(120),
		allowNull: false,
		unique: true,
	},
},
{
	tableName: 'usuario',
	timestamps: false,
});
