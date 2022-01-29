/**
 * Problem: Transform the array by replacing the largest values 
 * with the smallest values and vice versa
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [5,2,3,4,1]
  const testCase2 = [1,1,2,3,4,5,5]; // [5,5,2,3,4,1,1]
  const testCase3 = [1,2,3,1,4,5,5]; // [5,2,3,5,4,1,1]
  */

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
function shift(a) {
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }
  return ret;
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  let container = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      container = push(container, left[0]);
      left = shift(left);
    }
    if (left[0] >= right[0]) {
      container = push(container, right[0]);
      right = shift(right);
    }
  }

  let ret = [];

  for (let i = container.length - 1; i >= 0; --i) {
    ret = push(ret, container[container.length - i - 1]);
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
function getArrayMaxValue(a) {
  return mergeSort(a)[a.length - 1];
}

/**
 *
 * @param {Array} a
 */
function getArrayMinValue(a) {
  return mergeSort(a)[0];
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
function E291(a) {
  let maxs = [];
  let mins = [];
  const max = getArrayMaxValue(a);
  const min = getArrayMinValue(a);

  for (let i = a.length - 1; i >= 0; --i) {
    if (max === a[i]) {
      maxs = push(maxs, i);
    }
    if (min === a[i]) {
      mins = push(mins, i);
    }
  }

  if (maxs.length !== mins.length) return a;

  let indexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === max) {
      indexes = push(indexes, i);
    }
  }

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === min) {
      indexes = push(indexes, i);
    }
  }

  const breakPos = Math.floor(indexes.length / 2);

  for (let i = indexes.length - 1; i >= breakPos; --i) {
    swap(a, indexes[i], indexes[indexes.length - i - 1]);
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [5,2,3,4,1]
  const testCase2 = [1, 1, 2, 3, 4, 5, 5]; // [5,5,2,3,4,1,1]
  const testCase3 = [1, 2, 3, 1, 4, 5, 5]; // [5,2,3,5,4,1,1]

  console.log(E291(testCase1));
  console.log(E291(testCase2));
  console.log(E291(testCase3));
}

{
  test1();
}
