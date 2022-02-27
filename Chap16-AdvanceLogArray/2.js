/**
 * Problem: Write a program to display shift right
 * rotate the array, t-time do once
 *
 * Understanding the problem
 *
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 *
 * ---------0 1 2 3 4
 * - ret = [5,1,2,3,4]
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 */
async function fx(a) {
  let indexNeedToFocus = 0;
  while (1) {
    const userInput = await getUserInputOnConsole("");

    if (userInput === "s") {
      const tTime = 1500;
      function doSomething() {
        a = arrayShiftRightRotate(a);
        indexNeedToFocus++;
        if (indexNeedToFocus > a.length - 1) {
          indexNeedToFocus = 0;
        }
        advanceLogArray(a, indexNeedToFocus);
      }

      awaitTTimeThenDoSomething(tTime, doSomething);
    }

    if (userInput === "e") {
      clearInterval(interval);
      break;
    }
  }
}

async function getUserInputOnConsole(question) {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function promiseGetText() {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  }

  const text = await promiseGetText();

  rl.close();

  return text;
}

let interval = null;

function awaitTTimeThenDoSomething(
  tTime,
  doSomething,
  ...doSomethingParameters
) {
  interval = setInterval(() => {
    doSomething(...doSomethingParameters);
  }, tTime);
}

/**
 *
 * @param {Array} a
 */
function arrayShiftRightRotate(a) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   *
   * ---------0 1 2
   * - ret = [3,1,2]
   */
  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }

  const temporary = a[a.length - 1];

  for (let i = a.length - 1; i >= 1; --i) {
    swap(a, i, i - 1);
  }

  a[0] = temporary;

  return a;
}

/**
 *
 * @param {Array} a
 * @param {Number} indexNeedToFocus
 *
 */
