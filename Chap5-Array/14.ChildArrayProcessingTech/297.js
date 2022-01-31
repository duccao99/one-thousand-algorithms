/**
 * Problem: Calculate the summation of each sequences in 
 * array of number
 * 
 * Understanding the problem
 * - a = [1,3,5,2,4]
 * - increasing sequences = [[1,3],[1,3,5],[3,5],[2,4]]
 * - ret = [[4],[9],[8],[6]]
 * 
 * - a = [2,3,5,1,4]
 * - sequences = [[2,3],[2,3,5],[3,5],[1,4]]
  const testCase1 = [1,3,5,2,4]; // [[4],[9],[8],[6]]
  const testCase2 = [2,3,5,1,4]; // [[5],[10],[8],[5]]
  const testCase3 = [3,5,2,4,1]; // [[8],[6]]
  const testCase4 = [4,1,5,2,3]; // [[6],[5]]
  const testCase5 = [5,1,3,2,4]; // [[4],[6]]
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
      let sequences = [];
      for (let k = i; k >= j; --k) {
        sequences = push(sequences, a[k]);
      }
      sequences.length >= 2 ? (ret = push(ret, sequences)) : void 0;
    }
  }

  return ret;
}

/**
 *
 * @param {string} s
 */
function toArray(s) {
  /**
   * - s = '1,3'
   * - ret = [1,3]
   */
  let ret = [];
  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] !== ",") {
      ret = push(ret, +s[i]);
    }
  }
  return reverse(ret);
}

/**
 *
 * @param {Array} a
 */
function removeDuplicatedElement(a) {
  const hashmap = {};
  for (let i = a.length - 1; i >= 0; --i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }
  let ret = [];
  for (const key in hashmap) {
    ret = push(ret, toArray(key));
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function E297(a) {
  let ret = [];

  let contaners = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i - 1] < a[i]) {
      let increaseSequence = [];
      for (let j = i; j >= 0; --j) {
        increaseSequence = push(increaseSequence, a[j]);
        if (a[j - 1] > a[j]) {
          break;
        }
      }
      increaseSequence = getArraySequences(increaseSequence);
      for (let k = increaseSequence.length - 1; k >= 0; --k) {
        contaners = push(contaners, increaseSequence[k]);
      }
    }
  }
  contaners = removeDuplicatedElement(contaners);
  for (let i = contaners.length - 1; i >= 0; --i) {
    let summation = 0;
    for (let j = contaners[i].length - 1; j >= 0; --j) {
      summation += contaners[i][j];
    }
    ret = push(ret, [summation]);
  }

  return reverse(ret);
}

function test1() {
  const testCase1 = [1, 3, 5, 2, 4]; // [[4],[9],[8],[6]]
  const testCase2 = [2, 3, 5, 1, 4]; // [[5],[10],[8],[5]]
  const testCase3 = [3, 5, 2, 4, 1]; // [[8],[6]]
  const testCase4 = [4, 1, 5, 2, 3]; // [[6],[5]]
  const testCase5 = [5, 1, 3, 2, 4]; // [[4],[6]]

  console.log(E297(testCase1));
  console.log(E297(testCase2));
  console.log(E297(testCase3));
  console.log(E297(testCase4));
  console.log(E297(testCase5));
}

{
  test1();
}
