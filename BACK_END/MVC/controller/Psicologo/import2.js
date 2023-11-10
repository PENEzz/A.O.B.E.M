const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Configurações do CORS
app.use(cors({
  origin: "*",
  allowedHeaders: ["Authorization", "Content-Type"],
  allowedMethods: ["GET", "POST", "PUT", "DELETE"],
}));

// Configurações do BodyParser
app.use(bodyParser.json());

// Configurações da criptografia de senha
const salt = bcrypt.genSaltSync(10);

module.exports = app;