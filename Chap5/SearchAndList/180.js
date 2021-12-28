/**
 * Problem: List all array values which are less than the absolute value
 * of it's next position element and are greater than the absolute value
 * of it's previous position element
 *
 */

/**
 *
 * @param {Array} a
 */
function E180(a) {
  const ret = [];
  for (let i = 0; i < a.length; ++i) {
    if (Math.abs(a[i - 1]) <= a[i] && a[i] <= Math.abs(a[i + 1])) {
      ret.push(a[i]);
    }
  }
  return ret;
}

{
  const a = [1, 2, 3, 4, 5];
  console.log(E180(a)); // 2 3 4

  const b = [3, 2, 5, 1, 4];
  console.log(E180(b)); // []

  const c = [5, 4, 1, 3, 6];
  console.log(E180(c)); // 3
}
