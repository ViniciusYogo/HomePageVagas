const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Conexão com o banco de dados
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '102030',
  database: 'vaga_emprego',
  port: 3306
});


app.get('/api', (req, res) => {
  res.send('Olá, mundo!');
});


// Middleware para servir arquivos HTML/CSS/JS estáticos
app.use(express.static('public'));

// Rota para buscar vagas do banco e retornar em JSON
app.get('/api/vagas', (req, res) => {
  const sql = 'SELECT * FROM vaga';
  conexao.query(sql, (erro, resultados) => {
    if (erro) {
      console.error('Erro ao buscar vagas:', erro);
      res.status(500).json({ erro: 'Erro ao buscar vagas' });
    } else {
      res.json(resultados);
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
