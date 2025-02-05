// Importação das bibliotecas
const express = require("express")
const exphbs = require("express-handlebars")
const conn = require('./db/conn')

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

app.listen(5000)