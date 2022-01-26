/**
 * Problem: Count the number of values which satisfies the property
 * "greater than all values stand before it"
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2]; // 1
  const testCase4 = [1,2,3,4]; // 3
  const testCase5 = [1,4,3,2,5]; // 2
  const testCase6 = [1,2,3,4,5,6,7,8,9]; // 8
 * 
 */

/**
 *
 * @param {Array} a
 */
function E254(a) {
  let count = 0;

  for (let i = a.length - 1; i >= 1; --i) {
    let flag = 1;

    for (let j = i - 1; j >= 0; --j) {
      if (a[i] < a[j]) {
        flag = 0;
        break;
      }
    }

    if (flag === 1) {
      count++;
    }
  }

  return count;
}

function test1() {
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2]; // 1
  const testCase4 = [1, 2, 3, 4]; // 3
  const testCase5 = [1, 4, 3, 2, 5]; // 2
  const testCase6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 8

  console.log(E254(testCase1));
  console.log(E254(testCase2));
  console.log(E254(testCase3));
  console.log(E254(testCase4));
  console.log(E254(testCase5));
  console.log(E254(testCase6));
}

{
  test1();
}
