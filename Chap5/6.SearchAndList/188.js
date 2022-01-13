/**
 * Problem: List the largest even positions in one-dimensional array of integers
 *
 * Understanding the problem
 *
 * + Scenario 1: [] // []
 * + Scenario 2: [1,3,5] // []
 * + Scenario 2: [1, 2, 3, 4, 5] // [3]
 * + Scenario 3: [1,2,3,4,3,2,4,1] // 3 6
 *
 * Approach
 * + step 1: write a function which use to check even number
 * + step 2: put all the even number in an array
 * + step 3: find the maximum value of step 2 result
 * + step 4: loop, if the current value is equal to step 3 then put it into
 * an result array
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function wasEvenNumber(n) {
  /**
   * Problem: even number
   * Idea: try to use bitwise operator to solve this problem
   * because this solution might increase the perfomance
   *
   * algorithm: !(n & 1)
   *
   * + n = 2 - 10
   *   + 10 & 1 = 10
   *   + !(10 & 1) = 01 = 1 = true
   *
   * + n = 3 - 11
   *   + 11 & 1 = 11
   *   + !(11 & 1) = 00 = 0 = false
   */
  return !(n & 1);
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

  return mergeLeftRightArraysSorting(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function mergeLeftRightArraysSorting(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left[0]);
      left.shift();
    }

    if (left[0] > right[0]) {
      sortedArray.push(right[0]);
      right.shift();
    }
  }

  return [...sortedArray, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function getMaximumArrayValue(a) {
  const aRef = [...a];
  return mergeSort(aRef)[aRef.length - 1];
}

/**
 *
 * @param {Array} a
 */
function E188(a) {
  const evenValues = [];

  for (let i = 0; i < a.length; ++i) {
    if (!!wasEvenNumber(a[i])) {
      evenValues.push(a[i]);
    }
  }

  const maxEvenValue = getMaximumArrayValue(evenValues);

  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (maxEvenValue === a[i]) {
      ret.push(i);
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1, 3, 5]; // []
  const testCase3 = [1, 2, 3, 4, 5]; // [3]
  const testCase4 = [1, 2, 3, 4, 3, 2, 4, 1]; // 3 6

  console.log(E188(testCase1));
  console.log(E188(testCase2));
  console.log(E188(testCase3));
  console.log(E188(testCase4));
}
