const express = require('express');

const router = express.Router();
const PedidoModel = require('../models/pedido');
const PedidoContrutor = require('../controllers/pedidos');
const pedido = new PedidoContrutor(PedidoModel);

router.post('/', (req, res) => {
    pedido.efetuarPedido(req, res);
});

module.exports = router;