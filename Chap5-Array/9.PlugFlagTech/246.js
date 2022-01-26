/**
 * Problem: check if the one-dimensional array of number is symmetric 
 * Understanding the problem
 * + Approach 1: brute force
 * -------0 1 2 3 4--------
 * - a = [1,2,1,2,3]
 * + a.length = 5
 * + loop i from len-1 to 2 = round(5/2)
 * + a[len-1] = a[0]? <=> a[(len-1)]
 * + a[4] = a[0] <=> a[4-4] = a[4-(len-1)] <=> a[len - 1 - i]
 * + a[3] = a[1]
 * 
 * + a[len - 1 - i]
 * + a[4 - 1 - (4 - 1)] = a[0]
 * + a[4 - 1 - 2] = a[1]
 * 
 * 
 * -------0 1 2 3---------
 * - a = [1,2,2,1]
 * + a.lengh = 4
 * + loop i from len - 1 to 2 = round(4/2)
 * 
 * + Approach 2: hash table
 * - a = [1,2,2,1]
 * + hashmap = {key-value as index-element }
 * + hashmap = {0:1,1:2,2:2,3:1}
 * 
 * hashmap[key = 0] = hashmap[key = 3] ?
 * hashmap[key = 1] = hashmap[key = 2] ?
 * 
 * 
 * - a = [1,2,3,2,1]
 * 
 * 
  const testCase1 = []; // 1
  const testCase2 = [1]; // 1
  const testCase3 = [1,1]; // 1
  const testCase4 = [1,2,2,1]; // 1
  const testCase5 = [1,2,1,2]; // 0
  const testCase6 = [1,2,1,2,3]; // 0
  const testCase7 = [2,1,2,3]; // 0
  const testCase8 = [1,2,3,2,1]; // 1

 * 
 * Approach
 * + step 1: 
 * + step 2: 
 * .. 
 * + step n: 
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E246(a) {
  /**
   * O(n/2)
   */
  let flag = 1;

  const mid = Math.round(a.length / 2);

  const aLength = a.length;

  for (let i = a.length - 1; i >= mid; --i) {
    if (a[i] !== a[aLength - 1 - i]) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 1
  const testCase2 = [1]; // 1
  const testCase3 = [1, 1]; // 1
  const testCase4 = [1, 2, 2, 1]; // 1
  const testCase5 = [1, 2, 1, 2]; // 0
  const testCase6 = [1, 2, 1, 2, 3]; // 0
  const testCase7 = [2, 1, 2, 3]; // 0

  console.log(E246(testCase1));
  console.log(E246(testCase2));
  console.log(E246(testCase3));
  console.log(E246(testCase4));
  console.log(E246(testCase5));
  console.log(E246(testCase6));
  console.log(E246(testCase7));
}

{
  test1();
}
