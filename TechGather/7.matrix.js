/**
 * - Matrix traverse common cases
 * -- matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 3| 3 2 1
 *
 * + Case 1: matrixRowLinearTraverse - done
 *   + ret = 1 2 3 4 5 6 7 8 9 3 2 1
 * + Case 2: matrixRowReverseTraverse - done
 *   + ret = 3 2 1 6 5 4 9 8 7 1 2 3
 * + Case 3: matrixRowLinearTraverseBackward  - done
 *   + ret = 3 2 1 7 8 9 4 5 6 1 2 3
 * + Case 4: matrixRowReverseTraverseBackward - done
 *   + ret = 1 2 3 9 8 7 6 5 4 3 2 1
 * + Case 5: matrixColumnLinearTraverse
 *   + ret = 1 4 7 3 2 5 8 2 3 6 9 1
 * + Case 6: matrixColumnReverseTraverse
 *   + ret = 3 6 9 1 2 5 8 2 1 4 7 3
 * + Case 7: matrixColumnLinearTraverseBackward
 *   + ret = 3 7 4 1 2 8 5 2 1 9 6 3
 * + Case 8: matrixColumnReverseTraverseBackward
 *   + ret = 1 9 6 3 2 8 5 2 3 7 4 1
 *
 *
 *
 *
 */

/**
 * @param {Array<Array>} m
 */
function matrixRowLinearTraverse(m) {
  /**
   * 1. Matrix linear traverse tech
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 1 2
   *
   * - ret
   * 1
   * 2
   * 3
   * 4
   * 5
   * 6
   * 7
   * 8
   * 9
   * 3
   * 1
   * 2
   */
  let ret = "";
  for (let i = 0; i <= m.length - 1; i++) {
    for (let j = 0; j <= m.length - 1; ++j) {
      ret += m[i][j] + " ";
    }
  }
  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixRowReverseTraverse(m) {
  /**
   * 2. Matrix reverse traverse tech
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 1 2
   * - ret
   * 3 2 1 6 5 4 9 8 7 2 1 3
   */
  let ret = "";

  for (let i = 0; i < m.length; ++i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixRowLinearTraverseBackward(m) {
  /**
   * 3. matrix Row Linear Traverse Backward tech
   * -- matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 2 1
   *
   * - ret = 3 2 1 7 8 9 4 5 6 1 2 3
   */
  let ret = "";

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = 0; j < m[i].length; ++j) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixRowReverseTraverseBackward(m) {
  /**
   * 4. matrix Row Reverse Traverse Backward tech
   * -- matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 2 1
   * - ret = 1 2 3 9 8 7 6 5 4
   */
  let ret = "";

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixColumnLinearTraverse(m) {
  /**
   * 5. matrix Column Linear Traverse tech
   * -- matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 2 1
   * - ret = 1 4 7 3 2 5 8 2 3 6 9 1
   */
  let ret = "";

  for (let j = 0; j <= m[0].length - 1; ++j) {
    for (let i = 0; i <= m.length - 1; ++i) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixColumnReverseTraverse(m) {
  /**
   * 6. matrix Column Reverse Traverse tech
   * -- matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 2 1
   * - ret = 3 6 9 1 2 5 8 2 1 4 7 3
   */
  let ret = "";

  for (let j = m[0].length - 1; j >= 0; --j) {
    for (let i = 0; i <= m.length - 1; ++i) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixColumnLinearTraverseBackward(m) {
  /**
   * 7. matrix Column Linear Traverse Backward tech
   * -- matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 2 1
   * - ret = 3 7 4 1 2 8 5 2 1 9 6 3
   */
  let ret = "";

  for (let j = 0; j <= m[0].length - 1; j++) {
    for (let i = m.length - 1; i >= 0; --i) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixColumnReverseTraverseBackward(m) {
  /**
   * 8. matrix Column Reverse Traverse Backward tech
   * -- matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 3 2 1
   * - ret = 1 9 6 3 2 8 5 2 3 7 4 1
   *
   * - Why do go backward is always more effective?
   *
   *
   */
  let ret = "";

  for (let j = m[0].length - 1; j >= 0; --j) {
    for (let i = m.length - 1; i >= 0; --i) {
      ret += m[i][j] + " ";
    }
  }

  return ret;
}

/**
 * @param {Array<Array>} m
 */
function matrixTraverseTopLeftToMidAndBottomRightToNextMid(m) {
  /**
   * 9. Traverse matrix from top left to the middle position
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
   * 10. Traverse matrix from top left to middle position
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
   * 11. Generate matrix tech
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
   * 12. advance log matrix
   */
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

/**
 *
 * @param {Array<Array>} m
 */
function matrixBoundaryClockwiseTraverse(m) {
  /**
   * 13. matrix boundary clockwise traverse tecch
   * - matrix
   * -- 0 1 2 3
   * 0| 1 2 4 3
   * 1| 5 6 2 7
   * 2| 9 8 4 5
   *
   * - ret = 1 2 4 3 7 5 4 8 9 5
   *
   * + i = 0
   *   + j = 0
   *   + j = 1
   *   + j = 2
   *   + j = 3
   * + i = 1
   *   + j = 3
   * + i = 2
   *   + j = 3
   *   + j = 2
   *   + j = 1
   *   + j = 0
   * + i = 1
   *   + j = 0
   *
   *
   *
   */
  let ret = "";

  for (let i = 0; i <= m.length - 1; ++i) {
    if (i === 0) {
      for (let j = 0; j <= m[i].length - 1; ++j) {
        ret += m[i][j] + " ";
      }
    }

    if (i > 0 && i < m.length - 1) {
      ret += m[i][m[i].length - 1] + " ";
    }

    if (i === m.length - 1) {
      for (let j = m[i].length - 1; j >= 0; --j) {
        ret += m[i][j] + " ";
      }
      for (let k = m.length - 1 - 1; k > 0; --k) {
        ret += m[k][0] + " ";
      }
    }
  }

  console.log(ret);
}

{
  const m = [
    [1, 2, 3, 4],
    [2, 5, 6, 7],
    [3, 5, 6, 2],
    [4, 5, 6, 1],
    [7, 8, 9, 8],
  ];
  // console.log(matrixLinearTraverse(m));
  // console.log(matrixRowReverseTraverse(m));
  // console.log(matrixRowLinearTraverseBackward(m));
  // console.log(matrixRowReverseTraverseBackward(m));
  // console.log(matrixColumnLinearTraverse(m));
  // console.log(matrixColumnReverseTraverse(m));
  // console.log(matrixColumnLinearTraverseBackward(m));
  // console.log(matrixColumnReverseTraverseBackward(m));
  //   matrixReverseTraverse(m);
  //   matrixTraverseTopLeftToMidAndBottomRightToNextMid(m);
  // matrixTraverseFromTopLeftToMidAndFromNextMidToEnd(m);
  // advanceLogMatrix(generateMatrix(3, 4));
  matrixBoundaryClockwiseTraverse(m); // 1 2 3 4 7 2 1 8 9 8 7 4 3 2
}

/**
 * Common solution tech for solve matrix problem
 * + Pour matrix
 *   + column traverse
 *   + row traverse
 *
 * + Handle Array tech
 *   + reverse array
 *
 */
