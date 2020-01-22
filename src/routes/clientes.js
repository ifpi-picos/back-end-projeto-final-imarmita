const express = require('express');

const router = express.Router();
const ClienteModel = require('../models/cliente');
const ClienteControler = require('../controllers/clientes');
const cliente = new ClienteControler(ClienteModel);

router.post('/', (req, res)=>{
    cliente.cadastrarCliente(req, res);
});

module.exports = router;