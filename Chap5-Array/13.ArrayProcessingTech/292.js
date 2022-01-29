/**
 * Problem: Transform the array by replacing elements in array 
 * by their closest to it
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,1.2,1.3,2.4,2]; // [1,1,1.3,2,2]
 * 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isIntegerNumber(n) {
  return n - Math.floor(n) === 0;
}

/**
 *
 * @param {Number} n
 */
function isFloatNumber(n) {
  return n - Math.floor(n) !== 0;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function E292(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    if (isFloatNumber(a[i])) {
      if (isIntegerNumber(a[i + 1]) && !isIntegerNumber(a[i - 1])) {
        a[i] = a[i + 1];
      }
      if (!isIntegerNumber(a[i + 1]) && isIntegerNumber(a[i - 1])) {
        a[i] = a[i - 1];
      }
      if (isIntegerNumber(a[i + 1]) && isIntegerNumber(a[i - 1])) {
        a[i] = a[i + 1];
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 1.2, 1.3, 2.4, 2]; // [1,2,2,2,2]

  console.log(E292(testCase1));
}

{
  test1();
}
