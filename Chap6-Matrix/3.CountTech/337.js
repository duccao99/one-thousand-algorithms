/**
 * Problem: Count the number of digits in a
 * matrix of integers 
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 3            
 * 1| 2 5 2               
 * 2| 7 2 9    
 *           
 * - ret = 9
 * 
  const a1 = [[1,2,3],[2,5,2],[7,2,9]]; // 9
  const a2 = [[11,21,11],[21,51,21],[11,21,11]]; // 18
  const a3 = [[1,2,1],[2,5,2],[1,2,11]]; // 10
 * 
 */

/**
 *
 * @param {Number} n
 */
function getNumberOfDigitsOfNumber(n) {
  /**
   * - 1
   * - ret = 1
   *
   * - 11
   *   + 11/10 = 1
   *   + 1/10 = 0
   * - ret = 2
   *
   *
   */
  let temporary = n;
  let count = 0;
  while (temporary !== 0) {
    temporary = Math.floor(temporary / 10);
    count++;
  }
  return count;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 *
 */
function E337(matrix) {
  let count = 0;
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      let numberOfDigits = getNumberOfDigitsOfNumber(matrix[i][j]);
      count += numberOfDigits;
    }
  }
  return count;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [2, 5, 2],
    [7, 2, 9],
  ]; // 9
  const a2 = [
    [11, 21, 11],
    [21, 51, 21],
    [11, 21, 11],
  ]; // 18
  const a3 = [
    [1, 2, 1],
    [2, 5, 2],
    [1, 2, 11],
  ]; // 10
  console.log(E337(a1)); // 9
  console.log(E337(a2)); // 18
  console.log(E337(a3)); // 10
}

{
  test1();
}
