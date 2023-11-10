// models do login de Usuario

const db = require("./database.js");

class UserModel {
  static async findUserByEmail(email) {
    try {
      const usuario = await db.usuarios.findOne({ email });
      return usuario;
    } catch (error) {
      throw new Error("Erro ao encontrar o usuário no banco de dados");
    }
  }
}
