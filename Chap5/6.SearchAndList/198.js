/**
 * Problem: List all positions where it's value was a maximum value
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // [0]
  const testCase3 = [1,2,3,4,5]; // [4]
  const testCase4 = [1,2,3,4,5,4,3,2,1,5,4,3,2,1]; // [4,9]

 * 
 * Approach
 * + step 1: write mergeSort function
 * + step 2: sort the array in descending order
 * + step 3: the first element in sorted array will be the maximum value
 * + step 4: loop, check, get result
 */

/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);
  return mergingAndSortingLeftAndRight(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function mergingAndSortingLeftAndRight(left, right) {
  const sortedResult = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      sortedResult.push(left[0]);
      left.shift();
    }

    if (left[0] < right[0]) {
      sortedResult.push(right[0]);
      right.shift();
    }
  }
  return [...sortedResult, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function getArrayMaximumValue(a) {
  return mergeSort(a)[0];
}

/**
 *
 * @param {Array} a
 */
function E198(a) {
  const ret = [];
  const aRef = [...a];

  const maximumValue = getArrayMaximumValue(aRef);
  for (let i = 0; i < a.length; ++i) {
    if (maximumValue === a[i]) {
      ret.push(i);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1]; // [0]
  const testCase3 = [1, 2, 3, 4, 5]; // [4]
  const testCase4 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]; // [4,9]

  console.log(E198(testCase1));
  console.log(E198(testCase2));
  console.log(E198(testCase3));
  console.log(E198(testCase4));
}
