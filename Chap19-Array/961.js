/**
 * - problem: insert to array an element at first index position
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * - n = 10
 * ---------0  1 2 3 4 5
 * - ret = [10,1,2,3,4,5]
 *
 * + ret = new Array(a.length + 1)
 * + i from ret.length - 1 to 1
 *   + ret[i] = a[i - 1]
 * + ret[0] = element
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
  let ret = new Array(a.length + 1);

  for (let i = ret.length - 1; i >= 1; --i) {
    ret[i] = a[i - 1];
  }

  ret[0] = element;

  return ret;
}
// --------0  1  2  3  4
const a = [1, 2, 3, 4, 5];
const n = 10;
console.log(a);
console.log(f(a, n));
