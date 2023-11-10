// models do cadastro de psicologo

const db = require("./database");

class PsicologoModel {
  static async createPsicologo(crp, nome, email, telefone, dataNascimento, senha) {
    try {
      const senhaCriptografada = bcrypt.hashSync(senha, salt);
      const psicologo = {
        crp,
        nome,
        email,
        telefone,
        dataNascimento,
        senha: senhaCriptografada,
      };
      const result = await db.psicologo.insertOne(psicologo);
      return result;
    } catch (error) {
      throw new Error("Erro ao criar psicólogo no banco de dados");
    }
  }
}

module.exports = PsicologoModel;