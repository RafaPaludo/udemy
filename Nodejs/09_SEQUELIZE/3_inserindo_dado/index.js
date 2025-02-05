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

app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/users/create', async (req, res) => {
  const name  = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  newsletter = newsletter === 'on' ? true : false;

  await User.create({
    name,
    occupation,
    newsletter
  })

  res.redirect('/')
})

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