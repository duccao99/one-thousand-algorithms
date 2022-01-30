/**
 * Problem: List all child arrays which have the length value is
 * greater than 2 in array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 
  const testCase2 = []; // 
  const testCase3 = []; // 
  const testCase4 = []; // 
  const testCase5 = []; // 
 * 
 * Approach
 * + step 1: 
 * + step 2: 
 * .. 
 * + step n: 
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {any} e
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
 */
function reverse(a) {
  const mid = Math.round(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }
  return a;
}

/**
 *
 * @param {Array} a
 */
function E294(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i; j >= 0; --j) {
      let child = [];
      for (let k = i; k >= j; --k) {
        child = push(child, a[k]);
      }
      child.length > 2 ? (ret = push(ret, reverse(child))) : void 0;
    }
  }

  return reverse(ret);
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5];
  const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const testCase3 = [1];
  const testCase4 = [1, 2];
  const testCase5 = [1, 2, 3];

  console.log(E294(testCase1));
  console.log(E294(testCase2));
  console.log(E294(testCase3));
  console.log(E294(testCase4));
  console.log(E294(testCase5));
}

{
  test1();
}
