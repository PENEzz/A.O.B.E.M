const mysql = require('mysql2');
 
 // Configurar as credenciais de conexão
 
 const conexao = mysql.createConnection({
 
   host: 'aobem.mysql.database.azure.com',
 
   user: 'gabriel',
 
   password: 'Aobem10@',
 
   database: 'cadastro',
 
   port: 3306,

   connectTimeout: 60000
 
 });
 
 // Estabelecer a conexão com o banco de dados
 
 conexao.connect((err) => {
 
   if (err) {
 
     console.error('Erro na conexão com o banco de dados: ' + err.stack);
 
     return;
 
   }
 
   console.log('Conexão bem-sucedida ao banco de dados MySQL.');
 
   // Realizar operações no banco de dados
 
   // Fechar a conexão
 
   connection.query('SELECT * FROM tabela', (error, results, fields) => {
  if (error) {
    console.error('Erro na consulta: ' + error.message);
  } else {
    console.log('Resultados da consulta: ', results);
  }
});
 
   conexao.end((err) => {
 
     if (err) {
 
       console.error('Erro ao fechar a conexão: ' + err);
 
     } else {
 
       console.log('Conexão fechada.');
 
     }
 
   });
 
 });