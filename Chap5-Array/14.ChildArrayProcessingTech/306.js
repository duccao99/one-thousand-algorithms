/**
 * Problem: Find the sequences which have greatest sum in
 * array of number
 * 
 * Understanding the problem
 * - a = [1,2,3,4,5,-1,-2,3,4,5]
 * - ret = [[1,2,3,4,5]]
 * 
 * - a = [-1,-2,1,-1,-2,3]
 * - ret = [[-1,-2,3]]
 * 
 * - a = [1,2,3,4,-1,4,1,3,2]
 * - ret = [1,2,3,4,-1,4,1,3,2]
 * 
  const testCase1 = [1, 2, 3, 4, 5, -1, -2, 3, 4, 5]; // [[1, 2, 3, 4, 5, -1, -2, 3, 4, 5]]
  const testCase2 = [-1, -2, 1, -1, -2, 3]; // [[3]]
  const testCase3 = [1, 2, 3, 4, -1, 4, 1, 3, 2]; // [[1,2,3,4,-1,4,1,3,2]]
  const testCase4 = [2, -1, 4, -7, 10, 5, -9, 5, 8, 12, -10]; // [ [ 10, 5, -9, 5, 8, 12 ] ]

 * 
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
function E306(a) {
  let sequences = [];
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i; j >= 0; --j) {
      let sequence = [];
      for (let k = i; k >= j; --k) {
        sequence = push(sequence, a[k]);
      }
      sequences = push(sequences, sequence);
    }
  }

  let maxSum = 0;
  for (let i = sequences.length - 1; i >= 0; --i) {
    let sum = 0;
    for (let j = sequences[i].length - 1; j >= 0; --j) {
      sum += sequences[i][j];
    }
    if (maxSum <= sum) {
      maxSum = sum;
    }
  }

  let ret = [];

  for (let i = sequences.length - 1; i >= 0; --i) {
    let sum = 0;
    for (let j = sequences[i].length - 1; j >= 0; --j) {
      sum += sequences[i][j];
    }
    if (sum === maxSum) {
      ret = push(ret, reverse(sequences[i]));
    }
  }

  return ret;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5, -1, -2, 3, 4, 5]; // [[1, 2, 3, 4, 5, -1, -2, 3, 4, 5]]
  const testCase2 = [-1, -2, 1, -1, -2, 3]; // [[3]]
  const testCase3 = [1, 2, 3, 4, -1, 4, 1, 3, 2]; // [[1,2,3,4,-1,4,1,3,2]]
  const testCase4 = [2, -1, 4, -7, 10, 5, -9, 5, 8, 12, -10]; // [ [ 10, 5, -9, 5, 8, 12 ] ]

  console.log(E306(testCase1));
  console.log(E306(testCase2));
  console.log(E306(testCase3));
  console.log(E306(testCase4));
}

{
  test1();
}
