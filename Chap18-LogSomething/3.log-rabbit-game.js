/**
 * Problem: log rabbit game as description bellow
 *
 * + input: screen width, sceen height,
 *   rabbit size, number of fruit
 * + output: a rabbit game
 *
 * - Example
 * + screen width = 9
 * + screen height = 5
 * + rabbit size: 2
 * + number of carrot: 3
 *
 * + ret
 *   * * * * * * * * *
 *   *   oo          *
 *   *   oo     x    *
 *   *               *
 *   * * * * * * * * *
 *
 * Approach
 * + screen like matrix
 * + log rabbit like log at matrix coordinate
 * -> Use matrix data structure to solve this problem
 *
 *
 *   - matrix
 *   * * * * * * * * * - m[0]
 *   *   oo-m[1][2]  * - m[1]
 *   *   oo     x    * - m[2]
 *   *               * - m[3]
 *   * * * * * * * * * - m[4]
 *
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
 * @param {Number} size
 */
function generateArrayRabbitMeatPiece(size) {
  let ret = new Array(size * 2);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = "o";
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function pop(a) {
  let ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i];
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
  console.log(generateArrayRabbitMeatPiece(rabbitSize));
}
