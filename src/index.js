require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const routerUsuario = require("./router/usuario");
const routerIntercambio = require("./router/intercambio");

const validationError = require("./middleware/validation-error");
const unknownError = require("./middleware/unknown-error");

// Rutas
app.use(routerUsuario);
app.use(routerIntercambio);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});