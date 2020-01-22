const mongoose = require("mongoose");
const Config = require("../config/config");


function connect(){
    mongoose.connect(Config.MONGO_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true},() =>{
        console.log("conectado ao Banco de Dados")
    });
}

module.exports = connect;
