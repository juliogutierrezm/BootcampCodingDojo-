const { createUser, loginUser } = require("../controllers/users.controller");
const express = require('express');
const router = express.Router(); // Crea un nuevo enrutador

// Define las rutas utilizando el enrutador
router.post("/users/register/", createUser);
router.post("/users/login/", loginUser);

module.exports = router; // Exporta el enrutador
