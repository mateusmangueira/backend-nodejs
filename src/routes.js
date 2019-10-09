//Imports de bibliotecas usadas na aplicacao
const express = require('express');

//Router
const routes = express.Router();

//Imports dos controllers usados, modificar de acordo com os seus controllers.
const ProductController = require('./controllers/ProductController');

//Rotas da aplicacao de acordo com sua URL e o Controller especifico.
//As rotas pode ser POST, GET, PUT ou DELETE
//Os metodos do controller pode ser Store, Index, show, save... 
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

//Export as rotas para utilizar no servidor
module.exports = routes;
