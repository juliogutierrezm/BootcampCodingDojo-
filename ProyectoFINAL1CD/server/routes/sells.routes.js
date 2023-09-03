const express = require('express');
const router = express.Router();
const ventaController = require('./controllers/sells.controller');


router.post('/ventas', ventaController.createVenta);


router.get('/ventas', ventaController.getVentasPasadas);



module.exports = router;
