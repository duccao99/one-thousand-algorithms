/**
 * Problem: List all odd-digit values in one-dimensional array of integers
 *
 * Understanding the problem
 *
  const testCase1 = []; // []
  const testCase2 = [2]; // []
  const testCase3 = [1,2,3,4,5]; // [1,3,5]
  const testCase4 = [1,10,31,100,131,200,135]; // [1,31,131,135]
 *
 *
 *
 * Approach
 * + step 1: write function to check odd number
 * + step 2: write function to check was all digit are odd
 * + step 3: loop, check current value, get result
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function wasNumberOdd(n) {
  return !!(n & 1);
}

/**
 *
 * @param {Number} n
 */
function wasNumberAllDigitsOdd(n) {
  let flag = true;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if (!wasNumberOdd(i)) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array} a
 */
function E190(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (wasNumberAllDigitsOdd(a[i])) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [2]; // []
  const testCase3 = [1, 2, 3, 4, 5]; // [1,3,5]
  const testCase4 = [1, 10, 31, 100, 131, 200, 135]; // [1,31,131,135]

  console.log(E190(testCase1));
  console.log(E190(testCase2));
  console.log(E190(testCase3));
  console.log(E190(testCase4));
}
