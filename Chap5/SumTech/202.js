/**
 * Problem: Sum all values which has first-digit was an odd-value 
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [2]; // 0
  const testCase3 = [1]; // 1
  const testCase4 = [1,2,3,4,5]; // 9
  const testCase5 = [12,22,32,42]; // 44
 * 
 * Approach
 * + step 1: write a function which use to get first-digit of number
 * + step 2: write a function which use to check odd number
 * + step 3: loop input, check, sum
 * 
 */

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
 * @param {Number} n
 */
function wasNumberOdd(n) {
  return !!(n & 1);
}

/**
 *
 * @param {Array} a
 */
function E202(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (wasNumberOdd(getNumberFirstDigit(a[i]))) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [2]; // 0
  const testCase3 = [1]; // 1
  const testCase4 = [1, 2, 3, 4, 5]; // 9
  const testCase5 = [12, 22, 32, 42]; // 44

  console.log(E202(testCase1));
  console.log(E202(testCase2));
  console.log(E202(testCase3));
  console.log(E202(testCase4));
  console.log(E202(testCase5));
}
