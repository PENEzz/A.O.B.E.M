//Controller cadastro Psicologo

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PsicologoModel = require("../models/cadPsico_Model"); // Importe o modelo
const PsicologoView = require("../views/cadPsico_View"); // Importe a visualização

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

// Rota para cadastro de psicólogos
app.post("/api/psicologo", async (req, res) => {
  const { psinome, psidatanasc, psiemail, psiid, telefone, crp, senha } = req.body;

  if (!psinome || !psidatanasc || !psiemail || !psiid || !telefone || !crp || !senha) {
    return PsicologoView.renderErrorResponse(res, 400, "Dados inválidos");
  }

  try {
    const senhaCriptografada = bcrypt.hashSync(senha, salt);
    const psicologo = {
      psinome,
      psidatanasc,
      psiemail,
      psiid,
      telefone,
      crp,
      senha: senhaCriptografada,
    };

    // Insere o psicólogo no banco de dados usando o modelo
    const result = await PsicologoModel.createPsicologo(psicologo);

    if (result) {
      const token = jwt.sign({ id: result.insertedId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      PsicologoView.renderSuccessResponse(res, token);
    }
  } catch (error) {
    console.error(error);
    return PsicologoView.renderErrorResponse(res, 500, "Erro no servidor");
  }
});

// Inicia o servidor
app.listen(4200, () => {
  console.log("Servidor rodando na porta 4200");
});l