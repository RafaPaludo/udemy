// Importação das bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db/conn');
require('dotenv').config();

// Configurações básicas
const app = express();
const port = 5000;
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware
app.use(bodyParser.json());

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrai o token após 'Bearer '

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido.' });
      }
      req.user = user; // Adiciona os dados do usuário à requisição
      next();
  });
};

/**
 * Rotas
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos' });
  }

  try {
   // Hash da senha
   const hashedPassword = await bcrypt.hash(password, 10);
   
   // Inserir no banco de dados
   const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
   const data = [name, email, hashedPassword];
   pool.query(sql, data, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email já cadastrado'});
      }
      return res.status(500).json({ message: 'Erro ao registrar o usuário' });
    }
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
   });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos' });
  }

  try {
    // Verificar se o usuário existe
    const sql = 'SELECT * FROM users WHERE email = ?';
    const data = [email];
    pool.query(sql, data, async (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
      const user = results[0];

      // Verificar a senha
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Gerar token JWT
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
      res.status(201).json({ message: 'Login realizado com sucesso', token });
    })
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
})

app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Você acessou uma rota protegida!', user: req.user });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})