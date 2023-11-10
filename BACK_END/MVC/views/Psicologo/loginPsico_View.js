//View login Psicologo

class UserLoginView {
    static renderSuccessResponse(res, token, user) {
      res.status(200).json({
        token,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        dataNascimento: user.dataNascimento,
        CRP: user.CRP,
      });
    }
  
    static renderErrorResponse(res, status, errorMessage) {
      res.status(status).json({
        error: errorMessage,
      });
    }
  }
  
  module.exports = UserLoginView;