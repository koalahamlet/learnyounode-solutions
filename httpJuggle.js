	var http = require('http')
    var bl = require('bl')
    var results = []
    var urls = process.argv.slice(2);
    var count = 0

    for (var i = 0; i < urls.length; i++) {
      httpGet(i);
    }

    function httpGet (index) {
      http.get(urls[index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(data)
          }

          results[index] = data.toString();
          count++;

          if (count === urls.length){ // yay! we are the last one!
            printResults();
          }
        }));
      });
    }

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i]);
      }
    }