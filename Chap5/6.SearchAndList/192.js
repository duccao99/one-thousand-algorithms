/**
 * Problem: List all values in one-dimensional array 
 * which have first-digit was a even number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1,2]; // [2]
  const testCase4 = [1,2,3,12,21,22,31,41]; // [2,21,22,41]

 * 
 * Approach
 * + step 1: write a function to check even number
 * + step 2: write a function to get first digit of the number
 * + step 3: loop, check, get result
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function wasNumberEven(n) {
  /**
   * 1 - 1
   * + 001 & 001 = 001 = true -> !true = false
   * 2 - 10
   * + 010 & 001 = 000 = false -> !false = true
   * 3 - 11
   * + !(11 & 01) = !(01) = !true = false
   * 4 - 100
   * + !(100 & 001) = !(000) = !false = true
   * 5 - 101
   * + !(101 & 001) = !(001) = !true = false
   * 6 - 110
   * + !(110 & 001) = !(000) = !false = true
   *
   *
   *
   */
  return !(n & 1);
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
function E192(a) {
  let ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (wasNumberEven(getNumberFirstDigit(a[i]))) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2]; // [2]
  const testCase4 = [1, 2, 3, 12, 21, 22, 31, 41]; // [2,21,22,41]

  console.log(E192(testCase1));
  console.log(E192(testCase2));
  console.log(E192(testCase3));
  console.log(E192(testCase4));
}
