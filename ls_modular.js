var filterModule = require('./lslib.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterModule(dir, filterStr, function callback(err, list) {
  if (err) {
	return console.error('There was an error:', err);
  }
  list.forEach(function (file) {
    console.log(file);
  })
})