var express = require('express');

var evts = express.Router();

evts.get('/', (req, res) => {
  res.render('blog/home', {title: "Blog Dié !."})
});

module.exports = evts;
