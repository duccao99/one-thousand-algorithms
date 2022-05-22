/**
 * - problem: remove array first element
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * ---------0 1 2 3
 * - ret = [2,3,4,5]
 *
 *
 * + a = [1,2,3,4,5]
 *              | |
 * + a = [1,2,3,5,4]
 *            |   |
 * + a = [1,2,4,5,3]
 *          |     |
 * + a = [1,3,4,5,2]
 *        |       |
 * + a = [2,3,4,5,1]
 *
 * + a = [2,3,4,5]
 *
 * ->
 * + i from a.length - 1 - 1 to 0
 * + Swap a[i] with a[a.length - 1]
 * + a.length--
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function f(a) {
  /**
   *
   * @param {Array} a
   * @param {number} i
   * @param {number} j
   *
   */
  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }

  for (let i = a.length - 1 - 1; i >= 0; --i) {
    swap(a, i, a.length - 1);
  }

  a.length--;

  return a;
}

const a = [1, 2, 3, 4, 5];
console.log(f(a));
