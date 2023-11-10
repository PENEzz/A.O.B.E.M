// views do Cadastro do Usuario

function renderRegistrationSuccess(res, token) {
    const html = `
      <html>
        <body>
          <h1>Registro de Usuário Bem-Sucedido</h1>
          <p>Você foi registrado com sucesso!</p>
          <p>Seu token JWT é: ${token}</p>
        </body>
      </html>
    `;
  
    res.status(201).send(html);
  }
  
  module.exports = {
    renderRegistrationSuccess,
  };