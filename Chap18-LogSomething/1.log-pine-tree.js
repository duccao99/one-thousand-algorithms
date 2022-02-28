/**
 * Problem: log pine tree as description bellow
 *
 * + input: n
 * + output: pine tree
 *
 * - Example
 * + n = 3
 * + ret
 *     *
 *    * *
 *   * * *
 *
 * + n = 5
 * + ret
 *     *
 *    * *
 *   * * *
 *  * * * *
 * * * * * *
 *
 * Approach
 * + step 1: generate * corresponding when i increasing
 * + step 2: generate " " corresponding when i increasing
 * + step 3: combine step 1 + step 2
 *
 */

/**
 *
 * @param {Number} n
 */
function fx(n) {
  let ret = "";

  for (let i = 1; i <= n; ++i) {
    const asterisk = generateAsterisk(i);
    const previousSpaces = generateSpace(n - i);
    if (i !== n) {
      ret += previousSpaces + asterisk + "\n";
    }
    if (i === n) {
      ret += previousSpaces + asterisk;
    }
  }

  return ret;
}

/**
 *
 * @param {Number} n
 */
function generateSpace(n) {
  let ret = "";

  for (let i = 1; i <= n; ++i) {
    ret += " ";
  }

  return ret;
}

/**
 *
 * @param {Number} n
 */
function generateAsterisk(n) {
  let ret = "";

  for (let i = 1; i <= n; ++i) {
    if (i !== n) {
      ret += "*" + " ";
    }
    if (i === n) {
      ret += "*";
    }
  }

  return ret;
}
{
  for (let i = 1; i <= 20; ++i) {
    console.log(fx(i));
  }
}
