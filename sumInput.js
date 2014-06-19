var inputArray = process.argv;
var arrayLength = inputArray.length;
var sum = 0;
for (var i = 2; i < arrayLength; i++) {
	sum += Number(inputArray[i]);
}

console.log(sum);
