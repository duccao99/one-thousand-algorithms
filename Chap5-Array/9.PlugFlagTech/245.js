/**
 * Problem: Indicate whether the array of number is full of even numbers.
 * If the odd number exist in the array then returns 0, else returns 1 
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3,4,5]; // 0
  const testCase4 = [2,4,6,8]; // 1
  const testCase5 = [0,2,4,6,8,10]; // 1
 */

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
function E245(a) {
  let flag = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isOddNumber(a[i])) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 1
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 0
  const testCase4 = [2, 4, 6, 8]; // 1
  const testCase5 = [0, 2, 4, 6, 8, 10]; // 1

  console.log(E245(testCase1));
  console.log(E245(testCase2));
  console.log(E245(testCase3));
  console.log(E245(testCase4));
  console.log(E245(testCase5));
}

{
  test1();
}
