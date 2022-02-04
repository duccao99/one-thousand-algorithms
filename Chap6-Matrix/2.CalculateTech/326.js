/**
 * Problem: Calculate the average of positive numbers 
 * in a matrix of real numbers
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 -3
 * 1| 4 -5 6
 * 2| -7 8 9
 * 
 * 
 * 
 * 
  const a1 = [[1,2,-3],[4,-5,6],[-7,8,9]];  
  const a2 = [[1,-2,3],[-4,5,6],[7,8,-9]];  
  const a3 = [[1,-2,-3],[-4,-5,-6],[-7,-8,9]];  
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
function E326(matrix) {
  let ret = 0;
  let count = 0;
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isPositiveNumber(matrix[i][j])) {
        count++;
        ret += matrix[i][j];
      }
    }
  }
  ret = ret / count;
  return ret;
}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, -5, 6],
    [-7, 8, 9],
  ];
  const a2 = [
    [1, -2, 3],
    [-4, 5, 6],
    [7, 8, -9],
  ];
  const a3 = [
    [1, -2, -3],
    [-4, -5, -6],
    [-7, -8, 9],
  ];
  console.log(E326(a1));
  console.log(E326(a2));
  console.log(E326(a3));
}

{
  test1();
}
