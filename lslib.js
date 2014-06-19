var fs = require('fs')
var path = require('path')

    module.exports = function lsFiltered(dir, filterStr, callback) {

      fs.readdir(dir, function returnList(err, list) {
        if (err) {
          return callback(err);
        }

        list = list.filter(function returnEachFile(file) {
          return path.extname(file) === '.' + filterStr;
        });

        callback(null, list)
      })
    }