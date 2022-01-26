/**
 * Problem: Determine the number of adjacent-elements where
 * the last number has the same sign as the preceding number
 * and has the absolute value is greater than the preceding number
 * 
 * Understanding the problem
 * 1 3 2 4 5  -> 3s
 * 
 * 
 * 
  const testCase1 = [1,3,2,4,5]; // 3
  const testCase2 = [1,-3,2,4,-5]; // 1
  const testCase3 = [-1,-3,2,-4,-5]; // 2
 * 
 * Approach
 * + step 1: isSameSign function
 * + step 2: isGreaterThan function
 
 * 
 */

/**
 *
 * @param {Number} a
 * @param {Number} b
 */
function isSameSign(a, b) {
  return a * b >= 0;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 */
function isGreaterThan(a, b) {
  return a > b;
}

/**
 *
 * @param {Array} a
 */
function E228(a) {
  if (a.length === 0 || a.length === 1) return 0;

  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isSameSign(a[i], a[i + 1]) && isGreaterThan(Math.abs(a[i + 1]), a[i])) {
      count++;
    }
  }

  return count;
}

{
  const testCase1 = [1, 3, 2, 4, 5]; // 3
  const testCase2 = [1, -3, 2, 4, -5]; // 1
  const testCase3 = [-1, -3, 2, -4, -5]; // 2
  const testCase4 = []; // 0
  const testCase5 = [1]; // 0

  console.log(E228(testCase1));
  console.log(E228(testCase2));
  console.log(E228(testCase3));
  console.log(E228(testCase4));
  console.log(E228(testCase5));
}
