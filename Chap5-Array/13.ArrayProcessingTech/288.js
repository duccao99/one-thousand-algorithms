/**
 * Problem: Let's output the elements in array as required:
 * + even elements have yellow color
 * + odd elements have white color
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // 
  const testCase2 = [1,2,3,4,5,6,7,8,9]; // 
  const testCase3 = [1,3,5,7]; // 
  const testCase4 = [2,4,6,8]; // 
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
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0;
}

/**
 *
 * @param {Array} a
 */
function E288(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      console.log("\x1b[33m%s\x1b[0m", a[i]);
    }
    if (isOddNumber(a[i])) {
      console.log("\x1b[37m%s\x1b[0m", a[i]);
    }
  }
  return void 0;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; //
  const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //
  const testCase3 = [1, 3, 5, 7]; //
  const testCase4 = [2, 4, 6, 8]; //

  E288(testCase1);
  E288(testCase2);
  E288(testCase3);
  E288(testCase4);
}

{
  test1();
}
