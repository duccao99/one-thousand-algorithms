/**
 * Problem: log empty rectangle as description bellow
 *
 * + input: width,height
 * + output: rectangle
 *
 * - Example
 * + width = 3
 * + height = 5
 *
 * + ret
 *
 *    * * *
 *    *   *
 *    *   *
 *    *   *
 *    * * *
 *
 *
 * Approach
 * + step 1: generate * corresponding width and height
 * + step 2: generate " "
 * + step 3: combine step 1 + step 2
 *
 */
/**
 *
 * @param {Numbern}  n
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
 * @param {Numbern}  n
 */
function generateVerticalAsterisk(n) {
  /**
   * - n = 5
   * - ret
   *   *
   *   *
   *   *
   *   *
   *   *
   */
  let ret = "";

  for (let i = n - 1; i >= 0; --i) {
    if (i !== 0) {
      ret += "*\n";
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
 * @param {Number} width
 * @param {Number} height
 */
function fx(width, height) {
  let topBar = "";
  let bottomBar = "";
  let leftBar = "";
  let rightBar = "";
  let ret = "";

  topBar = generateAsterisk(width) + "\n";
  bottomBar = generateAsterisk(width);

  let middleBar = "";
  for (let j = height - 1 - 1; j >= 0; --j) {
    for (let i = width - 1 + width - 1; i >= 0; --i) {
      if (i === 0 || i === width - 1 + width - 1) {
        middleBar += "*";
      }
      if (i !== 0 && i !== width - 1 + width - 1) {
        middleBar += " ";
      }
    }
    middleBar += "\n";
  }

  leftBar = generateVerticalAsterisk(height - 1 - 1);
  rightBar = generateVerticalAsterisk(height - 1 - 1);

  ret += topBar + middleBar + bottomBar;
  return ret;
}

function generateRandomNumber(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

{
  const width = 9;
  const height = 5;
  const a = 1;
  const b = 10;
  for (let i = 1; i <= 10; ++i) {
    console.log(fx(generateRandomNumber(a, b), generateRandomNumber(a, b)));
  }
}
