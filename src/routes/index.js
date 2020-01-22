const express = require('express');
const usuariosRoute = require('./users');
const fornecedorRoute = require('./fornecedores');
const clienteRoute = require('./clientes')
const pratoRoute = require('./prato');
const prato_semanaRoute = require('./prato_semana');
const pedidoRoute = require('./pedidos');

const router = express.Router();

router.use('/pedido', pedidoRoute);
router.use('/prato_semana', prato_semanaRoute);
router.use('/prato', pratoRoute);
router.use('/clientes', clienteRoute);
router.use('/fornecedores', fornecedorRoute);
router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.json({msg: 'App Online!'}));

module.exports = router;
