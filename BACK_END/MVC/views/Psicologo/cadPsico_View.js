// views do cadastro de psicologo

class PsicologoView {
    static renderSuccessResponse(res, token) {
      res.status(201).json({
        token,
      });
    }
  
    static renderErrorResponse(res, status, errorMessage) {
      res.status(status).json({
        error: errorMessage,
      });
    }
  }
  
  module.exports = PsicologoView;