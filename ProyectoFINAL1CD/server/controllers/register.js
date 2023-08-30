const bcrypt = require("bcrypt");
const Usuario = require("../models/users.models");

const register = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "This email is already registered" });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ mensaje: "Missing name / email / password" });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contraseña: contraseñaHasheada,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "User created successfully", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
}; 

module.exports = register;
