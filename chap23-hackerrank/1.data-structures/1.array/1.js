/**
 * Problem: Reverse Array
 * + a = [1,2,3]
 * + ret = [3,2,1]
 *
 * -- -----------------
 * -- -----------------
 * + length: 3
 * ---------0 1 2
 * + a   = [1,2,3]
 * ---------0 1 2
 * + ret = [3,2,1]
 *
 * + ret[0] = a[2]
 *   + 2 = 3 - 1 = length - 1 - 0
 * + ret[1] = a[1]
 *   + 1 = 3 - 1 - 1 = length - 1 - 1
 * + ret[2] = a[0]
 *   + 0 = 3 - 1 - 2 = length - 1 - 2
 *
 * + i: 0 -> length - 1
 *   + ret[i] = a[length - 1 - i]
 *
 *
 * + ret length = a length
 * + ret[i]
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
  const length = a.length;
  const ret = new Array(length);

  for (let i = length - 1; i >= 0; --i) {
    ret[i] = a[length - i - 1];
  }

  return ret;
}

const a1 = [1, 2, 3];
const a2 = [1, 4, 3, 2];

console.log(f(a1));
console.log(f(a2));
