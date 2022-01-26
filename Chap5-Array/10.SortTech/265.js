/**
 * Problem: Given two ascending array, mix two arrays into one
 * sorted array in descending order
 * 
 * Understanding the problem
 * 
  const a1 = [1, 3, 5, 7]; //
  const a2 = [2, 4, 6, 8]; //

  const b1 = [1, 2, 3, 6, 7, 10];
  const b2 = [2, 3, 4, 5, 6];
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.floor(a.length / 2);
  const left = right.splice(0, mid);
  return merging(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} a
 */
function arrayShift(a) {
  /**
   * -------0 1 2 3 4-----------
   * - a = [1,2,3,4,5]
   * ------------0 1 2 3-----
   * - result = [2,3,4,5]
   */

  const result = new Array(a.length - 1);

  for (let i = result.length - 1; i >= 0; --i) {
    result[i] = a[i + 1];
  }

  return result;
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left[0]);
      left = arrayShift(left);
    }

    if (left[0] > right[0]) {
      sorted.push(right[0]);
      right = arrayShift(right);
    }
  }

  return [...sorted, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function reverseArray(a) {
  const mid = Math.round(a.length / 2);
  const aLength = a.length;

  for (let i = aLength - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[aLength - i - 1];
    a[aLength - i - 1] = temporary;
  }
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E265(a, b) {
  let result = [];

  for (let i = a.length - 1; i >= 0; --i) {
    result.push(a[i]);
  }

  for (let j = b.length - 1; j >= 0; --j) {
    result.push(b[j]);
  }

  result = mergeSort(result);

  reverseArray(result);

  return result;
}

function test1() {
  const a1 = [1, 3, 5, 7]; //
  const a2 = [2, 4, 6, 8]; //

  const b1 = [1, 2, 3, 6, 7, 10];
  const b2 = [2, 3, 4, 5, 6];

  console.log(E265(a1, a2));
  console.log(E265(b1, b2));
}

{
  test1();
}
