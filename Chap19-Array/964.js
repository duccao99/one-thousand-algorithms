/**
 * - problem: insert to array an element at pos-index position
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * - n = 9
 * - pos = 3
 * ---------0 1 2 3 4 5
 * - ret = [1,2,3,9,4,5]
 *
 * + ret = new Array(a.length + 1)
 * + i from ret.length - 1 to pos + 1
 *   + ret[i] = a[i - 1]
 * + ret[pos] = element
 * + i from pos - 1 to 0
 *   + ret[i] = a[i]
 *
 */

/**
 *
 * @param {Array} a
 * @param {number} element
 *
 */
function f(a, pos, element) {
  const ret = new Array(a.length + 1);

  for (let i = ret.length - 1; i >= pos + 1; --i) {
    ret[i] = a[i - 1];
  }

  ret[pos] = element;

  for (let j = pos - 1; j >= 0; --j) {
    ret[j] = a[j];
  }

  return ret;
}

// --------0  1  2  3  4
const a = [1, 2, 3, 4, 5];
const pos = 3;
const n = 9;
console.log(a);
console.log(f(a, pos, n));
