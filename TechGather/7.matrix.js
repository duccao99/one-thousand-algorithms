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

const numberOfRow = generateRandomNumber(1, 9);
const numberOfColumn = generateRandomNumber(1, 9);

const m1 = generateMatrix(1, 1);
const m2 = generateMatrix(5, 1);
const m3 = generateMatrix(5, 2);
const m4 = generateMatrix(5, 6);

const m5 = generateMatrix(1, 6);
const m6 = generateMatrix(2, 6);
const m7 = generateMatrix(5, 6);

const m8 = generateMatrix(numberOfRow, numberOfColumn);

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

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function push(a, e) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   * - e = 5
   * ---------0 1 2 3
   * - ret = [1,2,3,5]
   */
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

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

  let ret = [];
  for (let i = rows - 1; i >= 0; --i) {
    let column = [];
    for (let j = columns - 1; j >= 0; --j) {
      column = push(column, generateRandomNumber(20, 90));
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

/**
 *
 * @param {Array<Array>} m
 */
function matrixBlackHoleTraverseCorpse(m) {
  /**
   * 13. matrix black hole traverse tech
   * - matrix
   * -- 0 1 2 3
   * 0| 4 1 3 5
   * 1| 5 8 9 8
   * 2| 2 6 7 8
   * 3| 9 1 4 5
   *
   * - ret = 4 1 3 5 8 5 4 1 9 2 6 7
   * + case 1: done
   * + i = 0
   *   + j = 0,1,2,3
   *
   * + case 2: done
   * + i = 1
   *   + j = 3
   * + i = 2
   *   + j = 3
   *
   * + case 3: done
   * + i = 3 = m.length - 1
   *   + j = 3,2,1,0
   *
   * + case 4:
   *   + i = 2
   *   + i = 1
   *     + j = 1,2
   *       + i = 2
   *         + j = 1
   *
   *
   *
   *
   * -> Play around for a while
   * we realise that the matrix black hole traverse is the
   * clockwise boundary traverse and sub-boundary clock wise traverse,
   * check this out
   *
   * + step 1: write a boundary clockwise traverse function
   * + step 2: write a level down matrix function
   * + step 3: use step 1 to traverse step 2 until the matrix level is
   * equal to 0
   *
   *
   *
   */
  let ret = "";

  for (let i = 0; i < m.length; ++i) {
    if (i === 0) {
      for (let j = 0; j < m[i].length; ++j) {
        ret += m[i][j] + " ";
      }
    }
    if (i > 0 && i < m.length) {
      ret += m[i][m[i].length - 1] + " ";
    }
    if (i === m.length - 1) {
      for (let j = m[i].length - 1 - 1; j >= 0; --j) {
        ret += m[i][j] + " ";
      }
    }
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} m
 */
function matrixBlackHoleTraverse(m) {
  /**
   * 13. matrix black hole traverse tech
   *
   * + step 1: write a boundary clockwise traverse function - done
   * + step 2: write a level down matrix function - done
   * + step 3: get the number of time level down the matrix - done
   * + step 4: use step 1 to traverse step 2 until  the number of time
   * level down is equal to 0 - done
   *
   *
   */
  let breakTime = getTheNumberOfBreakTimeLevelingDownTheMatrix(m);
  console.log("Time the matrix can level down: ", breakTime);

  let ret = "";
  for (let i = 0; i < m.length; ++i) {
    if (i === 0) {
      for (let j = 0; j <= m[0].length - 1; ++j) {
        ret += m[i][j] + " ";
      }
    }
    if (i > 0 && i < m.length - 1) {
      ret += m[i][m[i].length - 1] + " ";
    }
    if (i === m.length - 1 && i !== 0) {
      if (m[i].length - 1 !== 0) {
        for (let j = m[i].length - 1; j >= 0; --j) {
          ret += m[i][j] + " ";
        }
        for (let k = m.length - 1 - 1; k > 0; --k) {
          ret += m[k][0] + " ";
        }
      }
      if (m[i].length - 1 === 0) {
        ret += m[i][0] + " ";
      }
    }
  }

  console.log("Matrix before level down boundary traverse ret");
  console.log(ret);

  while (breakTime > 0) {
    // boundary clockwise traverse this
    m = matrixLevelingDown(m);
    console.log("Matrix after level down");
    advanceLogMatrix(m);

    /**
     * - boundary clock wise traverse
     * -- matrix
     * -- 0 1 2 3
     * 0| 1 2 3 4
     * 1| 6 2 3 5
     * 2| 2 2 3 6
     * 3| 5 6 8 7
     *
     * -- boundary
     * -- 0 1 2 3
     * 0| 1 2 3 4
     * 1| 6     5
     * 2| 2     6
     * 3| 5 6 8 7
     *
     * - ret = 1 2 3 4 5 6 7 8 6 5 2 6
     *
     */
    let ret = "";
    for (let i = 0; i < m.length; ++i) {
      if (i === 0) {
        for (let j = 0; j <= m[0].length - 1; ++j) {
          ret += m[i][j] + " ";
        }
      }
      if (i > 0 && i < m.length - 1) {
        ret += m[i][m[i].length - 1] + " ";
      }
      if (i === m.length - 1 && i !== 0) {
        if (m[i].length - 1 !== 0) {
          for (let j = m[i].length - 1; j >= 0; --j) {
            ret += m[i][j] + " ";
          }
          for (let k = m.length - 1 - 1; k > 0; --k) {
            ret += m[k][0] + " ";
          }
        }
        if (m[i].length - 1 === 0) {
          ret += m[i][0] + " ";
        }
      }
    }
    console.log("Matrix after level down boundary traverse ret");
    console.log(ret);

    breakTime--;
  }
}

function getTheNumberOfBreakTimeLevelingDownTheMatrix(m) {
  let breakTime = 0;
  let breakWhileLoopCondition = "Can't leveling down this matrix";
  while (m !== breakWhileLoopCondition) {
    m = matrixLevelingDown(m);

    breakTime++;
  }

  breakTime--;

  return breakTime;
}

/**
 *
 * @param {Array<Array>} m
 */
function matrixLevelingDown(m) {
  /**
   * - matrix 0
   * -- 0 1 2 3
   * 0| 1 2 3 4
   *
   * -> only boundary clockwise traverse
   *
   * - matrix 1
   * -- 0 1 2 3
   * 0| 1 2 3 4
   * 1| 5 6 7 8
   *
   * - r: number of row: 2
   * - c: number of column: 4
   * - r x c = 8
   *
   * - leveling down:
   *   + r: number of row - 2
   *   + c: number of column - 2
   *   + r x c = 0 x 4 = 0
   *
   * -> only boundary clockwise traverse
   *
   *
   *
   * - matrix 2
   * -- 0 1 2 3
   * 0| 1 2 3 4
   * 1| 5 6 7 8
   * 2| 4 3 2 1
   *
   * + r: number of row: 3
   * + c: number of column: 4
   * + r x c = 3 x 4 = 12
   *
   * + leveling down:
   *   + r: number of row - 2: 1
   *   + c: number of column - 2: 2
   *   + r x c = 1 x 2 = 2
   *
   * + have matrix black hole traverse
   *
   *
   * ->
   *   + if m.length <=2
   *     + boundary clock wise traverse
   *
   *   + if m.length > 2
   *     + boundary clock wise traverse
   *     + leveling down matrix
   *
   * + step 1: get start column index
   * + step 2: get start row index
   * + step 3: get end column index
   * + step 4: get end row index
   * + step 5: get sub matrix size
   * + step 6: create empty matrix with sub matrix size
   * + step 7: use step 1,2,3,4 to pour element to step 6
   *
   *
   *
   *
   * - matrix 3
   * -- 0 1 2 3
   * 0| 1 2 3 4
   * 1| 5 6 7 8
   * 2| 5 4 1 3
   * 3| 4 3 2 1
   *
   *
   */
  if (m.length <= 2 || m[0].length <= 2) {
    return "Can't leveling down this matrix";
  }

  const startColumnIndex = 1;
  const endColumnIndex = m[0].length - 1 - 1;

  const startRowIndex = 1;
  const endRowIndex = m.length - 1 - 1;

  let matrixRet = [];

  for (let i = startRowIndex; i <= endRowIndex; ++i) {
    let rowI = [];
    for (let j = startColumnIndex; j <= endColumnIndex; ++j) {
      rowI = push(rowI, m[i][j]);
    }
    matrixRet = push(matrixRet, rowI);
  }

  return matrixRet;
}

{
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
  // matrixBoundaryClockwiseTraverse(m); // 1 2 3 4 7 2 1 8 9 8 7 4 3 2
  // console.log(matrixBlackHoleTraverse(m));
}

function test1() {
  console.log("\nMatrix input 1");
  advanceLogMatrix(m1);
  matrixBlackHoleTraverse(m1);
}

function test2() {
  console.log("\nMatrix input 2");
  advanceLogMatrix(m2);
  matrixBlackHoleTraverse(m2);
}

function test3() {
  console.log("\nMatrix input 3");
  advanceLogMatrix(m3);
  matrixBlackHoleTraverse(m3);
}

function test4() {
  console.log("\nMatrix input 4");
  advanceLogMatrix(m4);
  matrixBlackHoleTraverse(m4);
}

function test5() {
  console.log("\nMatrix input 5");
  advanceLogMatrix(m5);
  matrixBlackHoleTraverse(m5);
}

function test6() {
  console.log("\nMatrix input 6");
  advanceLogMatrix(m6);
  matrixBlackHoleTraverse(m6);
}

function test7() {
  console.log("\nMatrix input 7");
  advanceLogMatrix(m7);
  matrixBlackHoleTraverse(m7);
}

function test8() {
  console.log("\nMatrix input 8");
  advanceLogMatrix(m8);
  matrixBlackHoleTraverse(m8);
}

function generateTestCaseCode() {
  const startNumberTestCase = 1;
  const endNumberOfTestCase = 8;
  function generateFunctionTestCaseCode() {
    for (let i = startNumberTestCase; i <= endNumberOfTestCase; ++i) {
      console.log(`function test${i}() {
        console.log("\\nMatrix input ${i}");
        advanceLogMatrix(m${i});
        matrixBlackHoleTraverse(m${i});
      }
      `);
    }
  }
  function generateActivateFunctionTestCaseCode() {
    for (let i = startNumberTestCase; i <= endNumberOfTestCase; ++i) {
      console.log(`test${i}()`);
    }
  }

  // generateFunctionTestCaseCode()
  generateActivateFunctionTestCaseCode();
}

{
  // generateTestCaseCode();
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
  test7();
  test8();
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
