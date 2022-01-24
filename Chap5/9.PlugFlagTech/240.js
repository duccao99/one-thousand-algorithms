/**
 * Problem: Check if zero is exists in one-dimensional array
 * returns 0 if it not exist, returns 1 if it exist
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,5]; // 0
  const testCase3 = [0,1,2,3]; // 1
  const testCase4 = [1,2,3,0,1,2,3,0]; // 1
 */

/**
 *
 * @param {Array} a
 */
function E240(a) {
  const aLength = a.length;

  let flag = 0;

  for (let i = 0; i < aLength; ++i) {
    if (a[i] === 0) {
      flag = 1;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 0
  const testCase3 = [0, 1, 2, 3]; // 1
  const testCase4 = [1, 2, 3, 0, 1, 2, 3, 0]; // 1

  console.log(E240(testCase1));
  console.log(E240(testCase2));
  console.log(E240(testCase3));
  console.log(E240(testCase4));
}

{
  test1();
}
