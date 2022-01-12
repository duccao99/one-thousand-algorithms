/**
 * Problem: Sum all extreme-values in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1,2]; // 3
  const testCase4 = [1,2,3,4,5]; // 6
  const testCase5 = [1,2,3,2,1]; // 3
 * 
 * Approach
 * + step 1: check is extreme
 * + step 2: loop, check, sum
 */

/**
 *
 * @param {Array} a
 */
function E207(a) {
  let ret = 0;

  if (a.length === 0) return 0;

  if (a.length === 1) return a[0];

  ret = ret + a[0] + a[a.length - 1];

  for (let i = 1; i < a.length - 1; ++i) {
    if (
      (a[i] > a[i - 1] && a[i] > a[i + 1]) ||
      (a[i] < a[i - 1] && a[i] < a[i + 1])
    ) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1, 2]; // 3
  const testCase4 = [1, 2, 3, 4, 5]; // 6
  const testCase5 = [1, 2, 3, 2, 1]; // 5

  console.log(E207(testCase1));
  console.log(E207(testCase2));
  console.log(E207(testCase3));
  console.log(E207(testCase4));
  console.log(E207(testCase5));
}
