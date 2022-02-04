/**
 * Problem: Count the number of positive numbers on the 
 * boundary in a matrix of real numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| -1 -2 -6            
 * 1| 2 -6 -6               
 * 2| 6 6 -6    
 *         
 *   
 * - ret = 3
 *  
  const a1 = [[-1,-2,-6],[2,-6,-6],[6,6,-6]]; // 3
  const a2 = [[1,2,6],[2,6,6],[6,6,6]]; // 8
  const a3 = [[-1,-2,-6,1],[2,-6,6,3],[1,2,-3,4],[6,6,-6,6]]; // 8
 
 * 
 */

function isPositiveNumber(n) {
  return !isNaN(n) && n >= 0;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function fx(matrix) {
  let count = 0;

  for (let i = matrix[0].length - 1; i >= 0; --i) {
    if (isPositiveNumber(matrix[0][i])) {
      count++;
    }
  }

  for (let i = 1; i <= matrix.length - 2; ++i) {
    if (isPositiveNumber(matrix[i][0])) {
      count++;
    }
    if (isPositiveNumber(matrix[i][matrix[i].length - 1])) {
      count++;
    }
  }

  for (let i = matrix[matrix.length - 1].length - 1; i >= 0; --i) {
    if (isPositiveNumber(matrix[matrix.length - 1][i])) {
      count++;
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [-1, -2, -6],
    [2, -6, -6],
    [6, 6, -6],
  ]; // 3
  const a2 = [
    [1, 2, 6],
    [2, 6, 6],
    [6, 6, 6],
  ]; // 8
  const a3 = [
    [-1, -2, -6, 1],
    [2, -6, 6, 3],
    [1, 2, -3, 4],
    [6, 6, -6, 6],
  ]; // 8
  console.log(fx(a1));
  console.log(fx(a2));
  console.log(fx(a3));
}

{
  test1();
}
