const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pedido = new Schema({
    idPrato: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    status: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    dataEntrega: {
        type: Date,
    }
});

const Pedido = mongoose.model('pedido', pedido);
module.exports = Pedido;