/**
 * Problem: List all array sequences which have positive elements
 * and have the length number is greater than 2
 * 
 * Understanding the problem
 * ----------0 1 2 3  4 5 6 ------
 * - a =   [-1,1,2,3,-4,4,5]
 * - ret = [[1,2],[1,2,3],[2,3],[4,5]]
 * 
  const testCase1 = [-1,1,2,3,-4,4,5]; // [[1,2],[1,2,3],[2,3],[4,5]]
  const testCase2 = [1,2,3,-1,-2,4,-3,5]; // [[1,2],[1,2,3],[2,3]]
  const testCase3 = [4,3,1,2,5,-1,-2]; // [[4,3],[4,3,1],[4,3,1,2],[4,3,1,2,5]
  // ,[3,1],[3,1,2],[3,1,2,5],[1,2],[1,2,5],[2,5]]
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
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n >= 0;
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
   * - key = '1,2'
   * - ret = [1,2]
   */
  let ret = [];
  for (let i = key.length - 1; i >= 0; --i) {
    if (key[i] !== ",") {
      ret = push(ret, +key[i]);
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
function E299(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPositiveNumber(a[i])) {
      let sequence = [];
      for (let j = i; j >= 0; --j) {
        if (!isPositiveNumber(a[j])) {
          break;
        }
        sequence = push(sequence, a[j]);
      }
      if (sequence.length > 2) {
        sequence = getArraySequences(sequence);
        for (let k = sequence.length - 1; k >= 0; --k) {
          ret = push(ret, sequence[k]);
        }
      }
      if (sequence.length === 2) {
        ret = push(ret, reverse(sequence));
      }
    }
  }

  return removeDuplicatedElement(ret);
}

function test1() {
  const testCase1 = [-1, 1, 2, 3, -4, 4, 5]; // [[1,2],[1,2,3],[2,3],[4,5]]
  const testCase2 = [1, 2, 3, -1, -2, 4, -3, 5]; // [[1,2],[1,2,3],[2,3]]
  const testCase3 = [4, 3, 1, 2, 5, -1, -2]; // [[4,3],[4,3,1],[4,3,1,2],
  // [4,3,1,2,5] ,[3,1],[3,1,2],[3,1,2,5],[1,2],[1,2,5],[2,5]]

  console.log(E299(testCase1));
  console.log(E299(testCase2));
  console.log(E299(testCase3));
}

{
  test1();
}
