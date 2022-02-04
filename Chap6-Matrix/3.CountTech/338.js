/**
 * Problem: Count the number of positive numbers on a row
 * in matrix of real numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 3            
 * 1| 2 -5 2               
 * 2| 7 2 9    
 *         
 * - rowIndex = 1  
 *   + matrix[1][0] > 0
 *   + matrix[1][1] < 0 count
 *   + matrix[1][2] >0
 *   -> i: [len -1,0]
 *   + matrix[rowIndex][i]
 * 
 * - ret = 2
 * 
  const a1 = [[1,2,3],[2,-5,2],[-7,-2,-9]]; // 
  const r1 = 0 // 0
  const r2 = 1 // 1
  const r3 = 2 // 3
 * 
 */

function isNegativeNumber(n) {
  return !isNaN(n) && n <= 0;
}
/**
 *
 * @param {Array<Array>} matrix
 * @param {Number} matrix
 */
function fx(matrix, rowIndex) {
  let count = 0;

  for (let i = matrix[rowIndex].length - 1; i >= 0; --i) {
    if (isNegativeNumber(matrix[rowIndex][i])) {
      count++;
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [2, -5, 2],
    [-7, -2, -9],
  ];
  const r1 = 0; // 0
  const r2 = 1; // 1
  const r3 = 2; // 3

  console.log(fx(a1, r1)); // 0
  console.log(fx(a1, r2)); // 1
  console.log(fx(a1, r3)); // 3
}

{
  test1();
}
