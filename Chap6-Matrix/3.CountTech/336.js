/**
 * Problem: Count the frequency of occurence 
 * of a value x in a matrix of real numbers
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
 * - x = 2
 * - ret = 4
 * 
  const a1 = [[1,2,3],[2,5,2],[7,2,9]]; // 4
  const x1 = 2

  const a2 = [[1,2,1],[2,5,2],[1,2,1]]; // 4
  const x2 = 1

  const a3 = [[1,2,1],[2,5,2],[1,2,1]]; // 1
  const x3 = 5


  
  * 
 */

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (isNaN(n)) return false;

  if (n === 0 || n === 1) return false;

  let flag = true;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}
/**
 *
 * @param {Array<Array>} matrix
 *
 *
 */
function E336(matrix, x) {
  let count = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (matrix[i][j] === x) {
        count++;
      }
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [2, 5, 2],
    [7, 2, 9],
  ]; // 4
  const x1 = 2;

  const a2 = [
    [1, 2, 1],
    [2, 5, 2],
    [1, 2, 1],
  ]; // 4
  const x2 = 1;

  const a3 = [
    [1, 2, 1],
    [2, 5, 2],
    [1, 2, 1],
  ]; // 1
  const x3 = 5;

  console.log(E336(a1, x1)); // 4
  console.log(E336(a2, x2)); // 4
  console.log(E336(a3, x3)); // 1
}

{
  test1();
}
