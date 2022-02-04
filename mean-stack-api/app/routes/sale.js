const express = require('express'),
    saleRoutes = express.Router(),
    SaleController = require('../controllers/sale');
    isAuth = require('../../config/passport').checkIsAuth; // check si l'utilisateur est connecter pour acceder

module.exports = (app) => {

    saleRoutes.get('/sale/:id',SaleController.getById);

    saleRoutes.post('/sale',SaleController.add);

    saleRoutes.put('/sale/:id',SaleController.updateById);

    saleRoutes.delete('/sale/:id',SaleController.deleteById);

    app.use('/', saleRoutes)

};
