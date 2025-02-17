const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', 'password',{
    host: 'localhost',
    dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Conexão estabelecida com sucesso com o Sequelize!');
} catch (error) {
  console.log('Não foi possível conectar', error);
}

module.exports = sequelize;