const mysql = require('mysql')

/**
 * Cria uma POOL, é um modo de fazer a conexão com o banco de dados de modo que ele fecha as conexões de forma automática quando são finalizadas
 * Também auxilia no desenvolvimento, pois não é necessário ficar fazendo a conexão direto no index.js
 */
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nodemysql'
})

module.exports = pool