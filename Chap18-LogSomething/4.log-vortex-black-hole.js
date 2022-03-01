/**
 * Problem: log a vortext black hole as description bellow
 *
 * + input: size
 * + output: a vortext black hole
 *
 * - Example
 * + size: 4
 * + ret
 *
 *     *  *   *
 *      *  *   *
 *       *  *  *
 *        * * *
 * *  *  *     *  *  *
 *        * * *
 *      *   *   *
 *     *    *    *
 *      *     *    *
 */

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
/**
 *
 * @param {Number} n
 */
function generateHorizonAsterisk(n) {
  let ret = "";

  for (let i = n - 1; i >= 0; --i) {
    if (i === 0) {
      ret += "*";
    }
    if (i !== 0) {
      ret += "*" + " ";
    }
  }

  return ret;
}

/**
 *
 * @param {Number} rabbitSize
 */
function generateRabbit(rabbitSize) {
  /**
   * - rabbitSize = 2
   * - ret
   *    oo
   *    oo
   *
   * - rabbitSize = 3
   *    ooo
   *    ooo
   *    ooo
   *
   */
  let ret = "";

  for (let i = rabbitSize - 1; i >= 0; --i) {
    let rabbitPart = "";
    for (let j = rabbitSize - 1; j >= 0; --j) {
      rabbitPart += "o";
    }
    if (i !== 0) {
      ret += rabbitPart + "\n";
    }
    if (i === 0) {
      ret += rabbitPart;
    }
  }

  return ret;
}

function fx(screenWidth, screenHeight, rabbitSize, numberOfCarrot) {
  let screenTopBar = generateHorizonAsterisk(screenWidth) + "\n";
  let screenBottomBar = generateHorizonAsterisk(screenWidth);
  let screenMiddle = "";
  let ret = "";
  let carrot = "x";
  let rabbit = generateRabbit(rabbitSize);

  return rabbit;
}

{
  const screenWidth = 9;
  const screenHeight = 5;
  const rabbitSize = 2;
  const numberOfCarrot = 3;

  console.log(fx(screenWidth, screenHeight, rabbitSize, numberOfCarrot));
}
