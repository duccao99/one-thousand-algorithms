/**
 * Problem: Given two one-dimensional array of number.
 * Give the number of occurrences of array a in array b
 * 
 * Understanding the problem
 * - a = [1,2,3]
 * - b = [5,4,1,2,3,4,5,6,1,2,3]
 * + b: [1,2,3], [1,2,3] - 2
 * 
 * - Stuff human do:
 * + step 1: watch array a
 * -> Through watch array a we see that array a is: [1,2,3]
 * 
 * + step 2: watch each element in array b, see 1, 1 is the first element
 * in array a so check next two element, if next two element is equal to a
 * then count. If next element is not equal to array a so check another element
 * 
 * - Stuff computer do:
 * 
  const testCase1 = []; // 
  const testCase2 = []; // 
  const testCase3 = []; // 
  const testCase4 = []; // 
  const testCase5 = []; // 
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
 * @param {Array} b
 */
function E236(a, b) {
  /**
   *  n^2n
   */
  const bLength = b.length;
  const aLength = a.length;

  /**
   * + i = 3
   * aLength = 4, a index = [0,1,2,3]
   * + b[3] = a[0]
   * + check b[3] to b[3+4] = b[3+aLength] = b[7]
   * 
   * 
   * 
   * 
   *   
   const a1 = [1, 2, 3];
   const b1 = [5, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3];

   + i = 2, b[i] = a[0]
   + loop i from 2 to 4 [2,4], [2,4 = 2 + 2 = i + a.length -1 = 2 + 3 -1]
   */
  let count = 0;

  for (let i = 0; i < bLength; ++i) {
    if (b[i] === a[0]) {
      const checkNextElements = [];

      for (let j = i; j <= i + aLength - 1; ++j) {
        checkNextElements.push(b[j]);
      }

      let flag = true;

      for (let k = 0; k < aLength; ++k) {
        if (checkNextElements[k] !== a[k]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        count++;
      }
    }
  }

  return count;
}

function test1() {
  const a1 = [1, 2, 3];
  const b1 = [5, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3];

  const a2 = [1, 2, 3];
  const b2 = [5, 4, 1, 3, 4, 5, 6, 1, 2];

  const a3 = [1, 2, 3];
  const b3 = [5, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3];

  const a4 = [1, 4, 5, 2];
  const b4 = [
    5, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 1, 4, 5, 2, 6, 7,
  ];

  console.log(E236(a1, b1)); // 2
  console.log(E236(a2, b2)); // 0
  console.log(E236(a3, b3)); // 4
  console.log(E236(a4, b4)); // 1
}

{
  test1();
}
