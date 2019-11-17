const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");
const Config = require("./config/config");

const app = express();

app.use(cors());
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(Config.API_BASE, routes);

module.exports = app;
