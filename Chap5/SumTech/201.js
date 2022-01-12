/**
 * Problem: Sum all positive values in one-dimensional array of number
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 *
 */
function E201(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 0) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [-1, -2]; // []
  const testCase3 = [1, 2]; // []
  const testCase4 = [1, 2, 3, 4, 5]; // []

  console.log(E201(testCase1));
  console.log(E201(testCase2));
  console.log(E201(testCase3));
  console.log(E201(testCase4));
}
