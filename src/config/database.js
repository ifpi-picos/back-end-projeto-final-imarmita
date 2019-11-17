const mongoose = require("mongoose");

function connect(){
    mongoose.connect('mongodb://localhost:27017/iMarmita', {useNewUrlParser: true},() =>{
        console.log("conectado ao Banco de Dados")
    });
}

module.exports = connect;
