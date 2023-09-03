const bcrypt = require("bcrypt");
const Usuario = require("../models/users.models");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Incorrect email"  });
    }
 
    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;

        const data = {
          id,
          nombre,
        };

        const token = jwt.sign(data, "secreto", {
          expiresIn: 86400 /* 24hs */,
        });

        res.json({
          mensaje: "User successfully logged in",
          usuario: {
            id,
            nombre,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Incorrect password" });
      }
    });
  });
};

module.exports = login;
