/**
 * Problem: Remove all elements which are appeared more than once
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,2,3,4,5]; // [1,3,4,5]
  const testCase2 = [1,2,3,4,5]; // [1,2,3,4,5]
  const testCase3 = [1,1,1,2,2,3,3,4,5]; // [4,5]
  * 
 * Approach 1 - array tech - done
 * + step 1: write remove array element at position k function - done
 * + step 2: loop two rounds, find duplicate element, remove
 * 
 * Approach 2 - hash table tech
 * + step 1: save key-value as element - duplicated count
 * + step 2: traverse hashmap,  if duplicated count = 1 then put
 * it to result array
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function javascriptArrayPush(a, e) {
  const ret = new Array(a.length + 1);

  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }

  ret[ret.length - 1] = e;

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} k
 */
function removeArrayElementAtPositionK(a, k) {
  if (k < 0 || k > a.length - 1) return a;

  const ret = new Array(a.length - 1);

  if (k === 0) {
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i + 1];
    }
  }

  if (k === a.length - 1) {
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
  }

  if (k !== 0 && k !== a.length - 1) {
    for (let i = k - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    for (let i = ret.length - 1; i >= k; --i) {
      ret[i] = a[i + 1];
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} y
 */
function removeArrayElementWhichAreEqualToY(a, y) {
  /**
   * - a = [1,2,3,4,5,5,5]
   * - y = 5
   * - ret = [1,2,3,4]
   *
   */

  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] !== y) {
      ret = javascriptArrayPush(ret, a[i]);
    }
  }

  return ret;
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
 * @param {Array} a
 */
function javascriptArrayShift(a) {
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
  let ret = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      ret = javascriptArrayPush(ret, left[0]);
      left = javascriptArrayShift(left);
    }

    if (left[0] >= right[0]) {
      ret = javascriptArrayPush(ret, right[0]);
      right = javascriptArrayShift(right);
    }
  }

  return [...ret, ...left, ...right];
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
function E279ArrayTech(a) {
  const duplicateCounter = [];

  const aMaxValue = getArrayMaxValue(a);

  for (let i = 0; i <= aMaxValue; ++i) {
    duplicateCounter[i] = 0;
  }

  for (let i = a.length - 1; i >= 0; --i) {
    duplicateCounter[a[i]] += 1;
  }

  let duplicateElement = [];

  for (let i = duplicateCounter.length - 1; i >= 0; --i) {
    if (duplicateCounter[i] > 1) {
      duplicateElement = javascriptArrayPush(duplicateElement, i);
    }
  }

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = duplicateElement.length - 1; j >= 0; --j) {
      if (duplicateElement[j] === a[i]) {
        a = removeArrayElementWhichAreEqualToY(a, duplicateElement[j]);
        break;
      }
    }
  }

  return mergeSort(a);
}

/**
 *
 * @param {Array} a
 */
function E279HashTableTech(a) {
  const hashmap = {};

  for (let i = a.length - 1; i >= 0; --i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  let ret = [];

  for (const key in hashmap) {
    if (hashmap[key] === 1) {
      ret = javascriptArrayPush(ret, +key);
    }
  }

  return ret;
}

function test1() {
  const testCase1 = [1, 2, 2, 3, 4, 5]; // [1,3,4,5]
  const testCase2 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase3 = [1, 1, 1, 2, 2, 3, 3, 4, 5]; // [4,5]

  console.log(E279ArrayTech(testCase1));
  console.log(E279ArrayTech(testCase2));
  console.log(E279ArrayTech(testCase3));
}

function test2() {
  const testCase1 = [1, 2, 2, 3, 4, 5]; // [1,3,4,5]
  const testCase2 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase3 = [1, 1, 1, 2, 2, 3, 3, 4, 5]; // [4,5]

  console.log(E279HashTableTech(testCase1));
  console.log(E279HashTableTech(testCase2));
  console.log(E279HashTableTech(testCase3));
}

{
  // test1();
  test2();
}
