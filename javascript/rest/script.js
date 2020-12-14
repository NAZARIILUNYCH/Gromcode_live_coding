'use strict';

// input: number, number, number...
// output: number
// function multiply(arg) {
//   return Object.values(arguments).reduce((a, b) => a * b);
// }

const multiply = (...args) => {
  return args.reduce((acc, element) => acc * element)
}

console.log(multiply(5)); // 5
console.log(multiply(5, 10)); // 50

// spread
// const testArr = [3, 4, 4, 23, 32, 32, 32];
// console.log(...testArr);

const testArrCopy = [...testArr];

function sum(a, b) {
  return a + b;
}

sum(testArr[0], testArr[1]);
sum(...testArr);