/**
 * Problem: List all elements which are appear more than once 
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1,2]; // []
  const testCase4 = [1,2,2]; // [2]
  const testCase5 = [1,2,2,3,3,3,4,4,4,4]; // [2,3,4]
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E232HashTable(a) {
  const hashmap = {};

  for (let i = 0; i < a.length; ++i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  const result = [];

  for (const key in hashmap) {
    if (hashmap[key] > 1) result.push(+key);
  }

  return result;
}

function test1() {
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2]; // []
  const testCase4 = [1, 2, 2]; // [2]
  const testCase5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [2,3,4]

  console.log(E232HashTable(testCase1));
  console.log(E232HashTable(testCase2));
  console.log(E232HashTable(testCase3));
  console.log(E232HashTable(testCase4));
  console.log(E232HashTable(testCase5));
}

{
  // test1();
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
  const ret = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      ret.push(left[0]);
      left.shift();
    }

    if (left[0] < right[0]) {
      ret.push(right[0]);
      left.shift();
    }
  }

  return [...ret, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function getArrayMaximumElement(a) {
  return mergeSort(a)[0];
}

/**
 *
 * @param {Array} a
 */
function E232Array(a) {
  const arrayMaximumElement = getArrayMaximumElement(a);

  const indexAsElement = [];

  for (let i = 0; i <= arrayMaximumElement; ++i) {
    indexAsElement.push(0);
  }

  for (let i = 0; i < a.length; ++i) {
    indexAsElement[a[i]] += 1;
  }

  const ret = [];

  for (let i = 0; i < indexAsElement.length; ++i) {
    if (indexAsElement[i] > 1) {
      ret.push(i);
    }
  }

  return ret;
}

function test2() {
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2]; // []
  const testCase4 = [1, 2, 2]; // [2]
  const testCase5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [2,3,4]

  console.log(E232Array(testCase1));
  console.log(E232Array(testCase2));
  console.log(E232Array(testCase3));
  console.log(E232Array(testCase4));
  console.log(E232Array(testCase5));
}

{
  test2();
}
