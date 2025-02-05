# Nessa etapa é criado o primeiro Model [User](./models/User.js) do banco, é basicamente criar uma tabela utilizando o js.

# Além disso é necessário importar esse model na [aplicação](index.js), iniciar a conexão com o banco e fazendo o sync.

# Interessante notar que o sequelize já cria o ID, createdAt e updatedAt por padrão.

### [Sync](https://sequelize.org/docs/v7/models/model-synchronization/): faz a sincronização dos nossos models, definidos no código com as tabelas que devem ser criadas no banco. Cada model vira uma tabela.

