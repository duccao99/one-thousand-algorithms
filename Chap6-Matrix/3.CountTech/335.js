/**
 * Problem: Write a function to count prime numbers 
 * in matrix of integer
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 3            
 * 1| 4 5 6               
 * 2| 7 8 9              
 * 
 * - primes = [2,3,5,7]
 * - ret = 4
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 4
  const a2 = [[1,2],[3,4]]; // 2
  const a3 = [[]]; // 0
  
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
function E335(matrix) {
  let count = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isPrimeNumber(matrix[i][j])) {
        count++;
      }
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 5
  const a2 = [
    [1, 2],
    [3, 4],
  ]; // 2
  const a3 = [[]]; // 0
  console.log(E335(a1)); // 5
  console.log(E335(a2)); // 2
  console.log(E335(a3)); // 0
}

{
  test1();
}
