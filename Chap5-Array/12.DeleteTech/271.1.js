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
 * @param {Number} pos
 */
function E271(a, pos) {
  if (pos < 0 || pos > a.length - 1) return a;

  const result = new Array(a.length - 1);

  /**
   * - pos = 0
   * -------0 1 2 3 4----
   * - a = [1,2,3,4,5]
   * ---------0 1 2 3-----
   * - ret = [2,3,4,5]
   */
  if (pos === 0) {
    for (let i = result.length - 1; i >= 0; --i) {
      result[i] = a[i + 1];
    }
  }

  /**
   * - pos = len - 1
   * -------0 1 2 3 4------
   * - a = [1,2,3,4,5]
   * ---------0 1 2 3------
   * - ret = [1,2,3,4]
   */
  if (pos === a.length - 1) {
    for (let i = result.length - 1; i >= 0; --i) {
      result[i] = a[i];
    }
  }

  /**
   * - pos != 0 && pos != len - 1
   * -------0 1 2 3 4------
   * - a = [1,2,3,4,5]
   * - pos = 2
   * ---------0 1 2 3-----
   * - ret = [1,2,4,5]
   *
   */
  if (pos !== 0 && pos !== a.length - 1) {
    for (let i = pos - 1; i >= 0; --i) {
      result[i] = a[i];
    }
    for (let j = result.length - 1; j >= pos; --j) {
      result[j] = a[j + 1];
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

  console.log(E271(a1, k1));
  console.log(E271(a2, k2));
  console.log(E271(a3, k3));
  console.log(E271(a4, k4));
}

{
  test1();
}
