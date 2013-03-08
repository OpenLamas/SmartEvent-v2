var connect = require('connect')
  , http = require('http')
  , app
  ;

app = connect()
  .use(connect.static('www'))
  .use('/js/lib/', connect.static('www/js/lib'))
  .use('/node_modules', connect.static('node_modules'))
  .use('/test', connect.static('test/'))
  .use('/test', connect.static('www'))
  ;

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});