//Imports da classe Product
const mongoose = require('mongoose');

//Construtor do Schema para o DB
const ProductSchema = new mongoose.Schema({
  //Adiciona atributos do model Product
  title: {
    //Adiciona o tipo do atributo
    type: String,
    //Passando que eh obrigatorio existir no DB
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    //Tipo desse atributo eh a classe Date
    type: Date,
    //Sera criado automaticamente pela classe data pegando automaticamente
    default: Date.now,
  }
});

//Passa para o DB que existe um Model chamado ProductSchema
//Pra finalizar o Model, precisa Importar ele no Servidor: server.js
mongoose.model('Product', ProductSchema);