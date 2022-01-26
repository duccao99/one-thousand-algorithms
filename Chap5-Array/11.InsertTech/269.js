/**
 * Problem: Let's add an x-value to the incrementing array 
 * and keep it the same increasing monotony of arrays 
 * 
 * Understanding the problem
 * - a = [1,2,3,5,6]
 * - x = 4
 * - result = [1,2,3,4,5,6]
 * 
 * 
 * 
  const a1 = [1,2,3,4,6]; // [1,2,3,4,5,6]
  const x1 = 5 

  const a2 = [1,2,3,4,5]; // [1,2,3,4,5,6]
  const x2 = 6 

  const a3 = [1,2,4,5,6]; // [1,2,3,4,5,6]
  const x3 = 3 

 * 
 * Approach
 * + step 1: get all values which are smaller than x - done
 * + step 2: get step 1 max - done
 * + step 3: traverse input array, get step 2 result index  
 * + step 4: write a function to insert an x-value to a-array at k-position
 * + step 5: use step 4 to insert x to k = step 3 result 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function getArrayValuesSmallerThanX(a, x) {
  const result = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] <= x) {
      result.push(a[i]);
    }
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function getArrayMaxValue(a) {
  let max = Number.NEGATIVE_INFINITY;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] >= max) {
      max = a[i];
    }
  }

  return max;
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function getSuitablePositionToInsert(a, x) {
  const valuesSmallerThanX = getArrayValuesSmallerThanX(a, x);
  const k = getArrayMaxValue(valuesSmallerThanX);
  return k;
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 * @param {Number} k
 */
function insertValueToArrayAtPosition(a, x, k) {
  const result = new Array(a.length + 1);

  if (a.length === 0) {
    result[0] = x;
    return result;
  }

  if (k === 0) {
    result[k] = x;
    for (let i = result.length - 1; i >= 0; --i) {
      result[i] = a[i - 1];
    }
  }

  if (k !== a.length - 1 && k !== 0) {
    result[k] = x;
    for (let i = k - 1; i >= 0; --i) {
      result[i] = a[i];
    }

    for (let i = result.length - 1; i >= k + 1; --i) {
      result[i] = a[i - 1];
    }
  }

  if (k === a.length - 1) {
    result[k] = x;
    result[k + 1] = a[a.length - 1];

    for (let i = result.length - 3; i >= 0; --i) {
      result[i] = a[i];
    }
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function E269(a, x) {
  const k = getSuitablePositionToInsert(a, x);
  const result = insertValueToArrayAtPosition(a, x, k);
  return result;
}

function test1() {
  const a1 = [1, 2, 3, 4, 6]; // [1,2,3,4,5,6]
  const x1 = 5;

  const a2 = [1, 2, 3, 4, 5]; // [1,2,3,4,5,6]
  const x2 = 6;

  const a3 = [1, 2, 4, 5, 6]; // [1,2,3,4,5,6]
  const x3 = 3;

  console.log(E269(a1, x1));
  console.log(E269(a2, x2));
  console.log(E269(a3, x3));
}

{
  test1();
}
