/**
 * Problem: Given an array number, write a function which list all
 * array values that have at least one opposite value neighborhood
 *
 * Idea:
 * 1. a * b < 0 ? opposite : same
 * 2. get a, b binary bits,
 * first bit = 1 then negative number, 0 then positive number
 *
 */

/**
 *
 * @param {Number} a
 * @param {Number} b
 */
function isOpposite(a, b) {
  if (a * b < 0) return true;
  return false;
}

/**
 *
 * @param {Array} a
 */
function E182(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (isOpposite(a[i], a[i - 1]) || isOpposite(a[i], a[i + 1])) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const a = [1, 2, -1, 3, 4];
  const b = [1, 2, 3, 4, 5];
  const c = [1, 2, -3, 4, -5];
  console.log(E182(a)); // 2 -1 3
  console.log(E182(b)); // []
  console.log(E182(c)); // 2 -3 4 -5
}
