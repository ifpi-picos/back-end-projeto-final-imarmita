const moogose = require("mongoose");
const Schema = moogose.Schema;

const prato = new Schema({
    idFornecedor: {
        type: Schema.Types.ObjectId, 
        ref : 'fornecedores',
        require: true
    },
    nome: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        require: true,
    },
    itens: {
        type: Array,
        require: true,
    }
})

const Prato = moogose.model("prato", prato)
module.exports = Prato;