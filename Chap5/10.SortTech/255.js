/**
 * Problem: Sort the one-dimensional array of number in ascending order
 * 
 * Understanding the problem
 * + Ascending order: 1 2 3 4 5
 * + Descending order: 5 4 3 2 1
 * 
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1,4,3,5,2]; // [1,2,3,4,5]
  const testCase4 = [6,8,9,5,4,7]; // [4,5,6,7,8,9]
  const testCase5 = [1,3,2,5,4,7,6,9,8]; // [1,2,3,4,5,6,7,8,9]
 * 
 *  
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function BubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] > a[i]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

/**
 *
 * @param {Array} a
 */
function E255(a) {
  return BubbleSort(a);
}

function test1() {
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 4, 3, 5, 2]; // [1,2,3,4,5]
  const testCase4 = [6, 8, 9, 5, 4, 7]; // [4,5,6,7,8,9]
  const testCase5 = [1, 3, 2, 5, 4, 7, 6, 9, 8]; // [1,2,3,4,5,6,7,8,9]

  console.log(E255(testCase1));
  console.log(E255(testCase2));
  console.log(E255(testCase3));
  console.log(E255(testCase4));
  console.log(E255(testCase5));
}

{
  test1();
}
