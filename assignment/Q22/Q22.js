// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Error
var arr = [1, 3, 4, 6, 7, 9];
var error = arr[6];
console.log(error);
// Correction
arr.push(10);
var correct = arr[6];
console.log(correct);
