/**
 * Problem: Sum the values lying on the boundary of the matrix
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 
 * - ret = 1 + 2 + 3 + 4 + 6 + 7 + 8 + 9 = 40
 * 
 * - boundary elements: 
 * + matrix[0][0]
 * + matrix[0][1]
 * + matrix[0][2]
 * 
 * + matrix[1][0]
 * + matrix[1][2]
 * 
 * + matrix[2][0]
 * + matrix[2][1]
 * + matrix[2][2]
 * 
 * - ret = sum all boundary element
 * 
 * + step 1: sum the top boundary elements
 * + step 2: sum the bottom boundary elements
 * + step 3: sum the first column and last column of row != top and bottom
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 40
  const a2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];  //
  const a3 = [[1,2],[3,4]];  // 10
  const a4 = [[2]];  // 2

 * 
 */

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return !isNaN(n) && n >= 0;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function E327(matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) return matrix[0][0];
  if (matrix.length === 1 && matrix[0].length !== 1) {
    let ret = 0;
    for (let i = matrix[0].length - 1; i >= 0; --i) {
      ret += matrix[0][i];
    }
    return ret;
  }

  let sum = 0;
  const firstRowIndex = 0;
  const lastRowIndex = matrix.length - 1;
  // sum first row
  for (let i = matrix[firstRowIndex].length - 1; i >= 0; --i) {
    sum += matrix[firstRowIndex][i];
  }

  // sum boundary row[i] != first row and != last row
  for (let i = 1; i <= matrix.length - 2; i++) {
    sum += matrix[i][0];
    sum += matrix[i][matrix[i].length - 1];
  }

  // sum last row
  for (let i = matrix[lastRowIndex].length - 1; i >= 0; --i) {
    sum += matrix[lastRowIndex][i];
  }

  return sum;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 40
  const a2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]; // 102
  const a3 = [
    [1, 2],
    [3, 4],
  ]; // 10
  const a4 = [[2]]; // 2
  const a5 = [[1, 2, 3]]; // 6
  const a6 = [
    [1, 2, 3],
    [1, 2, 3],
  ]; // 12
  const a7 = [[1, 2]]; // 3
  const a8 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]; // 20

  console.log(E327(a1));
  console.log(E327(a2));
  console.log(E327(a3));
  console.log(E327(a4));
  console.log(E327(a5));
  console.log(E327(a6));
  console.log(E327(a7));
  console.log(E327(a8));
}

{
  test1();
}
