-- Criação do banco de dados
CREATE DATABASE registro_ponto;
USE registro_ponto;

-- Criação da tabela de usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Senha deve ser armazenada de forma segura (hash)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criação da tabela de registros de ponto
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type ENUM('entrada', 'pausa', 'retorno', 'saida') NOT NULL, -- Tipos de registro de ponto
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, -- Data e hora do registro
    date DATE NOT NULL, -- Apenas a data, para facilitar consultas por dia
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Relacionamento com usuários
);
