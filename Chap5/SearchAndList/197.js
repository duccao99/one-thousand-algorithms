/**
 * Problem: List all element in one-dimensional array of number
 * which has first-digit was an odd number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [2]; // []
  const testCase3 = [1,2,3,4,5]; // [1,3,5]
  const testCase4 = [1123,213,421,321]; // [1123,321]
 * 
 * Approach
 * + step 1: write a function which use to check odd number
 * + step 2: write a function which use to get first-digit of numbers
 * + step 3: loop, check stuff, get result
 * 
 */

/**
 *
 * @param {Number} n
 *
 */
function wasNumberOdd(n) {
  return !!(n & 1);
}

/**
 *
 * @param {Number} n
 */
function getNumberFirstDigit(n) {
  let ret;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret = i;
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E197(a) {
  const ret = [];
  for (let i = 0; i < a.length; ++i) {
    if (!!wasNumberOdd(getNumberFirstDigit(a[i]))) {
      ret.push(a[i]);
    }
  }
  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [2]; // []
  const testCase3 = [1, 2, 3, 4, 5]; // [1,3,5]
  const testCase4 = [1123, 213, 421, 321]; // [1123,321]

  console.log(E197(testCase1));
  console.log(E197(testCase2));
  console.log(E197(testCase3));
  console.log(E197(testCase4));
}
