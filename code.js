/**
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 *
 * ---------0 1 2 3 4
 * - ret = [2,3,4,5,1]
 *
 * + temporary = a[0]
 * + move a[i>0] to a[i-1]
 * + a[a.length - 1] = temporary
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
  const temporary = a[0];

  for (let i = 0; i <= a.length - 1; ++i) {
    a[i] = a[i + 1];
  }

  a[a.length - 1] = temporary;

  return a;
}

const a = [1, 2, 3, 4, 5];
console.log(f(a));
