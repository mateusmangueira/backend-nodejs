const mongoose = require('mongoose');
const Product = require('Product');

module.exports = {
  //Logica dos metodos de controle do model: Product

  //Metodo para listar todos produtos, se quiser passa parametros para funcao .find()
  async index(req, res) {
    //Cria um produto que esta no DB do mongoose
    //paginate serve para especificar quantos produtos por pagina vao ser retornados do mongoose
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 },
    );
    //Retorna um json para ser consumido pelo FrontEnd
    return res.json(products)
  },

  //Metodo para retorna um produto pelo id
  async show(req, res) {
    //Procura no DB pelo ID do produto
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  //Metodo para atualizar um produto especifico pelo ID
  async update(req, res) {
    //Procura pelo Id e ja atualiza o produto com o .body no segundo parametro
    // new: true serve para retornar o produto dps de atualizar.
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
  },

  async delete(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    res.send();
  },

  //Metodo para criar um novo produto
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  }
}