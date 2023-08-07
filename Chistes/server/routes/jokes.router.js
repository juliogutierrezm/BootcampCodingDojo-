// rutas de bromas
const express = require('express');
const router = express.Router(); // Importa el enrutador de Express

const {
  getAllJokes,
  getOneJoke,
  createJoke,
  updateJoke,
  deleteJoke,
} = require('../controllers/jokes.controller');

// Define las rutas usando el enrutador
router.get('/jokes/', getAllJokes);
router.get('/jokes/:id/', getOneJoke);
router.post('/jokes/', createJoke);
router.put('/jokes/:id/', updateJoke); // Cambiamos el método a PUT para actualizar
router.delete('/jokes/:id/', deleteJoke);

module.exports = router; // Exporta el enrutador
