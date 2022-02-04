/**
 * Problem: Count the number of negative numbers 
 * on a column in a matrix of real numbers
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
 * - rowIndex = 1  
 * - ret = 2
 *  
  const a1 = [[-1,-2,-6],[2,-6,-6],[6,6,-6]];  
  const c1 = 0 // 1
  const c2 = 1 // 2
  const c3 = 2 // 3
 * 
 */

function isNegativeNumber(n) {
  return n <= 0;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Number} columnIndex
 */
function fx(matrix, columnIndex) {
  let count = 0;
  for (let i = matrix.length - 1; i >= 0; --i) {
    if (isNegativeNumber(matrix[i][columnIndex])) {
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
  ];
  const c1 = 0; // 1
  const c2 = 1; // 2
  const c3 = 2; // 3
  console.log(fx(a1, c1));
  console.log(fx(a1, c2));
  console.log(fx(a1, c3));
}

{
  test1();
}
