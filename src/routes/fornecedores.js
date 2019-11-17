const express = require("express");
const router = express.Router();

const FornecedorModel = require("../models/fornecedor");
const FornecedorController = require("../controllers/fornecedores");
const fornecedor = new FornecedorController(FornecedorModel);

router.post("/cadastrar", (req, res)=>{
    fornecedor.cadastrarFornecedor(req,res);
});

module.exports = router;