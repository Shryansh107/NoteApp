import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());


let todos = [];


app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send();
  } else {
    res.json(todo);
  }
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), 
    title: req.body.title,
    description: req.body.description
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos.splice(todoIndex, 1);
    res.status(200).send();
  }
});

app.use((req, res, next) => {
  res.status(404).send();
});


export default app;


app.listen(3000)