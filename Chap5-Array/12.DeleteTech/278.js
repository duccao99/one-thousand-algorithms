/**
 * Problem: Remove all duplicate elements and keep one element
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [1,2,3,4,5]
  const testCase2 = [1,1,2,2,3,3,4,4,4,5,5,5,5,5]; // [1,2,3,4,5]
 * 
 * Approach
 * + step 1: write a function to remove array element at position k
 * + step 2: + traverse input array from len - 1 to 0
 *             + traverse from i + 1 to 0
 *               + if a[j] = a[i] then remove a[i] 
 *               + update i
 *         
 * 
 */

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
 */
function E278(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] === a[i]) {
        a = removeArrayElementAtPositionK(a, i);
        i++;
        break;
      }
    }
  }
  return a;
}

/**
 *
 * @param {Array} a
 */
function E278HashTable(a) {
  const hashmap = {};

  for (let i = a.length - 1; i >= 0; --i) {
    hashmap[a[i]] = hashmap[a[i]] || 0;
  }

  const ret = [];

  for (const key in hashmap) {
    ret.push(+key);
  }

  return ret;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase2 = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5]; // [1,2,3,4,5]

  console.log(E278(testCase1));
  console.log(E278(testCase2));
}

function test2() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase2 = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5]; // [1,2,3,4,5]

  console.log(E278HashTable(testCase1));
  console.log(E278HashTable(testCase2));
}

{
  // test1();
  test2();
}
