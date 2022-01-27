/**
 * Problem: Let's remove all element which have the same value as x
 * 
 * Understanding the problem
 * 
  const a1 = [1,2,3,4,5]; // [2,3,4,5]
  const x1 = 1

  const a2 = [1,1,2,3,4,1,5,1]; // [2,3,4,5]
  const x2 = 1

  const a3 = [1,2,3,4,5,3,5,3,3,1,2,3,4]; // [1,2,4,5,5,1,2,4]
  const x3 = 3

 * 
 * Approach
 * + step 1: write a function to get all element indexes - done
 * which have the same value as x
 * + step 2: write a function to remove array element at position k - done
 * + step 3: traverse input array - done
 *           + traverse indexes array
 *             + match, remove
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Array} ele
 *
 */
function javascriptArrayPush(a, ele) {
  const ret = new Array(a.length + 1);

  ret[ret.length - 1] = ele;

  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function getElementsIndexesWhichHaveTheSameValueAsX(a, x) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === x) {
      ret = javascriptArrayPush(ret, i);
    }
  }

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
 * @param {Array} arr
 * @param {Number} x
 */
function E276(arr, x) {
  let allElementsAsXIndexes = getElementsIndexesWhichHaveTheSameValueAsX(
    arr,
    x
  );

  for (let i = arr.length - 1; i >= 0; --i) {
    for (let j = allElementsAsXIndexes.length - 1; j >= 0; --j) {
      if (allElementsAsXIndexes[j] === i) {
        arr = removeArrayElementAtPositionK(arr, i);
        allElementsAsXIndexes = removeArrayElementAtPositionK(
          allElementsAsXIndexes,
          j
        );
        break;
      }
    }
  }

  return arr;
}

function test1() {
  const a1 = [1, 2, 3, 4, 5]; // [2,3,4,5]
  const x1 = 1;

  const a2 = [1, 1, 2, 3, 4, 1, 5, 1]; // [2,3,4,5]
  const x2 = 1;

  const a3 = [1, 2, 3, 4, 5, 3, 5, 3, 3, 1, 2, 3, 4]; // [1,2,4,5,5,1,2,4]
  const x3 = 3;

  console.log(E276(a1, x1));
  console.log(E276(a2, x2));
  console.log(E276(a3, x3));
}

{
  test1();
}
