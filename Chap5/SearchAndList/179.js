/**
 * Problem: List all array values that satisfy the condition that is
 * greater than their absolute value which immediately following it
 */

/**
 *
 * @param {Array} a
 */
function E179(a) {
  const ret = [];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] > Math.abs(a[i + 1])) {
      ret.push(a[i]);
    }
  }
  return ret;
}

{
  const a = [1, 3, 5, 2, 4];
  console.log(E179(a)); // 5
}
