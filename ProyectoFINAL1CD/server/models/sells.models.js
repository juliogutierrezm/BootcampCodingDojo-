const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  fechaVenta: { type: Date, default: Date.now },
  cliente: { type: String },
  productosVendidos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
      cantidad: { type: Number },
      precioTotal: { type: Number },
    },
  ],
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
