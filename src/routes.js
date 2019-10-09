
//Imports de bibliotecas usadas na aplicacao
const express = require('express');


//Imports dos controllers usados, modificar de acordo com os seus controllers.
/*
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');
*/

//Router
const routes = express.Router();

//Rotas da aplicacao de acordo com sua URL e o Controller especifico.
//As rotas pode ser POST, GET, PUT ou DELETE
//Os metodos do controller pode ser Store, Index, show, save... 
routes.post('/', "coloque aqui seu controller");
routes.get('/', 'controller e metodo que ira chamar');
routes.put('/', "controller e metodo que ira chamar");
routes.delete('/', 'controller e metodod que ira chamar');

//Export de rotas
module.exports = routes;
