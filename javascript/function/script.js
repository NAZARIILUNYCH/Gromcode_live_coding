'use strict';

// 1. Learn requirement
// 2. Create step by step algo
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution


// algo
// 1. iterate numbers from 1 to n
// 2. check if num is prime or not
// 2.1 iteration from 2 to num - 1
// 2.2 ...

// input: number
// return: boolean
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// input: number
// return: undefined
function getPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

console.log(getPrime(7));
console.log(getPrime(9));

// [1, 7] => 2, 3, 5, 7
// [1, 9] => 2, 3, 5, 7