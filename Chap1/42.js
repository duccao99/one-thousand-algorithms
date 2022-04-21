/**
 * Problem: Given positive integer n. Find max k so that
 * + S(k) < n.
 * + S(k) = 1 + 2 + 3 + .. + k
 *
 *
 * Understanding the problem
 * - n = 5
 *   + k = 4
 *   + S(4) = 1 + 2 + 3 + 4 > n
 *
 *   + k = 3
 *   + S(3) = 1 + 2 + 3 > n
 *
 *   + k = 2
 *   + S(3) = 1 + 2 < n
 *
 *   -> ret = 2
 *
 *
 */

/**
 *
 * @param {number} k
 */
function s(k) {
  let ret = 0;

  for (let i = k; i >= 1; --i) {
    ret = ret + i;
  }

  return ret;
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let maxK;

  for (let i = n - 1; i >= 1; --i) {
    const sk = s(i);

    if (sk < n) {
      maxK = i;
      break;
    }
  }

  return maxK;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`n = ${i} - k = ${fx(i)}`);
  }
}
