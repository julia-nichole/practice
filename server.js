// Require modules
const express = require('express');
const path = require('path');	
// Create the Express app
const app = express();
const todoDb = require('./data/todos-db');
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
  });
  app.get('/home', function(req, res) {
    res.render('home');
});
app.get('/', function(req, res) {
    res.redirect('/home');
  });
app.get('/todos', function(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  });

    
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
