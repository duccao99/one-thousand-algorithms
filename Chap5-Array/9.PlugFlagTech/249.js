/**
 * Problem: Check if the one-dimensional array of number is decrease
 * 
 * Understanding the problem
 * -------0 1 2 3 4------
 * - a = [5,4,3,2,1]
 * + a[4] > a[3] - flag = 0
 * + a[i] > a[i-1] - flag = 0
 * 
 * 
 * 
  const testCase1 = []; // 1
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3]; // 0
  const testCase4 = [1,2,3,2,1]; // 0
  const testCase5 = [3,2,1]; // 1
  const testCase6 = [5,4,3,2,1]; // 1
*/

/**
 *
 * @param {Array} a
 */
function E249(a) {
  if (a.length === 1) return 0;

  let flag = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] > a[i - 1]) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 1
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3]; // 0
  const testCase4 = [1, 2, 3, 2, 1]; // 0
  const testCase5 = [3, 2, 1]; // 1
  const testCase6 = [5, 4, 3, 2, 1]; // 1

  console.log(E249(testCase1));
  console.log(E249(testCase2));
  console.log(E249(testCase3));
  console.log(E249(testCase4));
  console.log(E249(testCase5));
  console.log(E249(testCase6));
}

{
  test1();
}
