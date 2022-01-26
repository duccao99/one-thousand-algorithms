/**
 * Problem: List the number of element appear frequency in one-dimensional
 * array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // {1:1}
  const testCase3 = [1,2,2,3,3,3,4,4,4,4]; // {1:1,2:2,3:3,4:4}
  const testCase4 = [1,2,3,4,5]; // {1:1,2:1,3:1,4:1,5:1}
 */

/**
 *
 * @param {Array} a
 */
function E230(a) {
  const hashmap = {};

  for (let i = 0; i < a.length; ++i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  return hashmap;
}
{
  const testCase1 = []; // 0
  const testCase2 = [1]; // {1:1}
  const testCase3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // {1:1,2:2,3:3,4:4}
  const testCase4 = [1, 2, 3, 4, 5]; // {1:1,2:1,3:1,4:1,5:1}

  console.log(E230(testCase1));
  console.log(E230(testCase2));
  console.log(E230(testCase3));
  console.log(E230(testCase4));
}
