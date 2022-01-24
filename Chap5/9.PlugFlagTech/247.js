/**
 * Problem: We define an array have a even-odd propety when it's 
 * sum of two consecutive element is an odd number
 * 
 * Understanding the problem 
 * - even + odd = odd
 * - even + even = even
 * - odd + odd = even
 * 
  const testCase1 = []; // 1
  const testCase2 = [1]; // 0
  const testCase3 = [1,2]; // 1
  const testCase4 = [1,2,3]; // 1
  const testCase5 = [1,2,3,4]; // 1
  const testCase6 = [1,2,3,4,5]; // 1
  const testCase7 = [1,2,3,4,5,6]; // 1
  const testCase8 = [1,2,3,4,5,7]; // 0
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return n % 2 === 0;
}

/**
 *
 * @param {Array} a
 */
function E247(a) {
  if (a.length === 1) return 0;

  let flag = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i] + a[i - 1])) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 1
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2]; // 1
  const testCase4 = [1, 2, 3]; // 1
  const testCase5 = [1, 2, 3, 4]; // 1
  const testCase6 = [1, 2, 3, 4, 5]; // 1
  const testCase7 = [1, 2, 3, 4, 5, 6]; // 1
  const testCase8 = [1, 2, 3, 4, 5, 7]; // 0

  console.log(E247(testCase1));
  console.log(E247(testCase2));
  console.log(E247(testCase3));
  console.log(E247(testCase4));
  console.log(E247(testCase5));
  console.log(E247(testCase6));
  console.log(E247(testCase7));
  console.log(E247(testCase8));
}

{
  test1();
}
