
//Imports de bibliotecas usadas na aplicacao
const express = require('express');

//Router
const routes = express.Router();

//Imports dos controllers usados, modificar de acordo com os seus controllers.
const ProductController = require('./controllers/ProductController');

/*
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');
*/



//Rotas da aplicacao de acordo com sua URL e o Controller especifico.
//As rotas pode ser POST, GET, PUT ou DELETE
//Os metodos do controller pode ser Store, Index, show, save... 
routes.get('/products', ProductController.index);

/*
routes.get('/', 'controller e metodo que ira chamar');
routes.put('/', "controller e metodo que ira chamar");
routes.delete('/', 'controller e metodod que ira chamar');
*/

//Export as rotas para utilizar no servidor
module.exports = routes;
