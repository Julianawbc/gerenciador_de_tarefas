const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar JSON no corpo das requisições
app.use(bodyParser.json());

// Armazenamento temporário de tarefas (simulação de um banco de dados)
const tasks = [];

// Endpoint para adicionar nova tarefa
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json({ message: 'Tarefa adicionada com sucesso', task: newTask });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/tasks`);
});


