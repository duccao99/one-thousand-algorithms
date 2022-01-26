/**
 * Problem: List all value in an array of prime which has the
 * first digit is an odd digit
 *
 * Understanding the problem
 *
 * const testCase1: []; // []
 * const testCase2: [2] // []
 * const testCase3: [2,3] // [3]
 * const testCase4: [2,3,5,7,11,13] // [3,5,7,11,13]
 * const testCase5: [2,3,5,7,11,13,23] // [3,5,7,11,13]
 * const testCase6: [2,3,5,7,11,13,23,33] // [3,5,7,11,13,33]
 *
 *
 *
 * Approach
 * + step 1: write a function which use to get first digit of the number - done
 * + step 2: write a function which use to check if the number was an odd number - done
 * + step 3: loop, if step 1 result is an odd number then put it into result array
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function getNumberFirstDigit(n) {
  /**
   * Problem: get number first digit
   *
   * Understanding the problem
   *
   * + testCase1: 1 -> 1
   * + testCase2: 10 -> 1
   * + testCase3: 11 -> 1
   * + testCase4: 21 -> 2
   * + testCase5: 101 -> 1
   *
   * - [0,9] -> return n
   *
   * - 10/10 = 1 - math.round(1) = 1 -> equation: math.round(n/10)
   * - 11/10 = 1.1 - math.round(1) = 1 -> equation: math.round(n/10)
   *
   * - 101
   *  + 101/10 = Math.floor(n/10) = 10
   *  + 10/10 = Math.floor(n/10) = 1
   *  + break
   *
   * - 211
   *  + 211/10 = Math.floor(n/10) = 21
   *  + 21/10 = Math.floor(n/10) = 2
   *  + 2/10 = Math.floor(n/10) = 0
   *
   *
   *
   *
   *
   * -> while(n!==0){
   *  n/=10;
   * }
   *
   *
   *
   * Approach
   * + step 1: if n was a number in range [0,9] then return n
   * if(n>=0 & n<=9) return n
   *
   * + step 2: if n has more than 1 digit n >= 10, then loop,
   * divide n by 10 until n = 0 then get the previous result,
   * it will be the first digit
   *
   * while(n!==0){
   *  n/=10;
   * }
   *
   *
   *
   *
   */

  if (n > -1 && n < 10) {
    return n;
  }

  let ret = n;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret = i;
  }

  return ret;
}

/**
 *
 * @param {Number} n
 */
function wasOddNumber(n) {
  return !!(n & 1);
}

/**
 *
 * @param {Array} a
 */
function E189(a) {
  let ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (wasOddNumber(getNumberFirstDigit(a[i]))) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [2]; // []
  const testCase3 = [2, 3]; // [3]
  const testCase4 = [2, 3, 5, 7, 11, 13]; // [3,5,7,11,13]
  const testCase5 = [2, 3, 5, 7, 11, 13, 23]; // [3,5,7,11,13,33]
  const testCase6 = [2, 3, 5, 7, 11, 13, 23, 33]; // [3,5,7,11,13,33]

  console.log(E189(testCase1));
  console.log(E189(testCase2));
  console.log(E189(testCase3));
  console.log(E189(testCase4));
  console.log(E189(testCase5));
  console.log(E189(testCase6));
}
