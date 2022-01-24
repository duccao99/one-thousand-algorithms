/**
 * Problem: Sum all values which have first-digit was an odd number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [2]; // 0
  const testCase3 = [1,2,3,4,5]; // 9
  const testCase4 = [11,22,33,44]; // 44
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function getNumberFirstDigit(n) {
  return +n.toString(10)[0];
}

/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return !!(n & 1);
}

/**
 *
 * @param {Array} a
 */
function E202(a) {
  let ret = 0;
  for (let i = 0; i < a.length; ++i) {
    if (isOddNumber(getNumberFirstDigit(a[i]))) {
      ret += a[i];
    }
  }
  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [2]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 9
  const testCase4 = [11, 22, 33, 44]; // 44

  console.log(E202(testCase1));
  console.log(E202(testCase2));
  console.log(E202(testCase3));
  console.log(E202(testCase4));
}
