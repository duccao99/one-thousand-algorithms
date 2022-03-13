function arrayTraverseLinear() {
  // 1. Array linear traverse
  console.log(`Array linear traverse`);
  const s = [1, 2, 3, 4, 5];
  for (let i = 0; i < s.length; ++i) {
    console.log(s[i]);
  }
}

function arrayReverseTraverse() {
  // 2. Array reverse traverse
  console.log(`Array reverse traverse`);
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i]);
  }
}

function useArrayIndexAsElement() {
  // 3. Use array index as element

  const a = [1, 2, 3, 4, 3, 2, 5, 3, 2, 1, 5, 4]; // []
  const aMax = 5;
  const indexAsElement = [];

  for (let i = 0; i <= aMax; ++i) {
    indexAsElement.push(0);
  }

  for (let i = 0; i < a.length; ++i) {
    indexAsElement[a[i]] += 1;
  }

  console.log(indexAsElement);
}

function arrayLoopBetterWay() {
  // 3. array Loop Better Way

  const a = [1, 2, 3, 4, 5];
  const aLength = a.length;

  // a.length will not be calculated each loop
  for (let i = 0; i < aLength; ++i) {}
}

function arrayLoopMoreBetterWay() {
  // 4. array Loop more better Way
  const a = [1, 2, 3, 4, 5];

  // because we have to write const aLength = a.length
  // write this way is better
  // a.length is still be calculated once time
  for (let i = a.length; i >= 0; --i) {}
}

function traverseToMidCompareTwoSides() {
  // 5. traverse to mid, compare two sides
  const a = [1, 2, 3, 2, 1];

  const mid = Math.round(a.length / 2);
  const aLength = a.length;

  for (let i = aLength - 1; i >= mid; --i) {
    if (a[i] === a[aLength - i - 1]) {
      // do something
    }
  }
}

