/**
 * Problem: Sort the positive number in one-dimensional array of number 
 * in ascending order, negative number in descending order, the relative 
 * position of negative number and positive number is not change
 * 
 * Understanding the problem
 * 
  const testCase1 = [3,1,5,-1,-6,-5]; // [1,3,5,-1,-5,-6]
  const testCase2 = [3,-1,1,-6,5,-5]; // [1,-1,3,-5,5,-6]
  const testCase3 = [-1,3,5,-5,1,-6]; // [-1,1,3,-5,5,-6]
 * 
 * Approach
 * 
 */

/**
 *
 * @param {Array} a
 */
function bubbleSort(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[i] < a[j]) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
  return a;
}

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
   * ---------0 1 2 3 --------
   * - ret = [2,3,4,5]
   *
   */
  const ret = new Array(a.length - 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i - 1];
  }

  return ret;
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  const ret = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      ret.push(left[0]);
      left.shift();
      // left = arrayShift(left);
    }
    if (left[0] > right) {
      ret.push(right[0]);
      // right = arrayShift(right);
      right.shift();
    }
  }

  return [...ret, ...left, ...right];
}

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n > 0;
}

/**
 *
 * @param {Array} a
 */
function reverseArray(a) {
  /**
   * -------0 1 2 3 4------------
   * - a = [1,2,3,4,5]
   * ---------0 1 2 3 4---------
   * - ret = [5,4,3,2,1]
   *
   * +
   */

  const mid = Math.floor(a.length / 2);
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
 */
function E263(a) {
  const positiveNumbers = [];
  const positiveNumbersIndexes = [];

  const negativeNumbers = [];
  const negativeNumbersIndexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPositiveNumber(a[i])) {
      positiveNumbers.push(a[i]);
      positiveNumbersIndexes.push(i);
    }

    if (!isPositiveNumber(a[i])) {
      negativeNumbers.push(a[i]);
      negativeNumbersIndexes.push(i);
    }
  }

  bubbleSort(positiveNumbers);
  reverseArray(bubbleSort(negativeNumbers));

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = positiveNumbersIndexes.length - 1; j >= 0; --j) {
      if (positiveNumbersIndexes[j] === i) {
        a[i] = positiveNumbers[positiveNumbers.length - 1];
        positiveNumbers.pop();
      }
    }
    for (let k = negativeNumbersIndexes.length - 1; k >= 0; --k) {
      if (negativeNumbersIndexes[k] === i) {
        a[i] = negativeNumbers[negativeNumbers.length - 1];
        negativeNumbers.pop();
      }
    }
  }
  return a;
}

function test1() {
  const testCase1 = [3, 1, 5, -1, -6, -5]; // [1,3,5,-1,-5,-6]
  const testCase2 = [3, -1, 1, -6, 5, -5]; // [1,-1,3,-5,5,-6]
  const testCase3 = [-1, 3, 5, -5, 1, -6]; // [-1,1,3,-5,5,-6]

  console.log(E263(testCase1));
  console.log(E263(testCase2));
  console.log(E263(testCase3));
}

{
  test1();
}
