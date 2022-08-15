/**
 * Problem:
 * The HTML eDM has
 *  + #333;
 *  + #000;
 *  + #fff;
 * The ret need
 * + #333333;
 * + #000000;
 * + #ffffff;
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
function arrayShift(a) {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   *
   * ---------0 1 2 3
   * - ret = [2,3,4,5]
   *
   */

  const ret = new Array(a.length - 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function arrayUnshift(a, e) {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   * - e = 6
   *
   * ---------0 1 2 3 4 5
   * - ret = [6,1,2,3,4,5]
   *
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
 *
 */
function arrayPop(a) {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   *
   * ---------0 1 2 3
   * - ret = [1,2,3,4]
   *
   */
  const ret = new Array(a.length - 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {string} s
 * @param {string} searchString
 * @param {string} replaceByString
 *
 */
function stringReplace(s, searchString, replaceByString) {
  /**
   * - s = "123456123789147876123"
   * - searchString = "123"
   * - replaceByString = "7890"
   * - ret = "789045678907897890"
   *
   * + searchString.length = 3
   *
   * + i = 0
   *   + ret = 2
   *   + ret = 0 + 3 - 1
   *   + ret = i + searchString.length - 1
   *
   *
   *
   */
  let sArray = stringToArray(s);
  const searchStringArray = stringToArray(searchString);
  const replaceByStringArray = stringToArray(replaceByString);
  let ret = [];

  for (let i = 0; i <= sArray.length - 1; ++i) {
    if (sArray[i] === searchStringArray[0]) {
      let startIndex = i;
      let endIndex = i + searchStringArray.length - 1;
      let currentTraverseString = "";
      let wasSearchString = true;

      for (let j = startIndex; j <= endIndex; ++j) {
        currentTraverseString += sArray[j];
      }

      for (let k = currentTraverseString.length - 1; k >= 0; --k) {
        if (currentTraverseString[k] !== searchStringArray[k]) {
          wasSearchString = false;
          break;
        }
      }

      if (wasSearchString) {
        if (startIndex === 0) {
          /**
           * + shift array string then unshift array ret string
           *   + shift k time
           *   + k = searchStringArray.length
           *
           * -> done
           *
           */
          let kTime = searchStringArray.length;

          for (let k = kTime - 1; k >= 0; --k) {
            sArray = arrayShift(sArray);
          }

          for (let k2 = replaceByStringArray.length - 1; k2 >= 0; --k2) {
            sArray = arrayUnshift(sArray, replaceByStringArray[k2]);
          }
        }

        if (startIndex !== 0) {
          if (endIndex === sArray.length - 1) {
            /**
             * + pop sArray k-time then push sArray the ret Array
             * + k = searchStringArray.length
             * -> done
             *
             *
             */
            const kTime = searchStringArray.length;
            for (let k = kTime; k >= 1; --k) {
              sArray = arrayPop(sArray);
            }

            for (let k2 = 0; k2 <= replaceByStringArray.length - 1; ++k2) {
              sArray = arrayPush(sArray, replaceByStringArray[k2]);
            }
          }

          if (endIndex !== sArray.length - 1) {
            console.log();
          }
        }
        // console.log("startIndex: ", startIndex);
        // console.log("endIndex: ", endIndex);
        // console.log("currentTraverseString: ", currentTraverseString);
      }
    }
  }
}

stringReplace("123456123789147876123", "123", "7890");

/**
 *
 * @param {string} s
 */
function stringCountLength(s) {
  let ret = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    ret++;
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function arrayPush(a, e) {
  const ret = new Array(a.length + 1);

  ret[ret.length - 1] = e;

  for (let i = 0; i <= ret.length - 1 - 1; ++i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {string} s
 */
function stringToArray(s) {
  let ret = [];

  for (let i = 0; i <= s.length - 1; ++i) {
    ret = arrayPush(ret, s[i]);
  }

  return ret;
}

/**
 *
 * @param {string} html
 */
function f(html) {
  let arrayStringHTML = stringToArray(html);
  let arrayStringColorCode = [];

  for (let i = 0; i <= arrayStringHTML.length - 1; ++i) {
    if (arrayStringHTML[i] === "#") {
      let startIndex = i;
      let endIndex = null;

      let flag = false;

      for (let j = startIndex; j <= arrayStringHTML.length - 1; ++j) {
        if (arrayStringHTML[j] === ";") {
          flag = true;
          endIndex = j;
          break;
        }
      }

      if (flag) {
        let currentTraverseString = "";

        for (let j = startIndex; j <= endIndex; ++j) {
          currentTraverseString += arrayStringHTML[j];
        }

        arrayStringColorCode = arrayPush(
          arrayStringColorCode,
          currentTraverseString
        );
      }
    }
  }

  for (let i = arrayStringColorCode.length - 1; i >= 0; --i) {
    let currentTraverseStringLength = stringCountLength(
      arrayStringColorCode[i]
    );

    if (currentTraverseStringLength === 5) {
      //   console.log(arrayStringColorCode[i]);
    }
  }
}

const html = `#333;abc#ffffff;def#000;ghi#222;`;

f(html);
