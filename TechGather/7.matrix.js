/**
 * @param {Array<Array>} m
 */
function matrixLinearTraverse(m) {
  /**
   * 1. Matrix linear traverse tech
   */
  for (let i = 0; i <= m.length - 1; i++) {
    for (let j = 0; j <= m.length - 1; ++j) {
      console.log(m[i][j]);
    }
  }
}

/**
 * @param {Array<Array>} m
 */
function matrixReverseTraverse(m) {
  /**
   * 2. Matrix reverse traverse tech
   */

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      console.log(m[i][j]);
    }
  }
}

/**
 * @param {Array<Array>} m
 */
function matrixTraverseTopLeftToMidAndBottomRightToNextMid(m) {
  /**
   * 3. Traverse matrix from top left to the middle position
   * and from the bottom right to the middle's next position
   *
   * - matrix           top left        bottom right
   * -- 0 1 2         -- 0 1 2         -- 0 1 2
   * 0| 1 2 3         0| 1 2 3         0|
   * 1| 4 5 6         1| 4 5           1|     6
   * 2| 7 8 9         2|               2| 7 8 9
   *
   * -- top left traverse ret: [1,2,3,4,5]
   * -- bottom right traverse ret: [9,8,7,6]
   */
  const middlePosition = [
    Math.floor(m.length / 2),
    Math.floor(m[0].length / 2),
  ];

  const topLeftRet = [];
  const bottomRightRet = [];

  for (let i = 0; i <= middlePosition[0]; i++) {
    for (let j = 0; j <= m[0].length - 1; j++) {
      topLeftRet.push(m[i][j]);
      if (i === middlePosition[0] && j === middlePosition[1]) {
        break;
      }
    }
  }

  for (let i = m.length - 1; i >= middlePosition[0]; i--) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      bottomRightRet.push(m[i][j]);
      if (i === middlePosition[0] && j === middlePosition[1] + 1) {
        break;
      }
    }
  }

  console.log("topLeftRet: ", topLeftRet);
  console.log("bottomRightRet: ", bottomRightRet);
}

/**
 * @param {Array<Array>} m
 */
function matrixTraverseFromTopLeftToMidAndFromNextMidToEnd(m) {
  /**
   * 4. Traverse matrix from top left to middle position
   * and from the middle's next position to the end
   *
   * - matrix     top left      middle to end
   * -- 0 1 2     -- 0 1 2      -- 0 1 2
   * 0| 1 2 3     0| 1 2 3      0|
   * 1| 4 5 6     1| 4 5        1|     6
   * 2| 7 8 9     2|            2| 7 8 9
   *
   * - top left ret: [1,2,3,4,5]
   * - middle to end ret: [6,7,8,9]
   *
   */
  const topLeftRet = [];
  const middleToEndRet = [];
  const middlePosition = [
    Math.floor(m.length / 2),
    Math.floor(m[0].length / 2),
  ];

  for (let i = 0; i <= middlePosition[0]; ++i) {
    for (let j = 0; j <= m[i].length - 1; ++j) {
      topLeftRet.push(m[i][j]);
      if (j === middlePosition[1] && i === middlePosition[0]) {
        break;
      }
    }
  }

  for (let i = middlePosition[0]; i <= m.length - 1; ++i) {
    for (let j = 0; j <= m[i].length - 1; ++j) {
      if (i === middlePosition[0]) {
        j = middlePosition[1] + 1;
      }
      middleToEndRet.push(m[i][j]);
    }
  }

  console.log("topLeftRet: ", topLeftRet);
  console.log("middleToEndRet: ", middleToEndRet);
}

