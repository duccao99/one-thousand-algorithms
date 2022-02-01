/**
 * Problem: Count the number of decreasing sequences in array of number
 * 
 * Understanding the problem
 * - Decreasing sequence:
 * + Look from the right to the left: [5,4,3,2,1], [4,3,2], [2,1]
 * + Look from the left to the right: [1,2,3,4,5], [2,3,4], [1,2]
 * 
 * + From left to right
 * - a1 = [5,4,3,1,2]
 * - sequences = [[5,4],[5,4,3],[5,4,3,1],[4,3],[4,3,1],[3,1]]
 * - count = 6
 * 
 * - a2 = [4,1,3,2,5]
 * - sequences = [[4,1],[3,2]]
 * - count = 2
 * 
 * - a3 = [3,2,5,4,1]
 * - sequences = [[3,2],[5,4],[5,4,1],[4,1]]
 * - count = 4
 * 
 * + From right to left
 * - a1 = [5,4,3,1,2]
 * - sequences = [[2,1]]
 * - count = 1
 * 
 * - a2 = [4,1,3,2,5]
 * - sequences = [[5,2],[3,1]]
 * - count = 2
 * 
 * - a3 = [3,2,5,4,1]
 * - sequences = [[5,2]]
 * - count = 1
 * 
 * - From left to right test cases
  const testCase1 = [5,4,3,1,2]; // 6
  const testCase2 = [4,1,3,2,5]; // 2
  const testCase3 = [3,2,5,4,1]; // 4
 
 * - From right to left test cases
  const testCase1 = [5,4,3,1,2]; // 1
  const testCase2 = [4,1,3,2,5]; // 2
  const testCase3 = [3,2,5,4,1]; // 1

\* 
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
function getArraySequences(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i; j >= 0; --j) {
      let sequence = [];
      for (let k = i; k >= j; --k) {
        sequence = push(sequence, a[k]);
      }
      if (sequence.length >= 2) {
        ret = push(ret, sequence);
      }
    }
  }

  return ret;
}

/**
 *
 * @param {string} key
 */
function keyToArray(key) {
  /**
   * - key = '1,3'
   * - ret = [1,3]
   */
  let ret = [];
  for (let i = 0; i <= key.length - 1; ++i) {
    if (key[i] !== ",") {
      ret = push(ret, +key[i]);
    }
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function removeDuplicatedElement(a) {
  const hashmap = {};
  for (let i = a.length - 1; i >= 0; --i) {
    hashmap[a[i]] = 0;
  }
  let ret = [];
  for (const key in hashmap) {
    ret = push(ret, keyToArray(key));
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function E300FromLeftToRight(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i - 1] > a[i]) {
      let sequence = [];
      for (let j = i; j >= 0; --j) {
        sequence = push(sequence, a[j]);
        if (a[j - 1] < a[j]) {
          break;
        }
      }
      if (sequence.length > 2) {
        const subSequences = getArraySequences(sequence);
        for (let k = subSequences.length - 1; k >= 0; --k) {
          ret = push(ret, subSequences[k]);
        }
      }
      if (sequence.length === 2) {
        ret = push(ret, reverse(sequence));
      }
    }
  }

  ret = removeDuplicatedElement(ret);

  let count = 0;

  for (let i = ret.length - 1; i >= 0; --i) {
    count++;
  }

  return count;
}

function test1() {
  const testCase1 = [5, 4, 3, 1, 2]; // 6
  const testCase2 = [4, 1, 3, 2, 5]; // 2
  const testCase3 = [3, 2, 5, 4, 1]; // 4

  console.log(E300FromLeftToRight(testCase1));
  console.log(E300FromLeftToRight(testCase2));
  console.log(E300FromLeftToRight(testCase3));
}

/**
 *
 * @param {Array} a
 */
function E300FromRightToLeft(a) {
  let sequences = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i - 1] < a[i]) {
      let subSequences = [];
      for (let j = i; j >= 0; --j) {
        subSequences = push(subSequences, a[j]);
        if (a[j - 1] > a[j]) {
          break;
        }
      }
      if (subSequences.length > 2) {
        subSequences = getArraySequences(subSequences);
        for (let k = subSequences.length - 1; k >= 0; --k) {
          sequences = push(sequences, subSequences[k]);
        }
      }
      if (subSequences.length === 2) {
        sequences = push(sequences, reverse(subSequences));
      }
    }
  }

  sequences = removeDuplicatedElement(sequences);

  let count = 0;

  for (let i = sequences.length - 1; i >= 0; --i) {
    count++;
  }

  return count;
}

function test2() {
  const testCase1 = [5, 4, 3, 1, 2]; // 1
  const testCase2 = [4, 1, 3, 2, 5]; // 2
  const testCase3 = [3, 2, 5, 4, 1]; // 1
  const testCase4 = [2, 1, 3, 4, 5]; // 6

  console.log(E300FromRightToLeft(testCase1));
  console.log(E300FromRightToLeft(testCase2));
  console.log(E300FromRightToLeft(testCase3));
  console.log(E300FromRightToLeft(testCase4));
}

{
  // test1();
  test2();
}
