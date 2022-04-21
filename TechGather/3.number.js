function linearTraverseNumber() {
  /**
   *
   * @param {Number} n
   */
  function countNumberDigits(n) {
    let ret = 0;

    for (i = n; i !== 0; i = Math.floor(i / 10)) {
      ret++;
    }

    return ret;
  }

  // 1. Number linear traverse
  const n = 123456;
  const length = countNumberDigits(n);

  const blueColorDontKnowKeywordCode = "\x1b[36m";
  const whiteColorDontKnowKeywordCode = "\x1b[0m";

  console.log("", blueColorDontKnowKeywordCode);
  console.log("Number linear traverse");

  for (let i = 0; i < length; ++i) {
    console.log(Math.floor(n / Math.pow(10, length - i - 1)) % 10);
  }
}
function reverseTraverseNumber() {
  // 2. Number reverse traverse
  console.log("", blueColorDontKnowKeywordCode);
  console.log("Number reverse traverse");

  for (let i = 0; i < length; ++i) {
    console.log(Math.floor(n / Math.pow(10, i)) % 10);
  }
}

/**
 *
 * @param {Number} from
 * @param {Number} to
 */
function generateRandomNumber(from, to) {
  /**
   * 3. Generate random number tech
   * - from = 10
   * - to = 30
   * - to - from = 20
   * - ret = [10,30]
   *
   * + math.random() = [0,0.99999]
   * + math.random() * from = [0,9.9999]
   * + math.random() * to = [0,29.9999997]
   * + math.random() * (to-from) = [0,19.9999998]
   * + math.random() * (to-from) + from = [10,29.99999998]
   * + math.floor(math.random()*(to-from)+from) = [10,29]
   * + math.round(math.random()*(to-from)+from) = [10,30]
   *
   *
   *
   */
  return Math.floor(Math.random() * to + from);
}

/**
 *
 * @param {number} n
 */
function cutNumberLastDigit(n) {
  /**
   * 4. cut number last digit
   *
   * - n digits > 1
   * - n = 123
   * - ret = 12
   *
   */
  return Math.floor(n / 10);
}

/**
 *
 * @param {number} n
 */
function cutNumberFirstDigit(n) {
  /**
   * - n = 1234
   * - ret = 234
   *
   * - ret = n % 1000 = n mod 10^3 = n mod 10^(n.length - 1)
   */

  /**
   *
   * @param {number} n
   */
  function getNTotalDigits(n) {
    let ret = 0;

    while (n !== 0) {
      ret = ret + 1;
      n = Math.floor(n / 10);
    }

    return ret;
  }
  return n % 10 ** (getNTotalDigits(n) - 1);
}

{
  for (let i = 0; i <= 30; ++i) {
    const ret = generateRandomNumber(1, 300);
    // console.log(`n = ${ret} - ${cutNumberLastDigit(ret)}`);
    console.log(`n = ${ret} - ${cutNumberFirstDigit(ret)}`);
  }
}
