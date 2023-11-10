//Controller do login Psicologo

const app = require('./import2.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('./userModel'); // Importe o modelo do usuário
const UserLoginView = require('./userLoginView'); // Importe a visualização de login do usuário

app.listen(4200, () => {
  console.log('Servidor está ouvindo na porta 4200');
});

// Rota para o login do usuário
app.post('/api/usuarios/login', async (req, res) => {
  const { email, senha } = req.body;

  // Valida os dados do usuário
  if (!email || !senha) {
    return res.status(400).json({
      erro: 'Dados inválidos',
    });
  }

  try {
    const usuario = await UserModel.findUserByEmail(email);

    if (!usuario) {
      return UserLoginView.renderErrorResponse(res, 401, 'Usuário não encontrado');
    }

    const senhaCriptografadaBanco = usuario.senha;
    const comparacao = bcrypt.compareSync(senha, senhaCriptografadaBanco);

    if (!comparacao) {
      return UserLoginView.renderErrorResponse(res, 401, 'Senha incorreta');
    }

    // Gera um token JWT
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    UserLoginView.renderSuccessResponse(res, token, usuario);
  } catch (error) {
    console.error(error);
    return UserLoginView.renderErrorResponse(res, 500, 'Erro no servidor');
  }
});

// Inicia o servidor
app.listen(4200, () => {
  console.log('Servidor rodando na porta 4200');
});