/**
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * ---------0 1 2 3
 * - ret = [2,3,4,5]
 *
 * + i = 0 -> n - 1 - 1
 *   + a[i] = a[i + 1]
 * + a.length--;
 */

/**
 *
 * @param {Array} a
 */
function f(a) {
  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    a[i] = a[i + 1];
  }
  a.length--;
  console.log(a);
}

const a = [1, 2, 3, 4, 5];
f(a);
