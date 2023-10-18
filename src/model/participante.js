const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("participante", {
},
{
	tableName: 'participante',
	timestamps: false,
});