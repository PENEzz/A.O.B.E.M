const express = require('express');
const cors = require('cors');

const app = express();

//Permitir solicitações de qualquer origem
app.use(cors());

app.listen(4200, () => {
    console.log("Servidor rodando na porta 4200");
});

app.use(express.json());
app.use(cors());