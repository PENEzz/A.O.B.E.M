// views do login de Usuario

class UserLoginView {
    static renderTokenResponse(res, token) {
      res.status(200).json({
        token,
      });
    }
  
    static renderError(res, status, errorMessage) {
      res.status(status).json({
        error: errorMessage,
      });
    }
  }
  
  module.exports = UserLoginView;