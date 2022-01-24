/**
 * Problem: Given an one-dimensional array of integer.
 * List all 3^k elements, return 0 if the array don't have any.
 * 
 * 
 * Understanding the problem
 * 3^0 = 1
 * 3^1 = 3
 * 3^2 = 9
 * 3^3 = 27
 * ...
 * 3^k
 * 
 * -> we see that 3^k number is a number when we loop and divide it by 3,
 * it always divisible by 3
 * 
 * 
  const testCase1 = []; // [0]
  const testCase2 = [2]; // [0]
  const testCase3 = [1]; // [1]
  const testCase4 = [1,2,3,4,5]; // [1,3]
  const testCase5 = [1,2,4,3,6,9,27,2,1]; // [1,3,9,27]
 * 
 * Approach
 * + step 1: write a function which use to check if n was a 3^k number
 * + step 2: loop input, check, get result
 */

/**
 *
 * @param {Number} n
 */
function was3PowkNumber(n) {
  /**
   * 12/3 = 4
   * 4/3 = 1.33..333..
   * 1.333../3 = 0.444...444..
   * 0.44..44..../3=
   *
   *
   */

  for (let i = n; i > 1; ) {
    if (i % 3 !== 0) {
      return false;
    }

    i = i / 3;
  }
  return true;
}

/**
 *
 * @param {Array} a
 */
function E193(a) {
  if (a.length === 0) return [0];

  let ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (was3PowkNumber(a[i])) {
      ret.push(a[i]);
    }
  }

  return ret.length === 0 ? [0] : ret;
}

{
  const testCase1 = []; // [0]
  const testCase2 = [2]; // [0]
  const testCase3 = [1]; // [1]
  const testCase4 = [1, 2, 3, 4, 5]; // [1,3]
  const testCase5 = [1, 2, 4, 3, 6, 9, 27, 2, 1]; // [1,3,9,27,1]

  console.log(E193(testCase1));
  console.log(E193(testCase2));
  console.log(E193(testCase3));
  console.log(E193(testCase4));
  console.log(E193(testCase5));
}
