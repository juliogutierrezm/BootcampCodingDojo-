// routes/product.routes.js
const CartController = require('../controllers/cart.controller');

module.exports = function(app) {
    app.get('/api/cart', CartController.getAllProductsCart);
    app.post('/api/cart', CartController.createProductCart);
    app.delete('/api/cart/:id', CartController.deleteProductCart);
    app.get('/api/cart/:id', CartController.getOneProductCart);
    app.patch('/api/cart/:id', CartController.updateProductCart); 
};

