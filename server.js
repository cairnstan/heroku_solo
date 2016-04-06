var express = require('express');
var app = express();
var portDecision = process.env.PORT || 3000;
console.log('The decision was: ', portDecision);

app.get('/', function(request, response){
  response.send('MAGIC');
})

var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
})
