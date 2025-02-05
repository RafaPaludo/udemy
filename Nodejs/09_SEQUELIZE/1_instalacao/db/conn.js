// Agora precisamos usar o sequelize ao invés do mysql. 
// Primeiramente importamos o Sequelize e fazemos a conexão, passando o nome do banco, usuário, senha e configurações do banco.
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  
  sequelize.authenticate();
  console.log('Conexão estabelecida com sucesso com o Sequelize!');

} catch (error) {
  console.log('Não foi possível conectar', error);
}

module.exports = sequelize;