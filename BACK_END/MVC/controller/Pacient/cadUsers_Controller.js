//Controller cadastro Usuario

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/userModel"); // Importe o modelo de usuário
const UserRegistrationView = require("../views/userRegistrationView"); // Importe a visualização de registro de usuário

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

// Rota para registro de usuário
app.post("/api/usuarios/registro", async (req, res) => {
  const { nome, datanasc, email, idusuario, telefone, senha } = req.body;

  if (!nome || !datanasc || !email || !idusuario || !telefone || !senha) {
    return UserRegistrationView.renderErrorResponse(res, 400, "Dados inválidos");
  }

  try {
    // Crie o usuário usando o modelo
    const result = await UserModel.createUser({ nome, datanasc, email, idusuario, telefone, senha });

    if (result) {
      const token = jwt.sign({ id: result.insertedId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Responda com sucesso usando a visualização
      UserRegistrationView.renderRegistrationSuccess(res, token);
    }
  } catch (error) {
    console.error(error);
    return UserRegistrationView.renderErrorResponse(res, 500, "Erro no servidor");
  }
});

// Inicie o servidor
app.listen(4200, () => {
  console.log("Servidor rodando na porta 4200");
});