const { Sequelize } = require("sequelize");

/*
Si no tienes una base de datos, utiliza este código :)
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./bedu-plus.db",
});*/

const {
	MYSQL_HOST,
	MYSQL_DATABASE,
	MYSQL_USERNAME,
	MYSQL_PASSWORD,
	FORCE_DB_UPDATE,
	NODE_ENV
} = process.env;

console.log( 'MYSQL_USERNAME: ' + MYSQL_USERNAME );
console.log( 'MYSQL_PASSWORD: ' + MYSQL_PASSWORD );
console.log( 'NODE_ENV: ' + NODE_ENV );

const sequelize =
	process.env.NODE_ENV === "test"
		? new Sequelize("sqlite::memory:")
		: new Sequelize({
				dialect: "mysql",
				host: MYSQL_HOST,
				username: MYSQL_USERNAME,
				password: MYSQL_PASSWORD,
				database: MYSQL_DATABASE,
		  });

exports.sequelize = sequelize;

exports.connect = async function () {
	try {
		await sequelize.authenticate();
		console.log("> Conectado a la base de datos");
	} catch (e) {
		console.error("> No se puede conectar a la base de datos");
		console.error(e);
	}
};

exports.sync = async function () {
	try {
		await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
		console.log("> Base de datos actualizada");
	} catch (e) {
		console.error("> no se puede actualizar la base de datos");
		console.error(e);
	}
};
