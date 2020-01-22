const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prato_semana = new Schema({
    idFornecedor: {
        type: Schema.Types.ObjectId, 
        ref : 'fornecedores',
        require: true
    },
    segunda: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    terca: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    quarta: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    quinta: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    sexta: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    sabado: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    },
    domingo: {
        type: Schema.Types.ObjectId, 
        ref : 'Prato',
        require: true
    }
    
});

const Prato_Semana = mongoose.model('prato_semana', prato_semana);
module.exports = Prato_Semana;