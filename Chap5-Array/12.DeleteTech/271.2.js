/**
 * Problem: Remove an array element which has the k index  
 * 
 * Understanding the problem
 * - k = 0 
 * + a = [1,2,3,4,5]
 * + result = [2,3,4,5]
 * 
  const a1 = [1,2,3,4,5]; // [2,3,4,5]
  const k1 = 0

  const a2 = [1,2,3,4,5]; // [1,3,4,5]
  const k2 = 1

  const a3 = [1,2,3,4,5]; // [1,2,4,5]
  const k3 = 2

  const a4 = [1,2,3,4,5]; // [1,2,3,4]
  const k4 = 4
 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Number} k
 */
function E271(a, k) {
  if (k < 0 || k > a.length - 1) return a;

  const result = new Array(a.length - 1);

  if (k === 0) {
    /**
     * -------0 1 2 3 4-----
     * - a = [1,2,3,4,5]
     * - k = 0
     * ---------0 1 2 3-----
     * - ret = [2,3,4,5]
     */
    for (let i = result.length - 1; i >= 0; --i) {
      result[i] = a[i + 1];
    }
  }

  if (k === a.length - 1) {
    /**
     * -------0 1 2 3 4-----
     * - a = [1,2,3,4,5]
     * - k = 4
     * ---------0 1 2 3-----
     * - ret = [1,2,3,4]
     */
    for (let i = result.length - 1; i >= 0; --i) {
      result[i] = a[i];
    }
  }

  if (k !== 0 && k !== a.length - 1) {
    /**
     * -------0 1 2 3 4-------
     * - a = [1,2,3,4,5]
     * - k = 2
     * ---------0 1 2 3-------
     * - ret = [1,2,4,5]
     *
     */
    for (let i = k - 1; i >= 0; --i) {
      result[i] = a[i];
    }
    for (let i = result.length - 1; i >= k; --i) {
      result[i] = a[i + 1];
    }
  }

  return result;
}

function test1() {
  const a1 = [1, 2, 3, 4, 5]; // [2,3,4,5]
  const k1 = 0;

  const a2 = [1, 2, 3, 4, 5]; // [1,3,4,5]
  const k2 = 1;

  const a3 = [1, 2, 3, 4, 5]; // [1,2,4,5]
  const k3 = 2;

  const a4 = [1, 2, 3, 4, 5]; // [1,2,3,4]
  const k4 = 4;

  const a5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // [0,1,2,3,5,6,7,8,9]
  const k5 = 4;

  console.log(E271(a1, k1));
  console.log(E271(a2, k2));
  console.log(E271(a3, k3));
  console.log(E271(a4, k4));
  console.log(E271(a5, k5));

  for (let i = 9; i >= 0; --i) {
    console.log(`${i}: ${E271(a5, i)}`);
  }
}

{
  test1();
}
