const express = require("express");
const router = express.Router();
const { login } = require("../controller/auth");
const validator = require("../middleware/validator");
const { loginSchema } = require("../validation/usuario");

router.post("/login", validator.body(loginSchema), login);

module.exports = router;