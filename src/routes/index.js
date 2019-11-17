const express = require('express');
const usuariosRoute = require('./users');
const fornecedorRoute = require('./fornecedores');

const router = express.Router();

router.use('/fornecedores', fornecedorRoute);
router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
