var http = require('http');
var fs = require('fs');

var callback = function (request, response) {
  var readStream = fs.createReadStream(process.argv[3]);

  readStream.on('open', function (data) {
    readStream.pipe(response);
  });

  readStream.on('error', function (err) {
    return console.error('There was an error', err);
  });
};

var server = http.createServer();
server.on('request', callback);
server.listen(process.argv[2]);
