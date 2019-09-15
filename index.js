const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// app.set('port', process.env.PORT || 8080);

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

app.listen(process.env.PORT || 8080);
// console.log("Have fun at port 8000");
