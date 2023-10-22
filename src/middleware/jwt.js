const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findById } = require("../service/usuario");

passport.use(
	new Strategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async function (payload, done) {
			const usuario = await findById(payload.id);

			if (!usuario) {
				return done({ message: "El usuario no existe en la base de datos" });
			}

			// Se crea el request.usuario
			done(null, usuario);
		}
	)
);

module.exports = passport.authenticate("jwt", { session: false });