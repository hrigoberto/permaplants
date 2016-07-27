var express = require('express');
var server = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + 'public/html/');

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'})
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
})
