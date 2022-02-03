/**
 * Problem: Write a function to sort the matrix of number ascending
 * from top to bottom and from left to right 
 * 
 * 
 * Understanding the problem
 *  
 *           --0 1 2
 *           0|9 8 7
 * matrix =  1|3 1 2
 *           2|4 6 5
 * 
 *           --0 1 2
 *           0|1 2 3
 * result =  1|4 5 6
 *           2|7 8 9
 * 
 * 
 * -------------------------
 * - pour array to matrix
 * -------------------------
 * 
 * -------0 1 2 3 4 5 6 7 8
 * - a = [1,2,3,4,5,6,7,8,9] 
 * - matrix = [
 * ---0 1 2
 * 0|[1,2,3],
 * 1|[4,5,6],
 * 2|[7,8,9]
 * ]
 *
 * - matrix[0][0] = a[0]
 * - matrix[0][1] = a[1]
 * - matrix[0][2] = a[2]
 * 
 * - matrix[1][0] = a[3]
 * - matrix[1][1] = a[4]
 * - matrix[1][2] = a[5]
 * 
 * - matrix[2][0] = a[6]
 * - matrix[2][1] = a[7]
 * - matrix[2][2] = a[8]
 * 
 * -> loop i from 0 to matrix.length - 1
 *     + declare pourPos = 0
 *    -> loop j from 0 to matrix[i].length - 1
 *       + pourPos++
 *       + matrix[i][j] = a[pourPos]
 * 
 * 
 * -------------------------
 * - matrix sort itself
 * -------------------------
 * 
 * - matrix = [
 * ---0 1 2
 * 0|[9,8,7],
 * 1|[5,4,6],
 * 2|[3,1,2]
 * ]
 * 
 * + min = 1, minPos = [2,1]
 *   + swap(matrix,[0,0],[2,1]) 
 *   + min = findNumberClosestMin(min,matrix)
 * + min = 2, minPos = [2,2]
 *   + swap(matrix,[0,1],[2,2])
 * ..
 * -> loop rows x columns time 
 * 
 * 
 * 
 * 
 * 
  const a1 = [[9,8,7],[3,1,2],[4,6,5]]; // [[1,2,3],[4,5,6],[7,8,9]]
  const a2 = [[3,1,2],[5,4,6],[9,8,7]]; // [[1,2,3],[4,5,6],[7,8,9]]
 * 
 * Approach 1 - pouring
 * + step 1: pour matrix to array
 * + step 2: sort the array in ascending order
 * + step 3: pour array to matrix
 *
 * Approach 2 - sort itself
 * + step 1: write a function to find a number which closest to minumum number
 * in matrix
 * + step 2: write a function to get matrix size
 * + step 1: 
 * 
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 */
function advanceLogMatrix(matrix) {
  let columnIndex = "--";

  for (let i = 0; i <= matrix[0].length - 1; ++i) {
    columnIndex += i + " ";
  }
  console.log(columnIndex);

  for (let i = 0; i <= matrix.length - 1; i++) {
    let logger = "";
    for (let j = 0; j <= matrix[i].length - 1; ++j) {
      logger += matrix[i][j] + " ";
    }
    let rowIndex = i + "|";
    let retLog = rowIndex + logger;
    console.log(retLog);
  }
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
 * @param {Array} a
 */
function shift(a) {
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const mid = Math.round(a.length / 2);
  const right = [...a];
  const left = right.splice(0, mid);
  return merging(mergeSort(left), mergeSort(right));
}
/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merging(left, right) {
  let sorting = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorting = push(sorting, left[0]);
      left = shift(left);
    }
    if (left[0] >= right[0]) {
      sorting = push(sorting, right[0]);
      right = shift(right);
    }
  }

  let ret = [];
  for (let k = sorting.length - 1; k >= 0; --k) {
    ret = push(ret, sorting[sorting.length - k - 1]);
  }
  for (let i = left.length - 1; i >= 0; --i) {
    ret = push(ret, left[left.length - i - 1]);
  }
  for (let j = right.length - 1; j >= 0; --j) {
    ret = push(ret, right[right.length - j - 1]);
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Array<Array>} matrix
 */
function pourArrayToMatrix(a, matrix) {
  let pourPos = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      matrix[i][j] = a[pourPos];
      pourPos++;
    }
  }
}

/**
 *
 * @param {Array<Array>} matrix
 */
function E319Pouring(matrix) {
  let a = [];
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      a = push(a, matrix[i][j]);
    }
  }
  a = mergeSort(a);

  pourArrayToMatrix(a, matrix);
  return matrix;
}

/**
 *
 * @param {Array<Array>} matrix
 */
function getMatrixSize(matrix) {
  return matrix.length * matrix[0].length;
}

