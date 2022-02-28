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
  return Math.round(Math.random() * (to - from) + from);
}

{
  for (let i = 0; i <= 30; ++i) {
    const ret = generateRandomNumber(10, 30);
    if (ret === 10) {
      console.log(ret);
    }
    if (ret === 30) {
      console.log(ret);
    }
  }
}
