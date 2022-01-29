/**
 * Problem: Output the array as required: 
 * + even elements in one line
 * + odd elements in the next line
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5,6,7,8,9]; // 
 * 
 * Approach
 * 
 */

/**
 *
 * @param {number} n
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
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) ret[i] = a[i];
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {string} key
 */
function join(a, key) {
  let ret = "";
  for (let i = a.length - 1; i >= 0; --i) {
    ret += a[i] + key;
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function E289(a) {
  let evens = [];
  let odds = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      evens = push(evens, a[i]);
    }

    if (isOddNumber(a[i])) {
      odds = push(odds, a[i]);
    }
  }

  console.log(join(evens, " "));
  console.log(join(odds, " "));
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //

  E289(testCase1);
}

{
  test1();
}
