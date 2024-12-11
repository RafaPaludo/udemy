# É necessário ter criado uma tabela books no banco de dados. 

```sql
CREATE TABLE books (
  id INT NOT NULL auto_increment,
  title varchar(255),
  pageqty int
)
```

# Nessa parte, é criada uma rota para inserir dados em uma tabela.
# POST /books/insertbooks