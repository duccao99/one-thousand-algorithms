/**
 * Problem: Given an array of number a. Build the array b from a 
 * so that the array b only contains the odd values
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [1,3,5]
  const testCase2 = [1,3,5,7,9]; // [1,3,5,7,9]
  const testCase3 = [2,4,6,8]; // []
  const testCase4 = [0,1,2,3,4,5,6,7,8,9]; // [0,1,3,5,7,9]
 * 
 * 
 */
/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0 || n === 0;
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
function E307(a) {
  let b = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isOddNumber(a[a.length - i - 1])) {
      b = push(b, a[a.length - i - 1]);
    }
  }

  return b;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,3,5]
  const testCase2 = [1, 3, 5, 7, 9]; // [1,3,5,7,9]
  const testCase3 = [2, 4, 6, 8]; // []
  const testCase4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // [0,1,3,5,7,9]

  console.log(E307(testCase1));
  console.log(E307(testCase2));
  console.log(E307(testCase3));
  console.log(E307(testCase4));
}

{
  test1();
}