function generateMatrix(rows, columns) {
  /**
   * 5. Generate matrix tech
   *
   * - Input: rows, columns
   * - Output: matrix have rows and columns corresponding the input
   *
   * + rows: 2
   * + columns: 3
   * + matrix:
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 1 2 3
   */

  /**
   *
   * @param {Array} a
   * @param {any} e
   */
  function push(a, e) {
    const ret = new Array(a.length + 1);
    ret[ret.length - 1] = e;
    for (let i = ret.length - 2; i >= 0; --i) {
      ret[i] = a[i];
    }
    return ret;
  }

  /**
   *
   * @param {Number} from
   * @param {Number} to
   *
   */
  function generateRandomNumber(from, to) {
    /**
     * + Result: [10,20]
     *
     * - math.random() = [0,0.999999]
     * - from = 10
     * - to = 20
     * - to - from = 10
     * - math.random() * to = [0,19.99998]
     * - math.random() * to + from = [10,29.99999]
     *
     * - math.random() * (to-from) = [0,9.9999999]
     * - math.random() * (to-from) + from = [10,19.9999999]
     *
     * - math.floor(math.random()*(to-from)+from) = [10,19]
     * - math.round(math.random()*(to-from)+from) = [10,20]
     *
     *
     */
    return Math.round(Math.random() * (to - from) + from);
  }

  let ret = [];
  for (let i = rows - 1; i >= 0; --i) {
    let column = [];
    for (let j = columns - 1; j >= 0; --j) {
      column = push(column, generateRandomNumber(0, 100));
    }
    ret = push(ret, column);
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} m
 */
function advanceLogMatrix(m) {
  /**
   *
   * @param {Number} number
   */
  function generateSpace(number) {
    /**
     * - n = 1
     * - ret = " "
     *
     * - n = 3
     * - ret = "   "
     */
    let ret = "";
    for (let i = number; i >= 1; --i) {
      ret += " ";
    }
    return ret;
  }
  /**
   *
   * @param {string} s
   */
  function stringRightTrim(s) {
    let arrayCharacters = new Array(s.length);

    for (let i = s.length - 1; i >= 0; --i) {
      arrayCharacters[i] = s[i];
    }

    while (arrayCharacters[arrayCharacters.length - 1] === " ") {
      arrayCharacters = pop(arrayCharacters);
    }

    return {
      arrayCharacters: arrayCharacters,
      string: join(arrayCharacters, ""),
    };
  }

  /**
   *
   * @param {Array} a
   * @param {string} key
   *
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
   * @param {Array} a
   */
  function pop(a) {
    /**
     * -------0 1 2 3
     * - a = [1,2,3,4]
     * ---------0 1 2
     * - ret = [1,2,3]
     */
    const ret = new Array(a.length - 1);
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    return ret;
  }

  const topBoundary = "-----Matrix-----";
  console.log(topBoundary); // len = 16
  /**
   *
   * @param {Number} n
   */
  function getNumberDigits(n) {
    let ret = 0;

    while (n !== 0) {
      n = Math.floor(n / 10);
      ret++;
    }

    return ret;
  }

  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    let space = "";
    let numberDigits = getNumberDigits(m[0][i]);
    for (let j = numberDigits - 1; j >= 0; --j) {
      space += " ";
    }
    columnIndex += i + space;
  }
  columnIndex = stringRightTrim(columnIndex).string;
  let spaceBetweenLastColumnIndexToRightBoundary =
    topBoundary.length - columnIndex.length;
  const spaceForColumnIndexToRightBoundary = generateSpace(
    spaceBetweenLastColumnIndexToRightBoundary - 1
  );
  columnIndex += spaceForColumnIndexToRightBoundary + "|";
  console.log(columnIndex);

  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      row += m[i][j] + " ";
    }
    row = stringRightTrim(row).string;
    const spaceBetweenRowIToRightBoundary = generateSpace(
      topBoundary.length - 1 - row.length
    );
    row += spaceBetweenRowIToRightBoundary + "|";
    console.log(row);
  }
  const bottomBoundary = "---------------";
  console.log(bottomBoundary);
}

{
  const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  //   matrixLinearTraverse(m);
  //   matrixReverseTraverse(m);
  //   matrixTraverseTopLeftToMidAndBottomRightToNextMid(m);
  // matrixTraverseFromTopLeftToMidAndFromNextMidToEnd(m);
  advanceLogMatrix(generateMatrix(3, 4));
}
