var http = require('http');

var callback = function (response) {
  var dataBucket = '';
  response.setEncoding('utf8');

  response.on('error', function (err) {
    return console.error('There was an error', err);
  });

  response.on('data', function (data) {
    dataBucket += data;
  });

  response.on('end', function () {
    console.log(dataBucket.length);
    console.log(dataBucket);
  });
};

http.get(process.argv[2], callback);
