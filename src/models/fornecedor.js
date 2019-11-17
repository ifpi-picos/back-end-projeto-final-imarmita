const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const camposFornecedor = {
    nomeRestaurante: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true,},
    telefone: {type: String, required: true},
    senha: {type: String, required: true},
    endereço: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
}

const schema = new Schema(camposFornecedor);

const Fornecedores = mongoose.model("fornecedores", schema);

module.exports = Fornecedores;