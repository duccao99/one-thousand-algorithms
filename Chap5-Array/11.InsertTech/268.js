/**
 * Problem: Let's create an array called b from one-dimensional 
 * array of number a such that b has the property "even-odd"
 * 
 * 
 * Understanding the problem
 * - a = [1,2,3,4,5]
 * - b = [1,0,1,0,1]
 * 
  const testCase1 = [1,2,3,4,5]; // [1,0,1,0,1]
  const testCase2 = [2,4,6,8]; // [0,0,0,0]
  const testCase3 = [1,3,5,7]; // [1,1,1,1]
 * 
 * Approach
 * + step 1: write a function to insert an x-value to a-array at k-position - done 
 * + step 2: write function to check even value - done
 * + step 3: write function to check odd value - done
 * + step 4: traverse input array
 *           + if a[i] was an odd value
 *             + insert to result array value 1
 *           + if a[i] was an even value
 *             + insert to result array value 0
 * 
 */

/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0;
}

/**
 *
 * @param {Number} n
 *
 */
function isEvenNumber(n) {
  return n % 2 === 0;
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
    /**
     * - a = []
     * - x = 6
     * - k =
     */
    result[0] = x;
    return result;
  }

  if (k === 0) {
    /**
     * -------0 1 2 3 4------
     * - a = [1,2,3,4,5]
     * - k = 0
     * - x = 6
     * ---------0 1 2 3 4 5----------
     * - ret = [6,1,2,3,4,5]
     */
    result[k] = x;
    for (let i = result.length - 1; i >= 1; --i) {
      result[i] = a[i - 1];
    }
  }

  if (k !== 0 && k !== a.length - 1) {
    /**
     * -------0 1 2 3 4-----
     * - a = [1,2,3,4,5]
     * - k = 2
     * - x = 6
     * ------------0 1 2 3 4 5-------
     * - result = [1,2,6,3,4,5]
     */
    result[k] = x;

    for (let i = k - 1; i >= 0; --i) {
      result[i] = a[i];
    }

    for (let i = result.length - 1; i >= k + 1; i--) {
      result[i] = a[i - 1];
    }
  }

  if (k === a.length - 1) {
    /**
     * -------0 1 2 3 4--------
     * - a = [1,2,3,4,5]
     * - k = 4
     * - x = 6
     * ------------0 1 2 3 4 5-----
     * - result = [1,2,3,4,6,5]
     */
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
function E268(a) {
  let b = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      b = insertValueToArrayAtPosition(b, 0, 0);
    }
    if (isOddNumber(a[i])) {
      b = insertValueToArrayAtPosition(b, 1, 0);
    }
  }

  return b;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,0,1,0,1]
  const testCase2 = [2, 4, 6, 8]; // [0,0,0,0]
  const testCase3 = [1, 3, 5, 7]; // [1,1,1,1]

  console.log(E268(testCase1));
  console.log(E268(testCase2));
  console.log(E268(testCase3));
}

{
  test1();
}
