const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn') //chamar a conexão com bd

const conn = require('./models/Pacient/cad_users')

app.engine('handlebars', exphbs()) 
app.set('view engine', 'headlebars') 

app.use ( //ler o que vem na aquisição
    express.urlencoded((
        extended = true
    ))
)

app.use(express.json()) 

app.use(express.static('public')) //definir a express

app.listen(3000) 

conn
.sync()
.then(() => {
        app.listen(3000)
})
.catch((err) => console.log(err))