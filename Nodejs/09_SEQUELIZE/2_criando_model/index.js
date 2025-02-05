// Importação das bibliotecas
const express = require("express")
const exphbs = require("express-handlebars")
const conn = require('./db/conn')

// Importa o model do User, que irá criar a tabela Users
const User = require('./models/User');

// Configuração do express e handlebars
const app = express()

app.use(
  express.urlencoded({ extended: true })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Uso da pasta public com CSS e assets
app.use(express.static('public'))


/**
 * ROTAS
 */
app.get('/', (req, res) => {
  res.render('home')
})

conn
  .sync()
  .then(() => {
    app.listen(5000)
  })
  .catch(err => console.log(err))