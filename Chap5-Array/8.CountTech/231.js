/**
 * Problem: List the values that appear in one-dimensional 
 * array of number exactly once
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []s
  const testCase2 = [1]; // [1]
  const testCase3 = [1,2,2,3,3,3,4,4,4,4]; // [1]
  const testCase4 = [1,2,3,4,5]; // [1,2,3,4,5]
  const testCase5 = [1,2,2,3,4,4,4,4]; // [1,3]
  const testCase6 = [1,2,3,4,3,2,5,3,2,1,5,4]; // []

 * 
 * Approach
 * + step 1: use hash-table to save key-value as element-repetition
 * + step 2: loop hash-table, check, list
 */

/**
 *
 * @param {Array} a
 */
function E231HashTable(a) {
  const hashmap = {};

  for (let i = 0; i < a.length; ++i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  const ret = [];

  for (const key in hashmap) {
    if (hashmap[key] === 1) {
      ret.push(+key);
    }
  }

  return ret;
}

function runHashTableTestCase() {
  const testCase1 = []; // 0
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [1]
  const testCase4 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase5 = [1, 2, 2, 3, 4, 4, 4, 4]; // [1,3]
  const testCase6 = [1, 2, 3, 4, 3, 2, 5, 3, 2, 1, 5, 4]; // []

  console.log(E231HashTable(testCase1));
  console.log(E231HashTable(testCase2));
  console.log(E231HashTable(testCase3));
  console.log(E231HashTable(testCase4));
  console.log(E231HashTable(testCase5));
  console.log(E231HashTable(testCase6));
}

{
  // runHashTableTestCase();
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

  return merging(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    }

    if (left[0] > right[0]) {
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
function getMaximumArrayElement(a) {
  return mergeSort(a)[a.length - 1];
}

/**
 *
 * @param {Array} a
 */
function E231Array(a) {
  /**
   * + Use the index as element value
   * + result[index] will be the count stuff
   *
   * const testCase6 = [1, 2, 3, 4, 3, 2, 5, 3, 2, 1, 5, 4]; // []
   * 1:2, 2:3, 3:3, 4:2, 5:2
   *
   *
   */
  const arrayMaxValue = getMaximumArrayElement(a);

  const repetitions = [];

  for (let i = 0; i <= arrayMaxValue; ++i) {
    repetitions.push(0);
  }

  for (let i = 0; i < a.length; ++i) {
    repetitions[a[i]] += 1;
  }

  const result = [];

  for (let i = repetitions.length - 1; i >= 0; --i) {
    if (repetitions[i] === 1) {
      result.push(i);
    }
  }

  return mergeSort(result);
}

function runArrayTestCase() {
  const testCase1 = []; // 0
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [1]
  const testCase4 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase5 = [1, 2, 2, 3, 4, 4, 4, 4]; // [1,3]
  const testCase6 = [1, 2, 3, 4, 3, 2, 5, 3, 2, 1, 5, 4]; // []

  console.log(E231Array(testCase1));
  console.log(E231Array(testCase2));
  console.log(E231Array(testCase3));
  console.log(E231Array(testCase4));
  console.log(E231Array(testCase5));
  console.log(E231Array(testCase6));
}

{
  runArrayTestCase();
}
