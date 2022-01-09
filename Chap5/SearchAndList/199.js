/**
 * Problem: List all positions where it's value was a prime number
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * Prime number: 2,3,5,7,...
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1,2,3,4,5]; // [2,3,5]
  const testCase4 = [1,2,3,4,5,6,7,8,9,10]; // [2,3,5,7]

 * 
 * Approach
 * + step 1: write a function which use to check prime number
 * + step 2: loop input, check, get result
 */

/**
 *
 * @param {Number} n
 */
function wasNumberPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {Array} a
 */
function E199(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (!!wasNumberPrime(a[i])) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2, 3, 4, 5]; // [2,3,5]
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // [2,3,5,7]

  console.log(E199(testCase1));
  console.log(E199(testCase2));
  console.log(E199(testCase3));
  console.log(E199(testCase4));
}
