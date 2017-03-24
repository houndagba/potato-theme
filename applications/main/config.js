exports.assets = 'applications/main/views/assets';


exports.main = function(app){
  app.use('/', require('./events/main'));
}
