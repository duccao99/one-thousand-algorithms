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
     * - Generate random number from = from, to = to
     * - from = 1
     * - to = 100
     * + ret = 0
     * + ret = 2
     * ..
     * + ret = 100
     *
     * - Math.random() = 0, 0.1, 0.11, 0.2 ,.., 1
     *
     * + random = 0
     * + random = 0.1
     * + random = 0.5
     * + random = 0.6
     * + random = 1
     *
     * + random * from = 0
     * + random * from = 0.1
     * + random * from = 0.5
     * + random * from = 0.6
     * + random * from = 1
     *
     * + random * to = 0
     * + random * to = 10
     * + random * to = 50
     * + random * to = 60
     * + random * to = 100
     *
     * -> First equation: Math.random() * to
     *    + ret in range: [0,to]
     *    -> How to make from in rage?
     *
     * + random + from = 1
     * + random + from = 1.1
     * + random + from = 1.5
     * + random + from = 1.6
     * + random + from = 2
     *
     * + random + to = 2
     * + random + to = 100.1
     * + random + to = 100.5
     * + random + to = 100.6
     * + random + to = 101
     *
     * + random
     *
     * - Idea:
     * + step 1: traverse from from to to
     * + step 2: find some thing
     *
     *
     * + i = 1
     *   + random * i
     *     + 0 * 1 = 0
     *     + 0.1 * 1 = 0.1
     *     + 0.5 * 1 = 0.5
     *     + 0.6 * 1 = 0.6
     *     + 1 * 1 = 1
     *     -> Result range: [0,1]
     *     + Math.floor(random) * i
     *
     *
     *
     * + i = 100
     *   + random * i
     *     + 0 * 100 = 0
     *     + 0.1 * 100 = 10
     *     + 0.5 * 100 = 50
     *     + 0.6 * 100 = 60
     *     + 1 * 100 = 100
     *     -> Result range: [0,100]
     *
     *
     *
     *
     *
     *
     */
    let random = Math.random(); // 0 .. 1

    let ret = null;
    for (let i = from; i <= to; ++i) {
      ret = random * i;
    }

    if (ret < from || ret > to) {
      return generateRandomNumber(from, to);
    }

    return Math.floor(ret);
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
   * 6. Advance Log Matrix
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 3 2 1
   * 2| 1 1 1
   * 3| 2 2 2
   */
  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    columnIndex += i + " ";
  }
  console.log(columnIndex);

  for (let i = 0; i <= m.length - 1; i++) {
    let row = i + "|";
    for (let j = 0; j <= m[0].length - 1; ++j) {
      row += m[i][j] + " ";
    }
    console.log(row);
  }
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
