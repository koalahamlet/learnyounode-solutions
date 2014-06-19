fs = require('fs')

filename = process.argv[2];

file = fs.readFile(filename, function callback (err, data) {
	if (err) {
		console.log('OH NOO');
	} else {
		console.log(data.toString().split('\n').length - 1);
	}
});
