var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var stringResponse = getIndexResponse();
  response.send(stringResponse);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var getHardCodedResponse = function() {
  return "Hello World 2!";
}

var getIndexResponse = function() {
  return fs.readFileSync("index.html").toString();
}
