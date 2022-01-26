/**
 * Problem: Given an one-dimensional array of integer which have 
 * at least two elements. List all couple elements
 * 
 * Understanding the problem
 * 
 * couple elements are two elements which has the nearest spacing 
 * to each other
 * Example: [1,2,4,6,8,3,4] - |1 - 2| = 1 was the minimum spacing
 * so (1,2), (3,4) were a couple elements
 *  
 * 
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2]; // [[1,2]]
  const testCase4 = [1, 2, 4, 6, 8, 3, 5]; // [[1,2],[3,2],[4,3],[4,5],[6,5]]
  const testCase5 = [1, 2, 4, 6, 8, 10, 12]; // [[1,2]]
 * 
 * Approach
 * + step 1: write a function which use to get all element spacing - done
 * + step 2: get minimum of step 1 result - done
 *  + step 2.1: implementing merge sort
 *  + step 2.2: sort the input array in ascending order, the 
 *  first element will be the minimum value
 * + step 3: loop input in two round, check spacing, if match step 2 then
 * it will be a couple element
 * 
 */

/**
 *
 * @param {Array} a
 */
function getAllElementSpacing(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      ret.push(Math.abs(a[i] - a[j]));
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);
  return mergingAndSortingLeftAndRightArray(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function mergingAndSortingLeftAndRightArray(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      sortedArray.push(right[0]);
      right.shift();
    }

    if (left[0] < right[0]) {
      sortedArray.push(left[0]);
      left.shift();
    }
  }

  return [...sortedArray, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function getMinimumSpacing(a) {
  return mergeSort(a)[0];
}

/**
 *
 * @param {Array} a
 */
function E194(a) {
  const ret = [];
  const minimumSpacing = getMinimumSpacing(getAllElementSpacing(a));

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (minimumSpacing === Math.abs(a[i] - a[j])) {
        ret.push([a[i], a[j]]);
      }
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2]; // [[1,2]]
  const testCase4 = [1, 2, 4, 6, 8, 3, 5]; // [[1,2],[3,2],[4,3],[4,5],[6,5]]
  const testCase5 = [1, 2, 4, 6, 8, 10, 12]; // [[1,2]]

  console.log(E194(testCase1));
  console.log(E194(testCase2));
  console.log(E194(testCase3));
  console.log(E194(testCase4));
  console.log(E194(testCase5));
}
