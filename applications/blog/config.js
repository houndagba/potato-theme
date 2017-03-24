exports.assets = 'applications/blog/views/assets';


exports.config = function(app){
  app.use('/blog', require('./events/blog'));
}
