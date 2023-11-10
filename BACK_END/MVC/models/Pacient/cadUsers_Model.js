// models do Cadastro do usuario

const db = require("./db/conn"); // Importe o módulo de conexão com o banco de dados

class UserModel {
  static async createUser({ nome, email, telefone, dataNascimento, senha }) {
    try {
      const senhaCriptografada = await bcrypt.hash(senha, salt);
      const usuario = {
        nome,
        datanasc,
        email,
        idusuario,
        telefone,
        senha: senhaCriptografada,
      };
      const result = await db.usuarios.insertOne(usuario);
      return result;
    } catch (error) {
      throw new Error("Erro ao criar usuário no banco de dados");
    }
  }
}

module.exports = UserModel;