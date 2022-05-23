/**
 * - problem: insert to array an element at second index position
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * - n = 10
 * ---------0 1  2 3 4 5
 * - ret = [1,10,2,3,4,5]
 *
 * + ret = new Array(a.length + 1)
 * + secondIndex = 1;
 * + i from ret.length - 1 to secondIndex + 1
 *   + ret[i] = a[i - 1]
 * + ret[secondIndex] = element
 * + ret[0] = a[0]
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

  const secondIndex = 1;

  for (let i = ret.length - 1; i >= secondIndex + 1; --i) {
    ret[i] = a[i - 1];
  }

  ret[secondIndex] = element;

  ret[0] = a[0];

  return ret;
}
// --------0  1  2  3  4
const a = [1, 2, 3, 4, 5];
const n = 10;
console.log(a);
console.log(f(a, n));
