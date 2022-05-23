/**
 * - problem: remove array at pos-index element
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * - pos = 3
 * ---------0 1 2 3
 * - ret = [1,2,3,5]
 *
 *
 */

/**
 *
 * @param {Array} a
 * @param {number} pos
 *
 */
function f(a, pos) {
  for (let i = pos; i <= a.length - 1 - 1; ++i) {
    a[i] = a[i + 1];
  }

  a.length--;

  return a;
}
// --------0  1  2  3  4
const a = [1, 2, 3, 4, 5];
const pos = 2;
console.log(a);
console.log(f(a, pos));

console.log("");

const b = [1, 2, 3, 4, 5];
console.log(b);
console.log(f(b, b.length - 1));
