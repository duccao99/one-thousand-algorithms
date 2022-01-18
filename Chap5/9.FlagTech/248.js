/**
 * Problem: Check if the one-dimensional array is increase 
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 1
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3,4,5]; // 1
  const testCase4 = [1,2,3,2,1]; // 0
  const testCase5 = [1,2,3,4,5,1]; // 0
 * 
 */

/**
 *
 * @param {Array} a
 */
function E248(a) {
  if (a.length === 1) return 0;

  let flag = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] < a[i - 1]) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 1
  const testCase2 = [1]; // 1
  const testCase3 = [1, 2, 3, 4, 5]; // 1
  const testCase4 = [1, 2, 3, 2, 1]; // 0
  const testCase5 = [1, 2, 3, 4, 5, 1]; // 0

  console.log(E248(testCase1));
  console.log(E248(testCase2));
  console.log(E248(testCase3));
  console.log(E248(testCase4));
  console.log(E248(testCase5));
}

{
  test1();
}
