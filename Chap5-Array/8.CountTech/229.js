/**
 * Problem: Count the distict-values in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1,2]; // 2
  const testCase4 = [1,1]; // 0
  const testCase5 = [1,2,2,3,3,3,4,4,4,4]; // 4
  const testCase6 = [1,2,3,4,5]; // 5
 * 
 * Approach
 * + step 1: check is the array has the same value
 * + step 2: use a hash table to save key-value as element-index
 * + step 3: count key
 */

/**
 *
 * @param {Array} a
 */
function isArrayHasTheSameValue(a) {
  let value = a[0];

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== value) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {Array} a
 */
function E229(a) {
  if (a.length === 1) return 1;

  if (isArrayHasTheSameValue(a)) {
    return 0;
  }

  const hashmap = {};

  for (let i = 0; i < a.length; ++i) {
    hashmap[a[i]] = i;
  }

  let count = 0;

  for (const key in hashmap) {
    count++;
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1, 2]; // 2
  const testCase4 = [1, 1]; // 0
  const testCase5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // 4
  const testCase6 = [1, 2, 3, 4, 5]; // 5

  console.log(E229(testCase1));
  console.log(E229(testCase2));
  console.log(E229(testCase3));
  console.log(E229(testCase4));
  console.log(E229(testCase5));
  console.log(E229(testCase6));
}
