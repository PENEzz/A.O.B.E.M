//Controller login usuario

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const UserModel = require("../models/loginUsers_Model.js"); // Importe o modelo de usuário
const UserLoginView = require("../views/loginUsers_View"); // Importe a visualização de login de usuário

// Configurações do CORS
app.use(cors({
  origin: "*",
  allowedHeaders: ["Authorization", "Content-Type"],
  allowedMethods: ["GET", "POST", "PUT", "DELETE"],
}));

// Configurações do BodyParser
app.use(bodyParser.json());

app.post("/api/usuarios/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return UserLoginView.renderError(res, 400, "Dados inválidos");
  }

  try {
    // Encontre o usuário usando o modelo
    const usuario = await UserModel.findUserByEmail(email);

    if (!usuario) {
      return UserLoginView.renderError(res, 401, "Usuário não encontrado");
    }

    const senhaCriptografadaBanco = usuario.senha;
    const comparacao = bcrypt.compareSync(senha, senhaCriptografadaBanco);

    if (!comparacao) {
      return UserLoginView.renderError(res, 401, "Senha incorreta");
    }

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Responda com sucesso usando a visualização
    UserLoginView.renderTokenResponse(res, token);
  } catch (error) {
    console.error(error);
    return UserLoginView.renderError(res, 500, "Erro no servidor");
  }
});

// Inicie o servidor
app.listen(4200, () => {
  console.log("Servidor rodando na porta 4200");
});