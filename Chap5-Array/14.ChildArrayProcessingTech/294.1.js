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
function E294(a) {
  let ret = [];

  for (let i = 0; i <= a.length - 1; ++i) {
    for (let j = i; j <= a.length - 1; ++j) {
      let child = [];
      for (let k = i; k <= j; ++k) {
        child = push(child, a[k]);
      }
      if (child.length > 2) {
        ret = push(ret, child);
      }
    }
  }

  return ret;
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
