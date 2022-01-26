/**
 * Problem: List the number of repetition of one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // {}
  const testCase2 = [1]; // {1:1}
  const testCase3 = [1,1,2]; // {1:2, 2:1}
  const testCase4 = [1,2,2,3,3,3,4,4,4,4]; // {1:1, 2:2, 3:3, 4:4}
 * 
 */

/**
 *
 * @param {Array} a
 */
function E233HashTable(a) {
  const hashmap = {};

  for (let i = 0; i < a.length; ++i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  return hashmap;
}

function test1() {
  const testCase1 = []; // {}
  const testCase2 = [1]; // {1:1}
  const testCase3 = [1, 1, 2]; // {1:2, 2:1}
  const testCase4 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // {1:1, 2:2, 3:3, 4:4}

  console.log(E233HashTable(testCase1));
  console.log(E233HashTable(testCase2));
  console.log(E233HashTable(testCase3));
  console.log(E233HashTable(testCase4));
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
  const result = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(left[0]);
      right.shift();
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
function getArrayMaximumValue(a) {
  return mergeSort(a)[0];
}

/**
 *
 * @param {Object}
 * @param {String} key
 *
 */
function removeKeyValueInAnObjectRef(object, key) {
  const objRef = { ...object };
  delete objRef[key];
  return objRef;
}

/**
 *
 * @param {Object} object
 * @param {String} key
 */
function removeKeyValueInAnObjectNoRef(object, key) {
  delete object[key];
}

/**
 *
 * @param {Array} a
 */
function E233Array(a) {
  const counter = [];

  const aMaxValue = getArrayMaximumValue(a);

  for (let i = 0; i <= aMaxValue; ++i) {
    counter.push(0);
  }

  for (let i = 0; i < a.length; ++i) {
    counter[a[i]] += 1;
  }

  let result = {};

  for (let i = 0; i < counter.length; ++i) {
    result[i] = counter[i];
  }

  for (const key in result) {
    if (result[key] === 0) {
      removeKeyValueInAnObjectNoRef(result, key);
    }
  }

  return result;
}

function test2() {
  const testCase1 = []; // {}
  const testCase2 = [1]; // {1:1}
  const testCase3 = [1, 1, 2]; // {1:2, 2:1}
  const testCase4 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 2, 1, 4]; // {1:2, 2:3, 3:4, 4:5}

  console.log(E233Array(testCase1));
  console.log(E233Array(testCase2));
  console.log(E233Array(testCase3));
  console.log(E233Array(testCase4));
}

{
  test2();
}
