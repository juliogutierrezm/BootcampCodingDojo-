const Venta = require('../models/sells.model');

// Controlador para crear una nueva venta
exports.createVenta = async (req, res) => {
  try {
    const nuevaVenta = new Venta(req.body);
    await nuevaVenta.save();
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la venta' });
  }
};

// Controlador para obtener ventas pasadas
exports.getVentasPasadas = async (req, res) => {
  try {
    const ventas = await Venta.find().exec();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ventas pasadas' });
  }
};

// Otros controladores según tus necesidades
