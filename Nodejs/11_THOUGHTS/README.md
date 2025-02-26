# Esse é um projeto para criar tipo uma rede social de pensamentos, com autenticação, sessão, listagem, busca, etc.

## 1 Etapa:

- Criada a estrutura de pastas padrão: controllers db models public public/css routes sessions views views/layouts
- Criado arquivo de conexão com o banco de dados usando o Sequelize: conn.js
- Criado index.js e importados os módulos necessários, além de conectar com o banco de dados;

---

## 2 Etapa:

- Definidas configurações para os pacotes de cookies, session, engine e demais no index.js
- Criada a pasta public com style e imagens;
- Criado main handlebars para iniciar o template da view;

---

## 3 Etapa:

- Criação do models e seus relacionamentos;
- Criação das tabelas no banco ao importar no index.js e rodar o sync;

---

## 4 Etapa:

- Criação da view main, adição de fonts, icones, estilos, etc;
- Criação do Controller de Thoughts e da rota principal;

---

## 5 Etapa:

- Criado css inicial da página home;

---

## 6 Etapa:

- Criação da view e controller de autenticação;
- Criação das rotas de autenticação que serão direto na raíz /;

---

## 7 Etapa:

- Criação do formulário de registrar usuário;
- Adicionar o CSS para o formulário de registro;

---

## 8 Etapa:

- Criação de endpoint para registrar usuário;
- Feitas validações dos dados do novo cadastro de usuário;
- Criação flash message para mostrar mensagens explicativas para o usuário;
- Criação da sessão e mantido usuário logado após o seu cadastro;

---

## 9 Etapa:

- Criada nova rota GET para fazer o logout do sistema;

---

## 10 Etapa:

- Criada nova rota POST para fazer o login do sistema;
- Verificado se o email e senha existem;
- Caso email e senha estejam corretos, faz o login e cria a sessão para o usuário;

---

## 11 Etapa:

- Criada um middleware para validar se o usuário está logado e permitir que ele acesse rotas protegidas;

---

## 12 Etapa:

- Criação de formulário para criar um novo pensamento;
- Adicionado view do formulário;
- Adicionada rota POST para a criação;

---

## 13 Etapa:

- Melhorando o CSS da página de dashboard;
- Adicionada nova rota para remover pensamentos;

---

## 14 Etapa

- Adicionada função de UPDATE dos pensamentos;
- Criada nova view de atualização;

---

## 15 Etapa

- Criada funcionalidade de busca entre os pensamentos da Home
- Criado filtro de ordenação;