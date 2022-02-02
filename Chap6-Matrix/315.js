/**
 * Problem: Write a function to find the maximum value
 * in matrix of number
 * 
 * Understanding the problem
 * 
 * --0 1 2
 * 0|1 2 3
 * 1|7 8 9
 * 2|4 5 6
 * - ret = 9
 * 
  const a1 = [[1,2,3],[7,8,9],[4,5,6]]; // 9
  const a2 = [[1,1,1],[1,1,1],[1,1,1]]; // 1
  const a3 = [[1,2],[3,4]]; // 4
  const a4 = [[4,3],[1,2]]; // 4
  const a5 = [[],[],[]]; // null
 * 
 * Approach
 * + step 1: declare max = negative infinity
 * + step 2: traverse matrix, update max
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 */
function E315(matrix) {
  let max = Number.NEGATIVE_INFINITY;

  let isMatrixEmpty = true;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (max <= matrix[i][j]) {
        max = matrix[i][j];
        isMatrixEmpty = false;
      }
    }
  }

  if (isMatrixEmpty === true) {
    return "null";
  }

  return max;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [7, 8, 9],
    [4, 5, 6],
  ]; // 9
  const a2 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]; // 1
  const a3 = [
    [1, 2],
    [3, 4],
  ]; // 4
  const a4 = [
    [4, 3],
    [1, 2],
  ]; // 4
  const a5 = [[], [], []]; // null
  console.log(E315(a1));
  console.log(E315(a2));
  console.log(E315(a3));
  console.log(E315(a4));
  console.log(E315(a5));
}

{
  test1();
}
