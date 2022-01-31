/**
 * Problem: List all incrementing child arrays which contains 
 * the maximum value in an array of number
 * 
 * Understanding the problem
 * - Incrementing array
 * + look from the left to the right: [1,2], [1,2,3], [1,2,3,4]
 * + look from the right to the left: [2,1], [3,2,1], [4,3,2,1]
 * 
 * ---------0 1 2 3 4-------------
 * - a =   [1,3,5,2,4]
 * - ret = [[3,5],[1,3,5]]
 * - max = 5
 * 
 * + i = 4
 *   + a[i] != 5, i--
 * + i = 3
 *   + a[i] != 5, i--
 * + i = 2
 *   + a[i] = 5 = max
 *   + for j from i to 0
 *     + break when a[j-1] > a[j]
 * 
 * 
 * 
 * 
  const testCase1 = [1, 3, 5, 2, 4]; // [[3,5],[1,3,5]]
  const testCase2 = [2, 3, 5, 1, 4]; // [[3,5],[2,3,5]]
  const testCase3 = [3, 4, 1, 2, 5]; // [[2,5],[1,2,5]]
  const testCase4 = [4, 1, 3, 5, 2]; // [[3,5],[1,3,5]]
  const testCase5 = [5, 1, 2, 4, 3]; // []
 * 
 */
/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const mid = Math.round(a.length / 2);
  const right = [...a];
  const left = right.splice(0, mid);
  return merging(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  let containers = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      containers = push(containers, left[0]);
      left = shift(left);
    }
    if (left[0] >= right[0]) {
      containers = push(containers, right[0]);
      right = shift(right);
    }
  }

  let ret = [];

  for (let i = containers.length - 1; i >= 0; --i) {
    ret = push(ret, containers[containers.length - i - 1]);
  }
  for (let j = left.length - 1; j >= 0; --j) {
    ret = push(ret, left[left.length - j - 1]);
  }
  for (let k = right.length - 1; k >= 0; --k) {
    ret = push(ret, right[right.length - k - 1]);
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function shift(a) {
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) ret[i] = a[i];
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
function getMax(a) {
  return mergeSort(a)[a.length - 1];
}

/**
 *
 * @param {Array} a
 */
function getArraySequences(a, max) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i; j >= 0; --j) {
      let sequence = [];
      let flag = false;

      for (let k = i; k >= j; --k) {
        sequence = push(sequence, a[k]);
        if (a[k] === max) {
          flag = true;
        }
      }

      if (flag === true) {
        sequence.length >= 2 ? (ret = push(ret, sequence)) : void 0;
      }
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E296(a) {
  const max = getMax(a);

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === max) {
      let increasingSequence = [];
      for (let j = i; j >= 0; --j) {
        increasingSequence = push(increasingSequence, a[j]);
        if (a[j - 1] > a[j]) {
          break;
        }
      }
      ret = getArraySequences(increasingSequence, max);
    }
  }

  return reverse(ret);
}

function test1() {
  const testCase1 = [1, 3, 5, 2, 4]; // [[3,5],[1,3,5]]
  const testCase2 = [2, 3, 5, 1, 4]; // [[3,5],[2,3,5]]
  const testCase3 = [3, 4, 1, 2, 5]; // [[2,5],[1,2,5]]
  const testCase4 = [4, 1, 3, 5, 2]; // [[3,5],[1,3,5]]
  const testCase5 = [5, 1, 2, 4, 3]; // []

  console.log(E296(testCase1));
  console.log(E296(testCase2));
  console.log(E296(testCase3));
  console.log(E296(testCase4));
  console.log(E296(testCase5));
}

{
  test1();
}
