/**
 * ---------0 1 2 3 4
 * - a =   [1,2,3,4,5]
 * ---------0 1 2 3 4
 * - ret = [2,1,3,4,5]
 *
 */

const a = [1, 2, 3, 4, 5];
/**
 *
 * @param {Array} a
 */
function f(a) {
  const ret = new Array(a.length);
  ret[0] = a[1];
  ret[1] = a[0];
  for (let i = ret.length - 1; i >= 2; --i) {
    ret[i] = a[i];
  }
  return ret;
}

console.log(f(a));
