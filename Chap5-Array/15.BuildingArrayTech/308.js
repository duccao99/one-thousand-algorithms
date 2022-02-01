/**
 * Problem: Given an array of number a. Let's build an array b 
 * from a so that the array b only contains the negative values
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,-1,2,-2,3,-3,4,-4]; // [-1,-2,-3,-4]
  const testCase2 = [-1,-2,-3,-4]; // [-1,-2,-3,-4]
  const testCase3 = [1,2,3,4]; // []
 * 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isNegativeNumber(n) {
  return n <= 0;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function E308(a) {
  let b = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isNegativeNumber(a[a.length - i - 1])) {
      b = push(b, a[a.length - i - 1]);
    }
  }

  return b;
}

function test1() {
  const testCase1 = [1, -1, 2, -2, 3, -3, 4, -4]; // [-1,-2,-3,-4]
  const testCase2 = [-1, -2, -3, -4]; // [-1,-2,-3,-4]
  const testCase3 = [1, 2, 3, 4]; // []

  console.log(E308(testCase1));
  console.log(E308(testCase2));
  console.log(E308(testCase3));
}

{
  test1();
}
