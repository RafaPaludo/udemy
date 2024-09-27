# Setup

Primeiro passo é instalar o mysql na máquina:
```bash
sudo apt install mysql-server
```

Instalar o pacote de segurança:
```bash
sudo mysql_secure_installation
```

Responder as perguntas:
Would you like to setup VALIDATE PASSWORD component?
- Y

There are three levels of password validation policy:
- 0 = LOW

Remove anonymous users? (Press y|Y for Yes, any other key for No) : 
- No

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : 
- No

Remove test database and access to it? (Press y|Y for Yes, any other key for No) : 
- No

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : 
- Y

Verificar o status do programa mysql
```bash
systemctl status mysql.service
```

---

# Acessar o mysql

Acessar o mysql com o usuário root
```bash
sudo mysql -u root
```

Mostrar as tabelas:
```bash
SHOW DATABASES;
```

Sair:
```bash
exit;
```

# Baixar o MySQL Workbench

Pela loja de aplicativos.

Criar um banco de dados pelo MySQL Workbench. E depois conectar com ele pelo express.

# Observações MySQL Work Bench
Problema ao logar: https://stackoverflow.com/questions/7864276/cannot-connect-to-database-server-mysql-workbench

```bash
sudo mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

Usar Senha: "password"