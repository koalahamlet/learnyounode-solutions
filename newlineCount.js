fs = require('fs')

filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

newlines = contents.split('\n').length - 1

console.log(newlines);
