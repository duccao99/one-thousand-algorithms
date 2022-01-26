/**
 * Problem: Let's remove all greatest number in 
 * one-dimensional array of number
 * 
 * 
 * Understanding the problem
 * - a = [1,2,3,5,5,4] 
 * - greatest number: 5
 * - ret = [1,2,3,4]
 * 
  const testCase1 = [1,2,3,5,5,4]; // [1,2,3,4]
  const testCase2 = [5,1,2,3,4]; // [1,2,3,4]
  const testCase3 = [1,2,3,4,5,5,5]; // [1,2,3,4]
 * 
 * Approach
 * + step 1: write a function to find the max number in an array - done 
 * + step 2: write remove array element at position k function - done
 * + step 3: get all max number indexes - done
 * + step 4: remove - done
 * 
 */

/**
 *
 * @param {Array} a
 */
function getAllArrayMaxElementIndexes(a) {
  const max = getArrayMaxNumber(a);
  const ret = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === max) ret.push(i);
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} k
 */
function removeArrayElementAtPosition(a, k) {
  if (k < 0 || k > a.length - 1) return a;

  const ret = new Array(a.length - 1);

  if (k === 0) {
    for (let i = ret.length - 1; i >= 0; --i) ret[i] = a[i + 1];
  }

  if (k === a.length - 1) {
    for (let i = ret.length - 1; i >= 0; --i) ret[i] = a[i];
  }

  if (k !== 0 && k !== a.length - 1) {
    for (let i = k - 1; i >= 0; --i) ret[i] = a[i];
    for (let i = ret.length - 1; i >= k; --i) ret[i] = a[i + 1];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;

  let right = [...a];
  const mid = Math.round(a.length / 2);
  let left = right.splice(0, mid);

  return merging(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  const ret = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      ret.push(left[0]);
      left = removeArrayElementAtPosition(left, 0);
    }

    if (left[0] >= right[0]) {
      ret.push(right[0]);
      right = removeArrayElementAtPosition(right, 0);
    }
  }

  return [...ret, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function getArrayMaxNumber(a) {
  return mergeSort(a)[a.length - 1];
}

/**
 *
 * @param {Array} a
 */
function E272(arr) {
  let a = [...arr];
  let maxElementIndexes = getAllArrayMaxElementIndexes(a);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = maxElementIndexes.length - 1; j >= 0; --j) {
      if (maxElementIndexes[j] === i) {
        a = removeArrayElementAtPosition(a, i);
        maxElementIndexes = removeArrayElementAtPosition(maxElementIndexes, j);
        break;
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 5, 5, 4]; // [1,2,3,4]
  const testCase2 = [5, 1, 2, 3, 4]; // [1,2,3,4]
  const testCase3 = [1, 2, 3, 4, 5, 5, 5]; // [1,2,3,4]

  console.log(E272(testCase1));
  console.log(E272(testCase2));
  console.log(E272(testCase3));
}

{
  test1();
}
