/**
 * Problem: Given an array number, write a function which list all
 * array values that have at least one opposite value neighborhood
 *
 * Idea:
 * 1. a * b < 0 ? opposite : same
 * 2. get a, b binary bits,
 * + first bit = 1 then negative number, 0 then positive number
 * + a's 1st bit = 1 && b's 1st bit = 0 ? opposite : same
 * + a's 1st bit = 0 && b's 1st bit = 1 ? opposite : same
 *
 */

/**
 *
 * @param {Number} a
 * @param {Number} b
 */
function isOpposite(a, b) {
  const a1stBit = +decimalToBinary(a)[0];
  const b1stBit = +decimalToBinary(b)[0];

  if ((a1stBit === 1 && b1stBit === 0) || (a1stBit === 0 && b1stBit === 1))
    return true;
  return false;
}

/**
 *
 * @param {Number} n
 */
function decimalToBinary(n) {
  return (n >>> 0).toString(2).length <= 3
    ? "000000" + (n >>> 0).toString(2)
    : (n >>> 0).toString(2);
}

/**
 *
 * @param {Array} a
 */
function E182(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (i === 0) {
      if (isOpposite(a[i], a[i + 1])) {
        ret.push(a[i]);
      }
    }

    if (i === a.length - 1) {
      if (isOpposite(a[i], a[i - 1])) {
        ret.push(a[i]);
      }
    }

    if (i !== a.length - 1 && i !== 0) {
      if (isOpposite(a[i], a[i - 1]) || isOpposite(a[i], a[i + 1])) {
        ret.push(a[i]);
      }
    }
  }

  return ret;
}

{
  const a = [1, 2, -1, 3, 4];
  const b = [1, 2, 3, 4, 5];
  const c = [1, 2, -3, 4, -5, 109812312231232];
  console.log(E182(a)); // 2 -1 3
  console.log(E182(b)); // []
  console.log(E182(c)); // 2 -3 4 -5
}
