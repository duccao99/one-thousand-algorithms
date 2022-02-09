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

{
  const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  //   matrixLinearTraverse(m);
  //   matrixReverseTraverse(m);
  //   matrixTraverseTopLeftToMidAndBottomRightToNextMid(m);
  matrixTraverseFromTopLeftToMidAndFromNextMidToEnd(m);
}
