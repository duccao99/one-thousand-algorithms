/**
 * Problem: Find the positive sequence which has the 
 * greatest sum in array of number 
 * 
 * Understanding the problem
 * - a = [-1,1,2,-3,4,5]
 * - positive sequences = [[1,2],[4,5]]
 * - ret = [[4,5]]
 * 
 * - a = [-1,1,2,-3,4,5,-4,5,4]
 * - positive sequences = [[1,2],[4,5],[5,4]]
 * - ret = [[4,5],[5,4]]
 * 
 * 
 * 
 * 
  const testCase1 = [-1,1,2,-3,4,5]; // [[4,5]]
  const testCase2 = [-1,1,2,-3,4,5,-4,5,4]; // [[4,5],[5,4]]
  const testCase3 = [1, 2, 3, 4, 5, -1, -1, 20, 30]; // [[20,30]]

 * 
 * 
 */
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
 * @param {Number} n
 *
 */
function isPositiveNumber(n) {
  return n >= 0;
}

/**
 *
 * @param {Number} n
 *
 */
function isNegativeNumber(n) {
  return n <= 0;
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
function E305(a) {
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

  let maxSum = 0;
  for (let i = positiveSequences.length - 1; i >= 0; --i) {
    let sum = 0;
    for (let j = positiveSequences[i].length - 1; j >= 0; --j) {
      sum += positiveSequences[i][j];
    }
    if (maxSum <= sum) {
      maxSum = sum;
    }
  }
  let ret = [];

  for (let i = positiveSequences.length - 1; i >= 0; --i) {
    let sum = 0;
    for (let j = positiveSequences[i].length - 1; j >= 0; --j) {
      sum += positiveSequences[i][j];
    }
    if (sum === maxSum) {
      ret = push(ret, reverse(positiveSequences[i]));
    }
  }

  return ret;
}

function test1() {
  const testCase1 = [-1, 1, 2, -3, 4, 5]; // [[4,5]]
  const testCase2 = [-1, 1, 2, -3, 4, 5, -4, 5, 4]; // [[4,5],[5,4]]
  const testCase3 = [1, 2, 3, 4, 5, -1, -1, 20, 30]; // [[20,30]]

  console.log(E305(testCase1));
  console.log(E305(testCase2));
  console.log(E305(testCase3));
}

{
  test1();
}
