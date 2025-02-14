// Importação das bibliotecas
const express = require("express")
const exphbs = require("express-handlebars")
const conn = require('./db/conn')

// Importa o model do User e Address, que irá criar as tabelas
const User = require('./models/User');
const Address = require('./models/Address');

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
app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({
    raw: true,
    where: {
      id: id
    }
  })

  res.render('userview', { user });

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

app.post('/users/delete/:id', async (req, res) => {
  const id = req.params.id;
  await User.destroy({
    where: {
      id: id
    }
  });

  res.redirect('/');
})

app.get('/users/edit/:id', async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render('useredit', { user });
})

app.post('/users/update', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  newsletter = newsletter === 'on' ? true : false;

  const userData = {
    id,
    name,
    occupation,
    newsletter
  }

  await User.update(userData, { where: { id: id } });


  res.redirect('/');
})

app.post('/address/create', async (req, res) => {

  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const addressData = {
    street,
    number,
    city,
    UserId
  }

  await Address.create(addressData);

  res.redirect(`/users/edit/${UserId}`);

})

app.get('/', async (req, res) => {
  const users = await User.findAll({ raw: true })
  res.render('home', { users })
})

conn
  .sync()
  .then(() => {
    app.listen(5000)
  })
  .catch(err => console.log(err))