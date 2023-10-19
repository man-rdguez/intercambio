const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("entrega", {
},
{
	tableName: 'entrega',
	timestamps: false,
});