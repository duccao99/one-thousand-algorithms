/**
 * Problem: Transform matrix by replacing the negative numbers
 * by their absolute number
 * 
 * Understanding the problem
  const a1 = [[1,2,-3],[4,-5,6],[-7,8,9]];
  const a2 = [[-1,2,3,4],[5,-6,7,8],[9,10,-11,12],[13,14,15,-16]];  
  const a3 = [[1,-2],[-3,4]];  // 
  const a4 = [[-2]];  //

 * 
 */

/**
 *
 * @param {Number} n
 */
function isNegativeNumber(n) {
  return !isNaN(n) && n <= 0;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function E329(matrix) {
  console.log(matrix);
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isNegativeNumber(matrix[i][j])) {
        matrix[i][j] = Math.abs(matrix[i][j]);
      }
    }
  }
  return matrix;
}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, -5, 6],
    [-7, 8, 9],
  ];
  const a2 = [
    [-1, 2, 3, 4],
    [5, -6, 7, 8],
    [9, 10, -11, 12],
    [13, 14, 15, -16],
  ];
  const a3 = [
    [1, -2],
    [-3, 4],
  ]; //
  const a4 = [[-2]]; //
  console.log(E329(a1));
  console.log(E329(a2));
  console.log(E329(a3));
  console.log(E329(a4));
}

{
  test1();
}
