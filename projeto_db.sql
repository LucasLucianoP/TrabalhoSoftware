CREATE DATABASE projeto_db;

USE projeto_db;

-- Tabela para usuários
CREATE TABLE usuarios (
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(100)
);

SELECT * FROM usuarios;

-- Tabela para produtos
CREATE TABLE produtos (
  nome VARCHAR(100),
  descricao TEXT,
  preco DECIMAL(10, 2)
);

SELECT * FROM produtos;

-- Tabela para categorias
CREATE TABLE categorias (
  nome VARCHAR(100)
);

SELECT * FROM categorias;

CREATE TABLE pedidos (
  nome_cliente VARCHAR(100),
  produto VARCHAR(100),
  quantidade INT
);

INSERT INTO pedidos (nome_cliente, produto, quantidade) VALUES
('João Silva', 'Produto A', 3),
('Maria Oliveira', 'Produto B', 5),
('Carlos Souza', 'Produto C', 2),
('Ana Costa', 'Produto D', 7),
('Pedro Santos', 'Produto E', 1);


SELECT * FROM pedidos;
