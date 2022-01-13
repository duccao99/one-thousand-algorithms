/**
 * Problem: List all negative element in one-dimensional array of number
 * 
 * Understanding the problem
 * 0: zero is neither positive nor negative number
 * -1: was negative number
 *  1: was positive
 * 
  const testCase1 = []; // []
  const testCase2 = [1,2,3,4,5]; // []
  const testCase3 = [1,2,3,-2,-1]; // [-2,-1]
  const testCase4 = [0]; // []
 * 
 * Approach
 * + step 1: write a function which use to check negative number
 * + step 2: loop, check, get result
 * 
 */

/**
 *
 * @param {Number} n
 */
function wasNumberNegative(n) {
  return n < 0 ? true : false;
}

/**
 *
 * @param {Array} a
 */
function E196(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (!!wasNumberNegative(a[i])) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1, 2, 3, 4, 5]; // []
  const testCase3 = [1, 2, 3, -2, -1]; // [-2,-1]
  const testCase4 = [0]; // []

  console.log(E196(testCase1));
  console.log(E196(testCase2));
  console.log(E196(testCase3));
  console.log(E196(testCase4));
}
