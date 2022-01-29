/**
 * Problem: Let's shift left rotate element in array
 * 
 * Understanding the problem
 * -------0 1 2 3 4-------
 * - a = [1,2,3,4,5]
 * + i = 4
 *   + a = [2,3,4,5,1]
 *   + temporary = a[0] = 1
 *   + move a[1:4] to a[0:3]
 *     + for j from len - 1 to 1
 *       + a[len - j - 1 - 1] = a[len - j - 1]
 *   + a[4] = temporary
 *  
 * + i = 3 
 *   + a = [3,4,5,1,2]
 *   + swap(a,)
 * + i = 2
 *   + a = [4,5,1,2,3 
 * + i = 1
 *   + a = [5,1,2,3,4]
 * 
 * 
 * -> loop i from len - 1 to 1
 * 
 * 
 * - a = [5,4,3,2,1]
 * + a = [4,3,2,1,5]
 * + a = [3,2,1,5,4]
 * + a = [2,1,5,4,3]
 * + a = [1,5,4,3,2]
 * 
 * 
 * 
 * 
 * 
  const testCase1 = [1,2,3,4,5]; // [5,1,2,3,4]
  const testCase2 = [5,4,3,2,1]; // [1,5,4,3,2]
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1,5,4,3,2]
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E286(a) {
  for (let i = a.length - 1; i >= 1; --i) {
    const temporary = a[0];
    for (let j = a.length - 1; j >= 1; --j) {
      a[a.length - j - 1] = a[a.length - j];
    }
    a[a.length - 1] = temporary;
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [5,1,2,3,4]
  const testCase2 = [5, 4, 3, 2, 1]; // [1,5,4,3,2]
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1,5,4,3,2]

  console.log(E286(testCase1));
  console.log(E286(testCase2));
  console.log(E286(testCase3));
}

{
  test1();
}
