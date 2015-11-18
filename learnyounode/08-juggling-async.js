var http = require('http');
var result = [];
var counter = 0;

var printResult = function () {
  result.forEach(function(elem) {
    console.log(elem);
  });
};

var httpGet = function (i) {
  http.get(process.argv[2 + i], function (response) {
    var dataBucket = '';
    response.setEncoding('utf8');

    response.on('error', function (err) {
      return console.error('There was an error', err);
    });

    response.on('data', function (data) {
      dataBucket += data;
    });

    response.on('end', function () {
      result[i] = dataBucket;
      counter++;
      if (counter === 3) {
        printResult();
      }
    });
  });
};

for (var i = 0; i < 3; i++) {
  httpGet(i);
}
