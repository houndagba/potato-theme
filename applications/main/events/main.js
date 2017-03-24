var express = require('express');

var evts = express.Router();

evts.get('/', (req, res) => {
  res.render('index/home', {title: "Bonjour à tous."})
});

module.exports = evts;
