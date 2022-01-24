/**
 * Problem: Let check the one-dimensional array, was it contains 
 * any even values. Returns 1 if it contains else returns 0
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3,4,5]; // 1
  const testCase4 = [1,3,5,7]; // 0
  const testCase5 = [2,4,6,8]; // 1
  const testCase6 = [1,3,5,2,7]; // 1
 */

/**
 *
 * @param {Array} a
 */
function E242(a) {
  // cai dit, haizz
  let flag = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (!(a[i] & 1)) {
      flag = 1;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 1
  const testCase4 = [1, 3, 5, 7]; // 0
  const testCase5 = [2, 4, 6, 8]; // 1
  const testCase6 = [1, 3, 5, 2, 7]; // 1

  console.log(E242(testCase1));
  console.log(E242(testCase2));
  console.log(E242(testCase3));
  console.log(E242(testCase4));
  console.log(E242(testCase5));
  console.log(E242(testCase6));
}

{
  test1();
}