function advanceLogArray(a, indexNeedToFocus) {
  /**
   * 20. Advance console log array tech
   * - a = [1,2,3,4,5]
   * - ret
   * -------Array------
   * i    0 1 2 3 4   |
   * a[i] 1 2 3 4 5   |
   * ------------------
   *
   *
   */

  /**
   *
   * @param {Number} n
   */
  function generateSpace(n) {
    /**
     * - n = 3
     * - ret = "   "
     */
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
  function getNumberDigit(n) {
    let ret = 0;

    while (n !== 0) {
      ret++;
      n = Math.floor(n / 10);
    }

    return ret;
  }

  /**
   *
   * @param {string} s
   */
  function stringRightTrim(s) {
    /**
     * - s = "abc   "
     * - ret = "abc"
     */
    let ret = new Array(s.length);
    for (let i = s.length - 1; i >= 0; --i) {
      ret[i] = s[i];
    }
    while (ret[ret.length - 1] === " ") {
      ret = pop(ret);
    }
    return {
      arrayCharacters: ret,
      string: join(ret, ""),
    };
  }
  /**
   *
   * @param {Array} a
   */
  function pop(a) {
    /**
     * - a = [1,2,3]
     * - ret = [1,2]
     */
    const ret = new Array(a.length - 1);
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    return ret;
  }
  /**
   *
   * @param {Array} a
   * @param {string} key
   */
  function join(a, key) {
    let ret = "";
    for (let i = 0; i <= a.length - 1; ++i) {
      ret += a[i] + key;
    }
    return ret;
  }

  /**
   *
   * @param {Number} n
   */
  function generateMinus(n) {
    let ret = "";

    for (let i = n - 1; i >= 0; --i) {
      ret += "-";
    }

    return ret;
  }

  /**
   *
   * @param {string} aSquareBracketiSquareBracketSpace
   */
  function handleGetSuitableTopBoundary(aSquareBracketiSquareBracketSpace) {
    /**
     * - input =  a[i] = 1 2 3 4 5    |
     * - ret =    --------Array--------
     *
     *
     */
    let arrayString = "Array";
    const minusGenerateNumber = Math.floor(
      aSquareBracketiSquareBracketSpace.length / 2 - arrayString.length / 2
    );
    let minuses = generateMinus(minusGenerateNumber);
    const ret = minuses + arrayString + minuses;

    return ret;
  }
  /**
   *
   * @param {Array} a
   * @param {string} aSquareBracketiSquareBracketSpace
   * @param {Number} indexNeedToFocus
   */
  function handleGetSuitableIndexBar(
    a,
    aSquareBracketiSquareBracketSpace,
    indexNeedToFocus
  ) {
    /**
     * - input: a[i]  1 2 3 4 5   |
     * - ret  : i     0 1 2 3 4   |
     */
    let ret = "i" + generateSpace(4);
    for (let i = 0; i <= a.length - 1; ++i) {
      if (i !== indexNeedToFocus) {
        const spaceForIndex = generateSpace(getNumberDigit(a[i]));
        ret += i + spaceForIndex;
      }

      if (i === indexNeedToFocus) {
        const spaceForIndex = generateSpace(getNumberDigit(a[i]) + 2);
        ret += i + spaceForIndex;
      }
    }

    ret = stringRightTrim(ret).string;

    const spaceBetweenIndexBarAndRightBoundary = generateSpace(
      aSquareBracketiSquareBracketSpace.length - ret.length - 1
    );

    ret += spaceBetweenIndexBarAndRightBoundary + "|";

    return ret;
  }
  /**
   *
   * @param {string} aSquareBracketiSquareBracketSpace
   */
  function handleGetSuitableBottomBoundary(aSquareBracketiSquareBracketSpace) {
    return generateMinus(aSquareBracketiSquareBracketSpace.length);
  }

  let aSquareBracketiSquareBracketSpace = "a[i] ";
  for (let i = 0; i <= a.length - 1; ++i) {
    if (i === indexNeedToFocus) {
      aSquareBracketiSquareBracketSpace += "|" + a[i] + "| ";
    }
    if (i !== indexNeedToFocus) {
      aSquareBracketiSquareBracketSpace += a[i] + " ";
    }
  }

  aSquareBracketiSquareBracketSpace += generateSpace(2) + "|";

  // top boundary
  const topBoundary = handleGetSuitableTopBoundary(
    aSquareBracketiSquareBracketSpace
  );
  console.log(topBoundary);
  // index
  let indexBar = handleGetSuitableIndexBar(
    a,
    aSquareBracketiSquareBracketSpace,
    indexNeedToFocus
  );

  indexBar += generateSpace(1) + "1. Press `s` to run app";

  console.log(indexBar);
  // a[i]
  aSquareBracketiSquareBracketSpace += " 2. Press `e` stop";
  console.log(aSquareBracketiSquareBracketSpace);

  // bottom boundary
  const bottomBoundary = handleGetSuitableBottomBoundary(
    aSquareBracketiSquareBracketSpace
  );

  console.log(bottomBoundary);
}

/**
 *
 * @param {Number} from
 * @param {Number} to
 *
 */
function generateRandomNumber(from, to) {
  /**
   * + math.random() = [0,1) = [0,0.99999]
   * + from = 1
   * + to = 10
   * + ret = [1,10]
   *
   * + math.random() * from = [0,0.999] * 1 = [0,0.99999]
   * + math.random() * to = [0,0.999] * 10 = [0,9.99999]
   * + floor(math.random() * to) = [0,9]
   * + floor(math.random() * to ) + 1 = [1,10]
   *
   */
  return Math.floor(Math.random() * to) + from;
}

/**
 *
 * @param {Number} length
 */
function generateArray(length) {
  const ret = new Array(length);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = generateRandomNumber(0, 100);
  }
  return ret;
}

function test1() {
  const a1 = generateArray(5);
  const a2 = generateArray(6);
  const a3 = generateArray(7);
  const a4 = generateArray(8);
  const a5 = generateArray(9);

  //   advanceLogArray(a1);
  //   advanceLogArray(fx(a1));

  //   advanceLogArray(a2);
  //   advanceLogArray(fx(a2));

  //   advanceLogArray(a3);
  //   advanceLogArray(fx(a3));

  //   advanceLogArray(a4);
  //   advanceLogArray(fx(a4));

  advanceLogArray(a5, 0);
  fx(a5);
}
{
  test1();
}
