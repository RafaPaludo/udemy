const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('thoughts', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate();
  console.log('Conectamos com sucesso!');
} catch (error) {
  console.warn("Não foi possível conectar", error);
}

module.exports = sequelize;