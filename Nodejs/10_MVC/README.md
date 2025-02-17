# Esse capítulo serve para entender o conceito de arquitetura MVC

# Camada do Modelo (Model): 

- São os arquivos que devem *interagir com o banco de dados*;
- Normalmente interagem apenas com *arquivos do Controller*;
- Responsável por *resgatar, atualizar, remover e criar* dados;
- É comum que *cada tabela seja um Model*, assim como fazemos com o setup do Sequelize;
- Os Models são quem *controlam a arquitetura do sistema*, é fácil entender a regra de negócios analisando eles;

---

# Camada de visualização (View):

- É onde *apresentamos os dados* ques estão no banco;
- Geralmente a view *interage com o Controller*, que é o meio de capo;
- E também nas views temos a *interação com o usuário*, como formulários para inserir dados no sistema;
- É correto não haver *lógica/regra de negócios* na view, ou no mínimo possível;
- Normalmente a exibição é feita *através do HTML*;

---

# Camade de Controle (Controller)

- É onde temos a *interação entre Model e View*;
- Podemos definir qual view será impressa, processar dados que foram enviados para o banco ou para a view;
- Os Controllers terão um *código parecido com os das rotas*, que estamos criando até então no curso;