const PayController = require('../controllers/cart.controller');

module.exports = function(app) {
    app.get('/api/checkout', PayController.getPayment);
    app.post('/api/checkout', PayController.createPayment);
};