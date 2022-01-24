/**
 * Problem: Sum all values which is greater than their around values 
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2]; // 2
  const testCase3 = [1,2,1]; // 2 
  const testCase4 = [1,2,3,4,5]; // 5
  const testCase5 = [1,2,1,3,1]; // 5
  const testCase6 = [1]; // 1

 * 
 * Approach
 * 
 * 
 */
/**
 *
 * @param {Array} a
 */
function E206(a) {
  if (a.length === 1) {
    return a[0];
  }

  if (a.length === 2) {
    return a[0] > a[1] ? a[0] : a[1];
  }

  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (i === a.length - 1) {
      if (a[i] > a[i - 1]) {
        ret += a[i];
      }
    }

    if (i !== a.length - 1) {
      if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
        ret += a[i];
      }
    }
  }

  return ret;
}
{
  const testCase1 = []; // 0
  const testCase2 = [1, 2]; // 2
  const testCase3 = [1, 2, 1]; // 2
  const testCase4 = [1, 2, 3, 4, 5]; // 5
  const testCase5 = [1, 2, 1, 3, 1]; // 5
  const testCase6 = [1]; // 1

  console.log(E206(testCase1));
  console.log(E206(testCase2));
  console.log(E206(testCase3));
  console.log(E206(testCase4));
  console.log(E206(testCase5));
  console.log(E206(testCase6));
}
