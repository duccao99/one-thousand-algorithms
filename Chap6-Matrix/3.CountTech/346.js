/**
 * Problem: Count the number of `queen value` in matrix of number.
 * A element was called `queen value` is a element which have it's
 * value that greatest on a row, greatest on a column and 
 * greatest on two diagonals go through it
 * 
 * 
 * Understanding the problem
 * 
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 1            
 * 1| 5 1 3             
 * 2| 1 4 1   
 * 
 * - position can't be queen: 
 *   + matrix[0][0], matrix[0][2]
 *   + matrix[2][0], matrix[2][2]
 * - position can be queen:
 *   + matrix[0][1]
 *   + matrix[1][0], matrix[1][1], matrix[1][2]
 *   + matrix[2][1]
 * 
 * 
 * 
 * - ret: 1
 * 
 * 
 * - matrix             
 * -- 0 1 2 3             
 * 0| 1 2 1 3           
 * 1| 2 5 2 4             
 * 2| 1 2 1 3
 * 3| 2 5 2 4   
 * 
 * - position can't be queen:
 *   + matrix[0][0], matrix[0][3]
 *   + matrix[3][0], matrix[3][3]
 * 
 * -> Through surf two scenarios we saw that the position at 4 corners
 * of matrix can't be a queen position
 * 
 * 
 * 
 * 
 * - position can be queen:
 * 
 * 
 *    
 * 
 * Approach
 * 
 * + step 1: write a function to check if a position
 *  can be a queen position - done
 * + step 2: check if queen position value is greatest on a row - done
 * + step 3: check if queen position value is greatest on a column - done
 * + step 4: check if queen position value is greatest on a left diagonal - done
 * + step 5: check if queen position value is greatest on a right diagonal - done
 * + step 6: count
 *  
 *  
 *  
 *         
 *  
  const a1 = [[1,2,1],[5,1,3],[1,4,1]]; // 1
  const a2 = [[1,2,1,3],[2,5,2,4],[1,2,1,3],[2,5,2,4]]; // 2
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function isArrayAEqualToArrayB(a, b) {
  if (a.length !== b.length) return false;

  let flag = true;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] !== b[i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} queenPos
 */
function isQueenPositionValueGreatestOnARow(matrix, queenPos) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 2 1
   * 1| 5 1 3
   * 2| 1 4 1
   * - queenPos = [0,1] - true
   * - queenPos = [1,0] - true
   *
   */
  let flag = true;

  for (let i = matrix[queenPos[0]].length - 1; i >= 0; --i) {
    if (matrix[queenPos[0]][i] > matrix[queenPos[0]][queenPos[1]]) {
      flag = false;
      break;
    }
  }

  return flag;
}
/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} queenPos
 */
function isQueenPositionValueGreatestOnAColumn(matrix, queenPos) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 2 1
   * 1| 5 1 3
   * 2| 1 4 1
   * - queenPos: [0,1] - false
   *   + checkPos: [0][1]
   *   + checkPos: [1][1]
   *   + checkPos: [2][1]
   *   -> matrix[i][queenPos[1]]
   * - queenPos: [1,0] - true
   *
   *
   *
   */
  let flag = true;

  for (let i = matrix.length - 1; i >= 0; --i) {
    if (matrix[i][queenPos[1]] > matrix[queenPos[0]][queenPos[1]]) {
      flag = false;
      break;
    }
  }

  return flag;
}

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
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} queenPos
 */
function getLeftDiagonalElement(matrix, queenPos) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 2 1
   * 1| 5 1 3
   * 2| 1 4 1
   *
   * - queenPos = [0,1] - ret = [5]
   * - left diagonal elements pos:[0,1], [1,0]
   *
   * - matrix
   * -- 0 1 2 3
   * 0| 1 2 1 3
   * 1| 5 1 3 2
   * 2| 1 4 1 2
   * 3| 1 2 3 4
   *
   * - queenPos = [0,2]
   * - left diagonal elements pos: [0,2], [1,1], [2,0]
   *
   * - queenPos = [2,0]
   * - left diagonal elements pos: [2,0], [1,1], [0,2]
   *
   * - queenPos = [1,1]
   * - left diagonal elements pos: [2,0], [1,1], [0,2]
   *
   * - Idea:
   *   + from queenPos, check top left matrix.length time,
   *     + if matrix[i][j] != undefined then get
   *   + from queenPos, check bottom left matrix.length times,
   *     + if matrix[i][j] != undefined then get
   *
   *
   *   -> how to check top left pos, bottom right pos?
   *     + top left: row index decrease, column index increase
   *     + bottom left: row index increase, column index decrease
   *
   *
   *
   *
   *
   */
  let rowIndex = queenPos[0];
  let columnIndex = queenPos[1];
  let leftDiagonalElements = [];
  let leftDiagonalPositions = [];

  // check top left pos
  for (let i = matrix.length - 1; i >= 0; --i) {
    rowIndex--;
    columnIndex++;
    if (
      rowIndex >= 0 &&
      rowIndex <= matrix.length - 1 &&
      columnIndex >= 0 &&
      columnIndex <= matrix[0].length - 1
    ) {
      leftDiagonalElements = push(
        leftDiagonalElements,
        matrix[rowIndex][columnIndex]
      );
      leftDiagonalPositions = push(leftDiagonalPositions, [
        rowIndex,
        columnIndex,
      ]);
    }
  }

  // check bottom left pos
  rowIndex = queenPos[0];
  columnIndex = queenPos[1];
  for (let i = matrix.length - 1; i >= 0; --i) {
    rowIndex++;
    columnIndex--;
    if (
      rowIndex >= 0 &&
      rowIndex <= matrix.length - 1 &&
      columnIndex >= 0 &&
      columnIndex <= matrix[0].length - 1
    ) {
      leftDiagonalElements = push(
        leftDiagonalElements,
        matrix[rowIndex][columnIndex]
      );
      leftDiagonalPositions = push(leftDiagonalPositions, [
        rowIndex,
        columnIndex,
      ]);
    }
  }

  return {
    leftDiagonalElements: leftDiagonalElements,
    leftDiagonalPositions: leftDiagonalPositions,
  };
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} queenPos
 */
