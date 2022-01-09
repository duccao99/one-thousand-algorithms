/**
 * Problem: Summing all elements in an one-dimensional array of number
 * 
 * Understanding the problem
 * + we have: n*(n+1)/2 = sum all number from 1 to n
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,5]; // 15
  const testCase3 = [1,1,1,1]; // [4]
 * 
 * Approach
 * + step 1: loop, sum, get result
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E200(a) {
  // O(n)
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    ret += a[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E200Second(a) {
  // O(n/2)
  let ret = 0;

  for (let i = 0; i < a.length / 2; ++i) {
    if (i === a.length - i - 1) {
      ret = ret + a[i];
    }

    if (i !== a.length - i - 1) {
      ret = ret + a[i] + a[a.length - i - 1];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 15
  const testCase3 = [1, 1, 1, 1]; // 4

  // console.log(E200(testCase1));
  // console.log(E200(testCase2));
  // console.log(E200(testCase3));
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 15
  const testCase3 = [1, 1, 1, 1]; // 4

  console.log(E200Second(testCase1));
  console.log(E200Second(testCase2));
  console.log(E200Second(testCase3));
}
