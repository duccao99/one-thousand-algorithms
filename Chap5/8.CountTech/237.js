/**
 * Problem: Find the values in one-dimensional array of number which 
 * has the most repetition
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1,2,3,4,5]; // [1,2,3,4,5]
  const testCase4 = [1,2,2,3,3,3,4,4,4,4]; // [4]
 * 
 * Approach 1 - Hash Table - 3n
 * Approach 2 - Array - 2n + 2nlog(n)
 * 
 * + n = 6 - 3n = 18
 * + n = 6 - 2n + 2nlog(n) = 12 + 12*log(6) = 21.333....
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E237HashTable(a) {
  const hashmap = {};
  const aLength = a.length;

  for (let i = 0; i < aLength; ++i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  let maxRepetition = Number.NEGATIVE_INFINITY;

  for (const value in hashmap) {
    if (hashmap[value] > maxRepetition) {
      maxRepetition = hashmap[value];
    }
  }

  const result = [];

  for (const value in hashmap) {
    if (hashmap[value] === maxRepetition) {
      result.push(+value);
    }
  }

  return result;
}

function test1() {
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase4 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [4]

  console.log(E237HashTable(testCase1));
  console.log(E237HashTable(testCase2));
  console.log(E237HashTable(testCase3));
  console.log(E237HashTable(testCase4));
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
function E237Array(a) {
  const repetitions = [];
  const aLength = a.length;

  const aMaxValue = mergeSort(a)[0];

  for (let i = 0; i <= aMaxValue; ++i) {
    repetitions.push(0);
  }

  for (let i = 0; i < aLength; ++i) {
    repetitions[a[i]] += 1;
  }

  const maxRepetition = mergeSort(repetitions)[0];

  const repetitionsLength = repetitions.length;

  const result = [];

  for (let i = 0; i < repetitionsLength; ++i) {
    if (repetitions[i] === maxRepetition) {
      result.push(i);
    }
  }

  return result;
}

function test2() {
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase4 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [4]

  console.log(E237Array(testCase1));
  console.log(E237Array(testCase2));
  console.log(E237Array(testCase3));
  console.log(E237Array(testCase4));
}

{
  test2();
}
