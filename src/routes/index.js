const express = require('express');
const usuariosRoute = require('./users');
const fornecedorRoute = require('./fornecedores');
const clienteRoute = require('./clientes')

const router = express.Router();

router.use('/clientes', clienteRoute);
router.use('/fornecedores', fornecedorRoute);
router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
