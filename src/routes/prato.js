const express = require('express');

const router = express.Router();
const PratoModel = require('../models/prato');
const PratoControler = require('../controllers/prato');
const prato = new PratoControler(PratoModel);

router.post('/',(req, res)=>{
    prato.cadastrarPrato(req, res);
});

module.exports = router;