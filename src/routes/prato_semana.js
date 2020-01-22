const express = require('express');

const router = express.Router();
const Prato_SemanaModel = require('../models/prato_semana');
const Prato_SemanaControler = require('../controllers/prato_semana');
const prato_semana = new Prato_SemanaControler(Prato_SemanaModel);

router.post('/', (req, res) => {
    prato_semana.cadastrarPrato_Semana(req, res);
});

module.exports = router;