function loopWithoutIncreaseIndex() {
  // 6. loop without increase i (i++)

  let n = 10;

  let count = 1;
  for (let i = 0; i < n; ) {
    console.log(`${i} - ${count}`);
    n--;
    count++;
  }
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function removeArrayElement(a, pos) {
  // 7. remove array element at position

  /**
   * - a = [1,2,3,4,5,6,7,8,9]
   * - pos = 1
   * - result: 1 3 4 5 6 7 8 9
   *
   *
   */
  if (pos === 0) a.shift();
  if (pos === a.length - 1) a.pop();

  for (let i = pos; i < a.length; ++i) {
    a[i] = a[i + 1];
  }

  a.length--;

  return a;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function addElementToArrayAtFirstPosition(a, e) {
  // 8. Add an element to an array at first position

  /**
   * - a = [1,2,3,4,5]
   * - e = 0
   * - result: [0,1,2,3,4,5]
   */
  return [e, ...a];
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function addElementToArrayAtLastPosition(a, e) {
  // 9. Add an element to an array at first position

  /**
   * - a = [1,2,3,4,5]
   * - e = 0
   * - result: [1,2,3,4,5,0]
   */
  return [...a, e];
}

/**
 *
 * @param {Array} a
 */
function reverseArray(a) {
  /**
   * 10. reverse an array echt
   *
   * - a = [1,2,3,4,5]
   * - result = [5,4,3,2,1]
   */
  const mid = Math.floor(a.length / 2);

  for (let i = a.length - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }

  return a;
}

/**
 *
 * @param {Array} a
 */
function arrayShift(a) {
  /**
   * 11. Implement Array.shift() tech
   *--------0 1 2 3 4-----
   * - a = [1,2,3,4,5]
   * - a.arrayShift()
   * -------0 1 2 3------
   * - a = [2,3,4,5]
   *
   */
  const result = new Array(a.length - 1);

  for (let i = result.length - 1; i >= 0; --i) {
    result[i] = a[i + 1];
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function arrayPop(a) {
  /**
   * 12. Implement Array.pop() tech
   *
   *--------0 1 2 3 4-----------
   * - a = [1,2,3,4,5]
   * ------------0 1 2 3------
   * - result = [1,2,3,4]
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
 * @param {any} e
 */
function javascriptArrayUnshiftTech(a, e) {
  /**
   * 13. Implementation of javascript Array.unshift() method
   * -------0 1 2 3 4------
   * - a = [1,2,3,4,5]
   * - e = 6
   * ------------0 1 2 3 4 5-------
   * - result = [6,1,2,3,4,5]
   */
  const result = new Array(a.length + 1);
  result[0] = e;

  for (let i = result.length - 1; i >= 1; --i) {
    result[i] = a[i - 1];
  }
  return result;
}

/**
 *
 * @param {Array} a
 * @param {any} element
 *
 */
function javascriptArrayPush(a, element) {
  /**
   * 14. Implementation of javascript Array.push() method tech
   */
  const ret = new Array(a.length + 1);

  ret[ret.length - 1] = element;

  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function moveAllElementToLeftOneUnitLinearTraverse(a) {
  /**
   * 15. Move all array element to the left one unit
   * using linear traverse tech
   *
   */

  const temporary = a[0];

  for (let i = 1; i <= a.length - 1; i++) {
    a[i - 1] = a[i];
  }

  a[a.length - 1] = temporary;

  return a;
}

/**
 *
 * @param {Array} a
 */
function moveAllElementToLeftOneUnitReverseTraverse(a) {
  /**
   * 16. Move all array element to the left one unit
   * using reverse traverse tech
   *
   */
  const temporary = a[0];

  for (let i = a.length - 1; i >= 1; --i) {
    a[a.length - i - 1] = a[a.length - i];
  }

  a[a.length - 1] = temporary;

  return a;
}

/**
 *
 * @param {Array} a
 */
function shiftRightRotateTech(a) {
  /**
   * 17. shift right rotate array one unit tech
   */
  const temporary = a[a.length - 1];

  for (let i = a.length - 2; i >= 0; --i) {
    a[i + 1] = a[i];
  }

  a[0] = temporary;

  return a;
}

/**
 *
 * @param {Array} a
 * @param {string} key
 */
function javascriptArrayJoin(a, key) {
  /**
   * 18. Implementation of Array.join() method tech
   */
  let ret = "";

  for (let i = a.length - 1; i >= 0; --i) {
    ret += a[a.length - i - 1] + key;
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function reversePush(a, e) {
  /**
   * 19. Reverse push tech
   * -------0 1 2
   * - a = [1,2,3]
   * - e = 5
   * ---------0 1 2 3
   * - ret = [5,1,2,3]
   */
  const ret = new Array(a.length + 1);
  ret[0] = e;
  for (let i = ret.length - 1; i >= 1; --i) {
    ret[i] = a[i - 1];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function advanceLogArray(a) {
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
   */
  function handleGetSuitableIndexBar(a, aSquareBracketiSquareBracketSpace) {
    /**
     * - input: a[i]  1 2 3 4 5   |
     * - ret  : i     0 1 2 3 4   |
     */
    let ret = "i" + generateSpace(4);

    for (let i = 0; i <= a.length - 1; ++i) {
      const spaceForIndex = generateSpace(getNumberDigit(a[i]));
      ret += i + spaceForIndex;
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
  for (let i = a.length - 1; i >= 0; --i) {
    aSquareBracketiSquareBracketSpace += a[a.length - i - 1] + " ";
  }

  aSquareBracketiSquareBracketSpace += generateSpace(2) + "|";

  // top boundary
  const topBoundary = handleGetSuitableTopBoundary(
    aSquareBracketiSquareBracketSpace
  );
  console.log(topBoundary);
  // index
  const indexBar = handleGetSuitableIndexBar(
    a,
    aSquareBracketiSquareBracketSpace
  );
  console.log(indexBar);
  // a[i]
  console.log(aSquareBracketiSquareBracketSpace);

  // bottom boundary
  const bottomBoundary = handleGetSuitableBottomBoundary(
    aSquareBracketiSquareBracketSpace
  );

  console.log(bottomBoundary);
}

/**
 *
 * @param {Number} length
 */
function generateArray(length) {
  /**
   * 21. Generate array tech
   *
   */

  /**
   *
   * @param {Number} from
   * @param {Number} to
   *
   */
  function generateRandomNumber(from, to) {
    /**
     * +  Math.random() - [0,1)
     * + from = 1
     * + to = 10
     * + Math.floor(Math.random()*to + 1)
     *
     * + [0,1) * 10 = [0,9.9999)
     * + [0,1] * 10 + 1 = [0,10.999999]
     * + floor( [0,1] * 10 + 1 ) = [0,10]
     */
    return Math.floor(Math.random() * to + from);
  }
  const ret = new Array(length);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = generateRandomNumber(0, 100);
  }
  return ret;
}

function getClosestGreaterNumberNInArray(a, n) {
  /**
   * 22. Get closest greater than n in an array tech
   *
   *
   */
  console.log("a: ", a);
  console.log("n: ", n);

  let positiveInfinityNumber = Number.POSITIVE_INFINITY;
  let ret = positiveInfinityNumber;
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = a.length - 1; j >= 0; --j) {
      if (a[j] > n && a[j] < ret) {
        ret = a[j];
      }
    }
  }
  return ret === positiveInfinityNumber ? -1 : ret;
}

function test1() {
  const a1 = [1, 2, 5, 3, 4];
}

function test2() {
  const a2 = [-1, 2, -5, 3, -4];
}

function test3() {
  const a3 = [1, 2, 5, 3, 4, 5, 4, 3, 2, 1];
}

function test4() {
  const a4 = [-1, 2, -5, 3, -4, -1, -5, -4, 2, 3];
}

function test5() {
  const a5 = generateArray(9);
}

{
  // arrayTraverseLinear();
  // arrayReverseTraverse();
  // useArrayIndexAsElement();
  // loopWithoutIncreaseIndex();
  // console.log(addElementToArrayAtFirstPosition([1, 2, 3, 4, 5], 0));
  // console.log(reverseArray([1, 2, 3, 4, 5]));
  // console.log(reverseArray([1, 2, 3, 4]));
  // console.log(arrayShift([1, 2, 3, 4, 5]));
  // console.log(arrayPop([1, 2, 3, 4, 5]));
  // console.log(javascriptArrayUnshiftTech([1, 2, 3, 4, 5], 6));
  // console.log(javascriptArrayPush([1, 2], 3));
  // console.log(moveAllElementToLeftOneUnitLinearTraverse([1, 2, 3, 4, 5]));
  // console.log(moveAllElementToLeftOneUnitReverseTraverse([1, 2, 3, 4, 5]));
  // console.log(shiftRightRotateTech([1, 2, 3, 4, 5]));
  // console.log(javascriptArrayJoin([1, 2, 3, 4, 5], " "));
  // console.log(reversePush([1, 2, 3], 5));
  // advanceLogArray([1, 2, 3, 4, 5]);
  // advanceLogArray(generateArray(9));
  // console.log(getClosestGreaterNumberNInArray(a, a[0]));
}

{
  test1();
  test2();
  test3();
  test4();
  test5();
}
