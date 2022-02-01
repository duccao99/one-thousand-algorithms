/**
 * Problem: Find the longest positive sequence in array of number
 * 
 * Understanding the problem
 * - a = [-1,1,2,-2,3,4,5]
 * - positive sequences = [[1,2],[3,4,5]]
 * - ret = [3,4,5]
 * 
 * 
   const testCase1 = [-1, 1, 2, -2, 3, 4, 5]; // [[3,4,5]]
  const testCase2 = [1, 2, 3, -1, -2, 1, 2, 4]; // [[1,2,3], [1,2,4]]
  const testCase3 = [4, 5, 6, -2, 4, 5, -1, 7, 8, 9, 10]; //[ [7,8,9,10]]
  const testCase4 = [1, 2, 3, 4, 5, -1, 1, 2, 3, 4, 4, -2]; // [[1,2,3,4,5], [1,2,3,4,4]]

 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n >= 0;
}

/**
 *
 * @param {Number} n
 */
function isNegativeNumber(n) {
  return n <= 0;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function reverse(a) {
  const mid = Math.round(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    swap(a, i, a.length - i - 1);
  }
  return a;
}
/**
 *
 * @param {Array} a
 */
function E303(a) {
  let positiveSequences = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPositiveNumber(a[i])) {
      let positiveSequence = [];
      for (let j = i; j >= 0; --j) {
        if (isNegativeNumber(a[j])) {
          break;
        }
        positiveSequence = push(positiveSequence, a[j]);
      }
      positiveSequences = push(positiveSequences, positiveSequence);
    }
  }

  let maxLength = 0;

  for (let i = positiveSequences.length - 1; i >= 0; --i) {
    let length = positiveSequences[i].length;
    if (maxLength <= length) {
      maxLength = length;
    }
  }

  let ret = [];

  for (let j = positiveSequences.length - 1; j >= 0; --j) {
    if (positiveSequences[j].length === maxLength) {
      ret = push(ret, reverse(positiveSequences[j]));
    }
  }

  return ret;
}

function E303Optimal(a) {
  let positiveSequences = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPositiveNumber(a[i])) {
      let positiveSequence = [];
      for (let j = i; j >= 0; --j) {
        if (isNegativeNumber(a[j])) {
          break;
        }
        positiveSequence = push(positiveSequence, a[j]);
      }
      positiveSequences = push(positiveSequences, positiveSequence);
    }
  }

  const hashmap = {};
  let max = 0;
  for (let i = positiveSequences.length - 1; i >= 0; --i) {
    if (max <= positiveSequences[i].length) {
      max = positiveSequences[i].length;
    }
    hashmap[max] = positiveSequences[i];
  }

  return reverse(hashmap[max]);
}

function test1() {
  const testCase1 = [-1, 1, 2, -2, 3, 4, 5]; // [[3,4,5]]
  const testCase2 = [1, 2, 3, -1, -2, 1, 2, 4]; // [[1,2,3], [1,2,4]]
  const testCase3 = [4, 5, 6, -2, 4, 5, -1, 7, 8, 9, 10]; //[ [7,8,9,10]]
  const testCase4 = [1, 2, 3, 4, 5, -1, 1, 2, 3, 4, 4, -2]; // [[1,2,3,4,5], [1,2,3,4,4]]

  console.log(E303(testCase1));
  console.log(E303(testCase2));
  console.log(E303(testCase3));
  console.log(E303(testCase4));
}

function test2() {
  const testCase1 = [-1, 1, 2, -2, 3, 4, 5]; // [[3,4,5]]
  const testCase2 = [1, 2, 3, -1, -2, 1, 2, 4]; // [[1,2,3], [1,2,4]]
  const testCase3 = [4, 5, 6, -2, 4, 5, -1, 7, 8, 9, 10]; //[ [7,8,9,10]]
  const testCase4 = [1, 2, 3, 4, 5, -1, 1, 2, 3, 4, 4, -2]; // [[1,2,3,4,5], [1,2,3,4,4]]

  console.log(E303Optimal(testCase1));
  console.log(E303Optimal(testCase2));
  console.log(E303Optimal(testCase3));
  console.log(E303Optimal(testCase4));
}

{
  test1();
  console.log("");
  test2();
}
