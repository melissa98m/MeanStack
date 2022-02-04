const express = require('express'),
    saleRoutes = express.Router(),
    SaleController = require('../controllers/sale');
const {getById} = require("../controllers/sale");
    isAuth = require('../../config/passport').checkIsAuth; // check si l'utilisateur est connecter pour acceder

module.exports = (app) => {

    saleRoutes.get('/sale/:id', isAuth,SaleController.getById);

    saleRoutes.post('/sale',isAuth,SaleController.add);

    saleRoutes.put('/sale/:id',isAuth,SaleController.updateById);

    saleRoutes.delete('/sale/:id',isAuth,SaleController.deleteById);

    app.use('/', saleRoutes)

};
