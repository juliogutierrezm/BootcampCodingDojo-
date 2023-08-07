const express = require("express");
const app = express();
const jokeRoutes = require("./routes/jokes.router"); // Importa las rutas de bromas

app.use(express.json());
require("./config/mongo.config");

// Configura las rutas en el servidor
app.use(jokeRoutes); // Agrega las rutas de bromas

app.listen(8000, () => {
  console.log("Conectado al puerto 8000");
});
 