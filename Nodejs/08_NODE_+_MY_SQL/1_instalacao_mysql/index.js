const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home')
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nodemysql'
})

conn.connect((err) => {
  if (err) throw err;

  console.log('Conectou ao MySQL!')
  app.listen(3000)
})