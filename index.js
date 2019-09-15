const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('main');
});

app.get('/decimal_equation', function(req, res) {
  res.render('decimal_equation');
});

app.get('/calculator', function(req, res) {
  res.render('calculator');
});

app.get('/integer_equation', function(req, res) {
  res.render('integer_equation');
});

app.listen(8000);
console.log("Have fun at port 8000");
