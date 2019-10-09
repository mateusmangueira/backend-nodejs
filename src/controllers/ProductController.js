const mongoose = require('mongoose');
const Product = require('Product');

module.exports = {
  //Logica dos metodos de controle do model: Product

  //Metodo para listar os produtos, se quiser passa parametros para funcao .find()
  async index(req,res) {
    //Cria um produto que esta no DB do mongoose
    const products = await Product.find();
    //Retorna um json para ser consumido pelo FrontEnd
    return res.json(products)
  },
}