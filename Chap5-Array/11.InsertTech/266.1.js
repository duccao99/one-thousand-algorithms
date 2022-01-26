/**
 * Problem: insert an element with value x to the array at position k
 * 
 * Understanding the problem
 * -------0 1 2 3 4--------
 * - a = [1,2,3,4,6]
 * - x = 5
 * - k = 4
 * 
 * - k = 2
 * ------------0 1 2 3 4 5-----------
 * - result = [1,2,5,3,4,6]
 * + result[k] = x
 * + traverse i from k to 0
 *   + fill a to ret
 * + traverse i from len - 1 to k
 *   + fill a to ret 
 * 
 * -----------0 1 2 3 4 5-----------
 * - result = [1,2,3,4,5,6] 
 * 
 * + k = 0
 *   + ret[0] = x 
 *   + traverse i = len - 1 to 1 
 *     + fill input array to ret
 * + k = i
 *   + 
 * + k = len - 1 
 *   + ret[ret.len-1-1] = x
 *   + ret[ret.len-1] = a[a.len-1]
 *   + traverse i from len - 3 to 0
 *     + fill a element except a[a.len - 1] to result
 * 
 * 
  const a1 = [1,2,3,4,6]; // [1,2,3,4,5,6]
  const x1 = 5
  const k1 = 4

  const a2 = [1,2,4,5];  // [1,2,3,4,5]
  const x2 = 3
  const k2 = 2

 */

/**
 *
 * @param {Array} a
 * @param {Number} x
 * @param {Number} k
 */
function E266(a, x, k) {
  const result = new Array(a.length + 1);

  if (k === 0) {
    result[k] = x;
    for (let i = a.length - 1; i >= 0; --i) {
      result[i + 1] = a[i];
    }
  }

  if (k === a.length - 1) {
    result[k] = x;
    result[k + 1] = a[a.length - 1];
    for (let i = result.length - 3; i >= 0; --i) {
      /**
       * -------0 1 2 3 4-------
       * - a = [1,2,3,4,5]
       * - k = 4
       * - x = 6
       * ------------0 1 2 3 4 5-------
       * - result = [1,2,3,4,6,5]
       *
       */

      result[i] = a[i];
    }
  }
  if (k !== 0 && k !== a.length - 1) {
    /**
     * -------0 1 2 3 4--------
     * - a = [1,2,3,4,5]
     * - x = 7
     * - k = 2
     * ------------0 1 2 3 4 5----------
     * - result = [1,2,7,3,4,5]
     *
     */
    result[k] = x;
    for (let i = k - 1; i >= 0; --i) {
      result[i] = a[i];
    }

    for (let i = result.length - 1; i >= k + 1; --i) {
      result[i] = a[i - 1];
    }
  }
  return result;
}

function test1() {
  const a1 = [1, 2, 3, 4, 6]; // [1,2,3,4,5,6]
  const x1 = 5;
  const k1 = 4;

  //----------0  1  2  3-----------
  const a2 = [1, 2, 4, 5]; // [1,2,3,4,5]
  const x2 = 3;
  const k2 = 2;

  console.log(E266(a1, x1, k1));
  console.log(E266(a2, x2, k2));
}

{
  test1();
}
