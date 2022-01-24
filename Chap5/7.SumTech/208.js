/**
 * Problem: Sum all square-numbers in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [2]; // 0
  const testCase3 = [1,2,3,4,5]; // 5
  const testCase4 = [1,2,3,4,5,6,7,8,9]; // 14
 * 
 */

/**
 *
 * @param {Number} n
 */
function isSquareNumber(n) {
  return Math.sqrt(n) - Math.floor(Math.sqrt(n)) === 0;
}

/**
 *
 * @param {Array} a
 */
function E208(a) {
  let ret = 0;

  a.forEach((value) => {
    if (isSquareNumber(value)) {
      ret += value;
    }
  });

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [2]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 5
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 14

  console.log(E208(testCase1));
  console.log(E208(testCase2));
  console.log(E208(testCase3));
  console.log(E208(testCase4));
}
