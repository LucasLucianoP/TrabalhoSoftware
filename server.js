const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos (como o CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do EJS (se usar EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conexão com o MySQL usando mysql2
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'projeto_db'
});

// Verificar a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL com sucesso!');
    }
});

// Rota para exibir o formulário de adicionar usuário
app.get('/adicionar', (req, res) => {
    res.render('adicionarUsuario');
});

// Rota para processar o formulário de inserção
app.post('/inserir', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Erro ao inserir dados');
        } else {
            res.send('Dados inseridos com sucesso!');
        }
    });
});


// Rota para exibir o formulário de adicionar produto
app.get('/adicionar-produto', (req, res) => {
    res.render('adicionar-produto');
});


// Rota para processar a inserção de produto
app.post('/inserir-produto', (req, res) => {
    const { nome, descricao, preco } = req.body;
    const sql = 'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)';

    db.query(sql, [nome, descricao, preco], (err, result) => {
        if (err) {
            console.error('Erro ao inserir produto:', err);
            res.status(500).send('Erro ao inserir produto');
        } else {
            res.send('Produto inserido com sucesso!');
        }
    });
});


// Rota para exibir o formulário de adicionar categoria
app.get('/adicionar-categoria', (req, res) => {
    res.render('adicionar-categoria');
});

// Rota para processar o formulário de inserção de categoria
app.post('/inserir-categoria', (req, res) => {
    const { nome } = req.body;
    const sql = 'INSERT INTO categorias (nome) VALUES (?)';

    db.query(sql, [nome], (err, result) => {
        if (err) {
            console.error('Erro ao inserir categoria:', err);
            res.status(500).send('Erro ao inserir categoria');
        } else {
            res.send('Categoria inserida com sucesso!');
        }
    });
});

// Rota para exibir o formulário de deletar pedido
app.get('/deletar-pedido', (req, res) => {
    res.render('deletar-pedido');
});

// Rota para processar a exclusão de pedido
app.post('/deletar-pedido', (req, res) => {
    const { nome_cliente, produto } = req.body;
    const sql = 'DELETE FROM pedidos WHERE nome_cliente = ? AND produto = ?';

    db.query(sql, [nome_cliente, produto], (err, result) => {
        if (err) {
            console.error('Erro ao deletar pedido:', err);
            res.status(500).send('Erro ao deletar pedido');
        } else {
            res.send('Pedido deletado com sucesso!');
        }
    });
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
