/**
 * - problem: remove array second element
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * ---------0 1 2 3
 * - ret = [1,3,4,5]
 *
 * + i from 1 to a.length - 1 - 1
 *   + a[i] = a[i + 1]
 * + a.length--
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function f(a) {
  for (let i = 1; i <= a.length - 1 - 1; ++i) {
    a[i] = a[i + 1];
  }

  a.length--;

  return a;
}

const a = [1, 2, 3, 4, 5];
console.log(a);
console.log(f(a));