/**
 *
 * @param {Array<Number,Number>} x
 * @param {Array<Number,Number>} y
 */
function isTheSameCoordinateMatrix(x, y) {
  return x[0] === y[0] && x[1] === y[1];
}

/**
 *
 * @param {Number} number
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} pos
 */
function findClosestMatrixNumberPosition(number, matrix, pos) {
  /**
   * + Case 1:
   * - n = 2, pos = [2,2]
   * - ret = 3, retPos = [2,1]
   * matrix
   * --0 1 2
   * 0|9 8 7
   * 1|6 5 4
   * 2|1 3 2
   * -------------0 1 2 3 4 5 6  7 8
   * - spacing = [7,6,5,4,3,2,-1,1,0]
   * + check if spacing[i] > 0 && currentCheckPos !== pos
   * + get spacing's min value
   * + traverse matrix, calculate, check condition, get value
   *
   * + Case 2:
   * - n = 2, pos = [2,1]
   * - ret = 2, retPos = [2,2]
   * matrix
   * --0 1 2
   * 0|9 8 7
   * 1|6 4 5
   * 2|1 2 2
   *
   */
  let spaceMatrix = [];

  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      let spacing = matrix[i][j] - number;
      spaceMatrix = push(spaceMatrix, spacing);
    }
  }

  let spaceClosestMin = Number.POSITIVE_INFINITY;

  for (let i = spaceMatrix.length - 1; i >= 0; --i) {
    if (spaceMatrix[i] > 0 && spaceClosestMin >= spaceMatrix[i]) {
      spaceClosestMin = spaceMatrix[i];
    }
  }

  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      let space = matrix[i][j] - number;
      let checkPos = [i, j];
      if (
        space === spaceClosestMin &&
        !isTheSameCoordinateMatrix(pos, checkPos)
      ) {
        return [i, j];
      }
    }
  }
  return [null, null];
}

/**
 *
 * @param {Array<Array>} matrix
 */
function getMatrixMinValueAndItPosition(matrix) {
  let min = Number.POSITIVE_INFINITY;
  let pos = [];
  for (let i = 0; i <= matrix.length - 1; ++i) {
    for (let j = 0; j <= matrix[i].length - 1; ++j) {
      if (min >= matrix[i][j]) {
        min = matrix[i][j];
        pos = [i, j];
      }
    }
  }
  return {
    min: min,
    position: pos,
  };
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} x
 * @param {Array<Number,Number>} y
 */
function advanceSwap(matrix, x, y) {
  const temporary = matrix[x[0]][x[1]];
  matrix[x[0]][x[1]] = matrix[y[0]][y[1]];
  matrix[y[0]][y[1]] = temporary;
}

/**
 *
 * @param {Array<Array>} matrix
 */
function E319SortItself(matrix) {
  const size = getMatrixSize(matrix);
  let min = getMatrixMinValueAndItPosition(matrix);

  let minPos = min.position;

  let rowIndex = 0;
  let colIndex = 0;
  let swapPos = [rowIndex, colIndex];

  advanceSwap(matrix, swapPos, minPos);
  let nextMinPos = findClosestMatrixNumberPosition(
    matrix[0][0],
    matrix,
    [0, 0]
  );
  colIndex++;

  for (let i = 2; i <= size; ++i) {
    if (colIndex === matrix[0].length) {
      colIndex = 0;
      rowIndex++;
    }
    swapPos = [rowIndex, colIndex];
    advanceSwap(matrix, swapPos, nextMinPos);
    nextMinPos = findClosestMatrixNumberPosition(
      matrix[swapPos[0]][swapPos[1]],
      matrix,
      swapPos
    );

    colIndex++;
  }

  return matrix;
}

function test1() {
  const a1 = [
    [9, 8, 7],
    [3, 1, 2],
    [4, 6, 5],
  ]; // [[1,2,3],[4,5,6],[7,8,9]]
  const a2 = [
    [3, 1, 2],
    [5, 4, 6],
    [9, 8, 7],
  ]; // [[1,2,3],[4,5,6],[7,8,9]]

  console.log(E319Pouring(a1));
  console.log(E319Pouring(a2));
}

function test2() {
  const a1 = [
    [9, 8, 7],
    [3, 1, 2],
    [4, 6, 5],
  ]; // [[1,2,3],[4,5,6],[7,8,9]]
  const a2 = [
    [3, 1, 2],
    [5, 4, 6],
    [9, 8, 7],
  ]; // [[1,2,3],[4,5,6],[7,8,9]]
  const a3 = [
    [9, 8, 7],
    [6, 5, 4],
    [1, 3, 2],
  ];

  console.log(E319SortItself(a1));
  console.log(E319SortItself(a2));
  console.log(E319SortItself(a3));
}

{
  // test1();
  test2();
}
