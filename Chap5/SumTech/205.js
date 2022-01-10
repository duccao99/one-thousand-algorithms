/**
 * Problem: Sum all values which are greater than their absolute next value
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2,-1]; // 2
  const testCase3 = [1,2,3,4,-5]; // 0
  const testCase4 = [5,1,4,3,2]; // 12
 * 
 * Approach
 * + step 1: loop, check, sum
 */

/**
 *
 * @param {Array} a
 */
function E205(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > Math.abs(a[i + 1])) {
      ret += a[i];
    }
  }

  return ret;
}
{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, -1]; // 2
  const testCase3 = [1, 2, 3, 4, -5]; // 0
  const testCase4 = [5, 1, 4, 3, 2]; // 12

  console.log(E205(testCase1));
  console.log(E205(testCase2));
  console.log(E205(testCase3));
  console.log(E205(testCase4));
}
