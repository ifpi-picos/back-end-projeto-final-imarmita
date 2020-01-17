const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
});

const Cliente = mongoose.model('cliente', cliente);

module.exports = Cliente;
