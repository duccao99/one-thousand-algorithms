/**
 *
 * @param {Number} n
 */
function printPineTree(n) {
  /**
   * - n = 3
   * - ret
   *      *
   *     * *
   *    * * *
   */
  let ret = "";

  for (let i = 1; i <= n; ++i) {
    const askterisk = generateAsterisk(i);
    const previousSpaces = generateSpace(n - i);
    if (i !== n) {
      ret += previousSpaces + askterisk + "\n";
    }
    if (i === n) {
      ret += previousSpaces + askterisk;
    }
  }

  console.log(ret);
}

/**
 *
 * @param {Number} n
 */
function generateAsterisk(n) {
  let ret = "";

  for (let i = n - 1; i >= 0; --i) {
    if (i !== 0) {
      ret += "*" + " ";
    }
    if (i === 0) {
      ret += "*";
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

  for (let i = n - 1; i >= 0; --i) {
    ret += " ";
  }

  return ret;
}

for (let i = 1; i <= 10; ++i) {
  printPineTree(i);
}
