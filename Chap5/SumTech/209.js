/**
 * Problem: sum all palindromic-numbers in one-dimensional array of number
 * 
 * Understanding the problem
 * + Palindromic number: is a number that remains the same when
 * it digits are reversed
 * 
 * + [0-9], 11, 22, 121, 12321
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1,12,11]; // 12
  const testCase4 = [54,121,13]; // 121
  const testCase5 = [1,2,3,4,5,6,7,8,9]; // 45
  const testCase6 = [123,321,121,12321]; // 12442
 * 
 * Approach
 * + step 1: write a function which use to check palindromic number
 * + step 2: loop, check, sum
 */

/**
 *
 * @param {Number} n
 */
function countNumberDigits(n) {
  let count = 0;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    count++;
  }

  return count;
}

/**
 *
 * @param {Number} n
 */
function isPalindromicNumber(n) {
  /**
   * - 121
   * - mid = (121/10)%10 = 2
   * - a[i] = a[len-i-1] ? loop : false
   * - loop till mid
   *
   * - 12321
   * + 1 = 1
   * + 2 = 2
   * + 3
   * -> loop 3 times
   *  + count number digits
   *  + break condition = floor(count number digits / 2)
   * -> check i = len-i-1 ?
   *  + i = 0
   *    + floor(n/10*(len-1)) === Math.floor(n / Math.pow(10, i)) % 10
   *  + i = 1
   *    + Math.floor(n / Math.pow(10, len - i - 1)) % 10
   *      ===
   *      Math.floor(n / Math.pow(10, i)) % 10
   *
   *  + i = 2
   *
   *
   */

  const nTotalDigits = countNumberDigits(n);

  for (let i = 0; i < nTotalDigits / 2; ++i) {
    if (
      Math.floor(n / Math.pow(10, nTotalDigits - i - 1)) % 10 !==
      Math.floor(n / Math.pow(10, i)) % 10
    ) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {Array} a
 */
function E209(a) {
  let ret = 0;

  a.forEach((value) => {
    if (isPalindromicNumber(value)) {
      ret += value;
    }
  });

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1, 12, 11]; // 12
  const testCase4 = [54, 121, 13]; // 121
  const testCase5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 45
  const testCase6 = [123, 321, 121, 12321]; // 12442

  console.log(E209(testCase1));
  console.log(E209(testCase2));
  console.log(E209(testCase3));
  console.log(E209(testCase4));
  console.log(E209(testCase5));
  console.log(E209(testCase6));
}

{
  const n = 12321;
  const len = 5;

  for (let i = 0; i < len / 2; ++i) {
    console.log(
      `Browse digits from the end of number: ${
        Math.floor(n / Math.pow(10, i)) % 10
      }`
    );
  }

  for (let i = 0; i < len / 2; ++i) {
    console.log(`Browse digits from the start of number: ${
      Math.floor(n / Math.pow(10, len - i - 1)) % 10
    }
    `);
  }
}
