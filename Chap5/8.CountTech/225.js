/**
 * Problem: Count the maximum element in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1,2]; // 1
  const testCase4 = [1,2,2,1]; // 2
  const testCase5 = [1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]; // 2
 * 
 * Approach
 * + step 1: write a function which use to get the maximum element in the array
 * + step 2: traverse input array, check, count
 */

/**
 *
 * @param {Array} a
 */
function getMaximumArrayElement(a) {
  let max = Number.NEGATIVE_INFINITY;

  const aLength = a.length;

  for (let i = 0; i < aLength; ++i) if (max < a[i]) max = a[i];

  return max;
}

/**
 *
 * @param {Array} a
 */
function E225(a) {
  let count = 0;

  const aLength = a.length;
  const maximumElement = getMaximumArrayElement(a);

  for (let i = 0; i < aLength; ++i) if (maximumElement === a[i]) count++;

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1, 2]; // 1
  const testCase4 = [1, 2, 2, 1]; // 2
  const testCase5 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]; // 2

  console.log(E225(testCase1));
  console.log(E225(testCase2));
  console.log(E225(testCase3));
  console.log(E225(testCase4));
  console.log(E225(testCase5));
}
