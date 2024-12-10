// Importação das bibliotecas
const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

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

app.post('/books/insertbooks', (req, res) => {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`
  conn.query(sql, (err) => {
    if (err) {
      console.log(err)
      return
    }

    res.redirect('/')
  })
})

app.get('/books', (req, res) => {
  const sql = `SELECT * FROM books`

  conn.query(sql, (err, data) => {
    if (err) {
      console.warn(err)
      return;
    }

    const books = data
    console.log(data)

    res.render('books', { books })
  })
})

app.get('/book/:id', (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if (err) {
      console.warn(err)
      return;
    }

    const book = data[0]
    res.render('book', { book })
  })
})

app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if (err) {
      console.warn(err)
      return;
    }

    const book = data[0]
    res.render('editbook', { book })
  })
})

app.post('/books/updatebook', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const pageqty = req.body.pageqty

  const sql = `UPDATE books SET pageqty = '${pageqty}', title = '${title}' WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if (err) {
      console.warn(err)
      return;
    }

    res.redirect('/books')
  })
})

/**
 * Conexão com o banco
 */
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodemysql"
})

conn.connect((err) => {
  if (err) {
    console.log(err)
  }

  console.log("Conectou ao mysql")

  app.listen(5000)
})