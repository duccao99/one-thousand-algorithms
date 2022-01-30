/**
 * Problem: List incrementing subsequences in array
 * 
 * 
 * Understanding the problem
 * - Incrementing subsequences
 * + look from the left to right: [1,2], [1,2,3], [1,2,3,4,5]
 * + look from the right to left: [2,1], [3,2,1], [5,4,3,2,1]
 * 
 * 
 * -------0 1 2 3 4----------
 * - a = [1,3,2,5,4]
 * - ret = [[1,3],[2,5]]
 * 
 * + i = 4
 *   + if a[i] < a[i-1], i--
 *   + if a[i] > a[i-1]
 *     + loop j from i to 0
 * 
 *   
 * 
 * 
 * 
  const testCase1 = [1,3,2,5,4]; // [[1,3],[2,5]]
  const testCase2 = [5,3,2,4,1]; // [[2,4]]
  const testCase3 = [3,2,1,4,5]; // [[1,4],[1,4,5],[4,5]]
  const testCase4 = [2,4,1,3,5]; // [[2,4],[1,3],[1,3,5],[3,5]]
  const testCase5 = [4,1,3,2,5]; // [[1,3],[2,5]]
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
 */
function reverse(a) {
  const mid = Math.round(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }
  return a;
}

/**
 *
 * @param {string} s
 */
function toArray(s) {
  /**
   *  - s = '1,4'
   *  - ret = [1,4]
   */
  let countComma = 0;
  let stringNumbers = [];

  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === ",") {
      countComma++;
    }
    if (s[i] !== ",") {
      stringNumbers = push(stringNumbers, s[i]);
    }
  }

  const ret = new Array(countComma + 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = +stringNumbers[i];
  }

  return reverse(ret);
}

/**
 *
 * @param {Array} a
 *
 *
 */
function removeDuplicatedChildArray(a) {
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
function getAllArrayChildArrays(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i; j >= 0; --j) {
      let child = [];
      for (let k = i; k >= j; --k) {
        child = push(child, a[k]);
      }
      child.length >= 2 ? (ret = push(ret, child)) : void 0;
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E295(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i - 1] < a[i]) {
      let sequence = [];
      for (let j = i; j >= 0; --j) {
        if (a[j - 1] > a[j]) {
          sequence = push(sequence, a[j]);
          break;
        }
        sequence = push(sequence, a[j]);
      }

      if (sequence.length > 2) {
        const subSequences = getAllArrayChildArrays(sequence);
        ret = reverse(subSequences);
      }

      if (sequence.length <= 2) {
        ret = push(ret, reverse(sequence));
        ret = reverse(ret);
      }
    }
  }

  return reverse(removeDuplicatedChildArray(ret));
}

function test1() {
  const testCase1 = [1, 3, 2, 5, 4]; // [[1,3],[2,5]]
  const testCase2 = [5, 3, 2, 4, 1]; // [[2,4]]
  const testCase3 = [3, 2, 1, 4, 5]; // [[1,4],[1,4,5],[4,5]]
  const testCase4 = [2, 4, 1, 3, 5]; // [[2,4],[1,3],[1,3,5],[3,5]]
  const testCase5 = [4, 1, 3, 2, 5]; // [[1,3],[2,5]]

  console.log(E295(testCase1));
  console.log(E295(testCase2));
  console.log(E295(testCase3));
  console.log(E295(testCase4));
  console.log(E295(testCase5));
}

{
  test1();
}
