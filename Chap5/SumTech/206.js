/**
 * Problem: Sum all values which are greater than their around values
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1,2]; // 2
  const testCase4 = [1,2,1,3,1]; // 5
  const testCase5 = [1,2,3,2,1]; // 3
  const testCase6 = [1,2,3,2,5]; // 8
 * 
 * Approach
 * + step 1: check a[0]
 * + step 2: check a[len - 1]
 * + step 3: check a[i]
 */

/**
 *
 * @param {Array} a
 */
function E206(a) {
  let ret = 0;

  if (a.length === 1) return a[0];

  if (a[0] > a[1]) {
    ret += a[0];
  }

  if (a[a.length - 1] > a[a.length - 2]) {
    ret += a[a.length - 1];
  }

  for (let i = 1; i < a.length - 1; ++i) {
    if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1, 2]; // 2
  const testCase4 = [1, 2, 1, 3, 1]; // 5
  const testCase5 = [1, 2, 3, 2, 1]; // 3
  const testCase6 = [1, 2, 3, 2, 5]; // 8

  console.log(E206(testCase1));
  console.log(E206(testCase2));
  console.log(E206(testCase3));
  console.log(E206(testCase4));
  console.log(E206(testCase5));
  console.log(E206(testCase6));
}
