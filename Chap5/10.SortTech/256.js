/**
 * Problem: Sort the one-dimensional array of number in descending order
 * 
 * Understanding the problem
 * + Ascending order: 1 2 3 4 5
 * + Descending order: 5 4 3 2 1
 * 
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1,4,3,5,2]; // [5,4,3,2,1]
  const testCase4 = [6,8,9,5,4,7]; // [9,8,7,6,5,4]
  const testCase5 = [1,3,2,5,4,7,6,9,8]; // [9,8,7,6,5,4,3,2,1]
 * 
 *  
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function MergeSort(a) {
  if (a.length <= 1) return a;

  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);

  return merging(MergeSort(left), MergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(left[0]);
      left.shift();
    }

    if (left[0] < right[0]) {
      result.push(right[0]);
      right.shift();
    }
  }

  return [...result, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function E256(a) {
  return MergeSort(a);
}

function test1() {
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 4, 3, 5, 2]; // [1,2,3,4,5]
  const testCase4 = [6, 8, 9, 5, 4, 7]; // [4,5,6,7,8,9]
  const testCase5 = [1, 3, 2, 5, 4, 7, 6, 9, 8]; // [1,2,3,4,5,6,7,8,9]

  console.log(E256(testCase1));
  console.log(E256(testCase2));
  console.log(E256(testCase3));
  console.log(E256(testCase4));
  console.log(E256(testCase5));
}

{
  test1();
}
