/**
 * - problem: insert to array an element at third index position
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * - n = 10
 * ---------0 1 2  3 4 5
 * - ret = [1,2,10,3,4,5]
 *
 * + ret = new Array(a.length + 1)
 * + thirdIndex = 2
 * + i from ret.length - 1 to thirdIndex + 1
 *   + ret[i] = a[i - 1]
 * + ret[thirdIndex] = element
 * + j from thirdIndex - 1 to 0
 *   + ret[j] = a[j]
 *
 *
 */

/**
 *
 * @param {Array} a
 * @param {number} element
 *
 */
function f(a, element) {
  const ret = new Array(a.length + 1);

  const thirdIndex = 2;

  for (let i = ret.length - 1; i >= thirdIndex + 1; i--) {
    ret[i] = a[i - 1];
  }

  ret[thirdIndex] = element;

  for (let j = thirdIndex - 1; j >= 0; --j) {
    ret[j] = a[j];
  }

  return ret;
}

// --------0  1  2  3  4
const a = [1, 2, 3, 4, 5];
const n = 9;
console.log(a);
console.log(f(a, n));
