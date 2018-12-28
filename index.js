const http = require('http');
const PORT = process.env.PORT || 5000;

var express = require('express');

var app = express();


  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are in reception. How can I help you?');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\’re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/1/bedroom', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hey, this is a private area!');
});

app.get('/floor/:floornum/bedroom', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('You\’re in the bedroom on floor n°' + req.params.variablename);
});

app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'Page cannot be found!');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});