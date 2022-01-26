/**
 * Problem: Sum values where the tens digit is 5 in the 
 * array of number
 * 
 * Understanding the problem
 * 123 - 2
 * 153 - 5
 * 1 12 53 123 153 - 53 + 153 = 206
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,12,53,123,153]; // 206
 * 
 * Approach
 * + step 1: write a function to get number's tens digit
 * + step 2: write a function to check if a number is equal to 5
 * + step 3: loop, check, sum
 * 
 */

/**
 *
 * @param {Number} n
 */
function getNumberTensDigit(n) {
  /**
   * 123 - 2
   *
   * 123/10 = 12
   *
   * (123/10)%10 = 2
   */
  return Math.floor(n / 10) % 10;
}

/**
 *
 * @param {Number} n
 */
function doesNumberEqualTo5(n) {
  return n === 5;
}

/**
 *
 * @param {Array} a
 */
function E203(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (doesNumberEqualTo5(getNumberTensDigit(a[i]))) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 12, 53, 123, 153]; // 206

  console.log(E203(testCase1));
  console.log(E203(testCase2));
}
