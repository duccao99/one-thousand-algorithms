/**
 * Problem: Sum all values which is greater than their previous value
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2]; // 2
  const testCase3 = [1,2,3]; // 5
  const testCase4 = [3,2,1]; // 0
 * 
 * Approach
 * + step 1: loop, check, sum
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E204(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > a[i - 1]) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2]; // 2
  const testCase3 = [1, 2, 3]; // 5
  const testCase4 = [3, 2, 1]; // 0

  console.log(E204(testCase1));
  console.log(E204(testCase2));
  console.log(E204(testCase3));
  console.log(E204(testCase4));
}
