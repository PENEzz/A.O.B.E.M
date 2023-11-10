//model Login Psicologo

const db = require('./database'); // Importe o módulo de conexão com o banco de dados

class UserModel {
  static async findUserByEmail(email) {
    try {
      const usuario = await db.usuarios.findOne({ email });
      return usuario;
    } catch (error) {
      throw new Error('Erro ao encontrar o usuário no banco de dados');
    }
  }
}

module.exports = UserModel;