function isQueenPositionValueGreatestOnALeftDiagonal(matrix, queenPos) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 2 1
   * 1| 5 1 3
   * 2| 1 4 1
   *
   * - queenPos: [0,1]
   *   +
   * - queenPos: [1,0]
   * - queenPos: [1,1]
   *
   *
   *
   */
  let queenValue = matrix[queenPos[0]][queenPos[1]];
  let leftDiagonalElements = getLeftDiagonalElement(matrix, queenPos);

  let flag = true;

  for (
    let i = leftDiagonalElements.leftDiagonalElements.length - 1;
    i >= 0;
    --i
  ) {
    if (leftDiagonalElements.leftDiagonalElements[i] > queenValue) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} queenPos
 *
 */
function getRightDiagonalElement(matrix, queenPos) {
  /**
   * - matrix
   * -- 0 1 2 3
   * 0| 1 2 1 3
   * 1| 2 5 2 4
   * 2| 1 2 1 4
   * 3| 2 5 2 4
   *
   * - queenPos = [0,1]
   * - queenPos = [1,1]
   *
   * - right diagonal propeties:
   *   + top right:  row index decrease, column index decrease
   *   + bottom right: row index increase, column index increase
   *
   */
  let elements = [];
  let positions = [];
  let breakLoop = matrix.length - 1;
  let rowIndex = queenPos[0];
  let columnIndex = queenPos[1];

  // check top right pos
  for (let i = 0; i <= breakLoop; ++i) {
    rowIndex--;
    columnIndex--;
    if (
      rowIndex >= 0 &&
      rowIndex <= matrix.length - 1 &&
      columnIndex >= 0 &&
      columnIndex <= matrix[0].length - 1
    ) {
      elements = push(elements, matrix[rowIndex][columnIndex]);
      positions = push(positions, [rowIndex, columnIndex]);
    }
  }

  // check bottom right pos
  rowIndex = queenPos[0];
  columnIndex = queenPos[1];
  for (let i = 0; i <= breakLoop; ++i) {
    rowIndex++;
    columnIndex++;
    if (
      rowIndex >= 0 &&
      rowIndex <= matrix.length - 1 &&
      columnIndex >= 0 &&
      columnIndex <= matrix[0].length - 1
    ) {
      elements = push(elements, matrix[rowIndex][columnIndex]);
      positions = push(positions, [rowIndex, columnIndex]);
    }
  }

  return {
    elements: elements,
    positions: positions,
  };
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} queenPos
 */
function isQueenPositionValueGreatestOnARightDiagonal(matrix, queenPos) {
  const rightDiagonalElement = getRightDiagonalElement(matrix, queenPos);
  const queenValue = matrix[queenPos[0]][queenPos[1]];
  let flag = true;

  for (let i = rightDiagonalElement.elements.length - 1; i >= 0; --i) {
    if (rightDiagonalElement.elements[i] > queenValue) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} pos
 */
function isQueenPosition(matrix, pos) {
  const topLeftCorner = [0, 0];
  const topRightCorner = [0, matrix[0].length - 1];
  const bottomLeftCorner = [matrix.length - 1, 0];
  const bottomRightCorner = [
    matrix.length - 1,
    matrix[matrix.length - 1].length - 1,
  ];

  if (
    isArrayAEqualToArrayB(topLeftCorner, pos) ||
    isArrayAEqualToArrayB(topRightCorner, pos) ||
    isArrayAEqualToArrayB(bottomLeftCorner, pos) ||
    isArrayAEqualToArrayB(bottomRightCorner, pos)
  ) {
    return false;
  }
  return true;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function fx(matrix) {
  let flag = false;
  let count = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isQueenPosition(matrix, [i, j])) {
        let flagCheckRow = isQueenPositionValueGreatestOnARow(matrix, [i, j]);
        let flagCheckColumn = isQueenPositionValueGreatestOnAColumn(matrix, [
          i,
          j,
        ]);
        let flagCheckLeftDiagonal = isQueenPositionValueGreatestOnALeftDiagonal(
          matrix,
          [i, j]
        );
        let flagCheckRightDiagonal =
          isQueenPositionValueGreatestOnARightDiagonal(matrix, [i, j]);

        flag =
          flagCheckRow &&
          flagCheckColumn &&
          flagCheckLeftDiagonal &&
          flagCheckRightDiagonal;

        if (flag) {
          count++;
        }
      }
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 1],
    [5, 1, 3],
    [1, 4, 1],
  ]; // 1
  const a2 = [
    [1, 2, 1, 3],
    [2, 5, 2, 4],
    [1, 2, 1, 3],
    [2, 5, 2, 4],
  ]; // 2
  const a3 = [
    [1, 2, 4],
    [3, 4, 5],
    [5, 4, 7],
    [5, 6, 6],
  ]; // 1

  console.log(fx(a1));
  console.log(fx(a2));
  console.log(fx(a3));
}

{
  test1();
}
