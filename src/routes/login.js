const express = require("express");
const route = express.Router();
const LoginController = require("../controllers/login");
const clienteModel = require("../models/cliente");
const fornecedorModel = require("../models/fornecedor");

const login = new LoginController(clienteModel,fornecedorModel);

route.post("/", (req, res) => {
    login.login(req, res)
});

module.exports = route;


