var express = require('express');
var logger = require('morgan');
var path = require('path');
var fs = require('fs');
var swig  = require('swig-templates');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// Personal variables
var main = require('./applications/main/config');
var blog = require('./applications/blog/config');

const mainTemplates = 'applications/main/views/templates';
const blogTemplates = 'applications/blog/views/templates';

//  locals variables
app.locals.site = "La Ferme de la Science";
app.locals.email = "hodonou@sounton.me";
app.locals.now = Date.now();



// app.use(favicon(path.join(__dirname, assets, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// static dir for apps setup
app.use('/', express.static(path.join(__dirname, main.assets))); // main static files
app.use('/blog', express.static(path.join(__dirname, blog.assets))); // main static files

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', [
  path.join(__dirname, mainTemplates),
  path.join(__dirname, blogTemplates)
]);

// import apps events
main.main(app); // main events
blog.config(app); // main events


app.use(function(req, res){
  res.status(404);
  res.render('index/error')
});

app.listen(3000, () => {
  console.log("App started at http://127.0.0.1:3000");
});
