/**
 * Problem: Count the number of perfect numbers
 * on a row in matrix of integer
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 6            
 * 1| 2 6 6               
 * 2| 6 6 6    
 *         
 * - rowIndex = 1  
 * - ret = 2
 *  
  const a1 = [[1,2,6],[2,6,6],[6,6,6]];  
  const r1 = 0 // 1
  const r2 = 1 // 2
  const r3 = 2 // 3
 * 
 */

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}
/**
 *
 * @param {Number} n
 */
function getDivisors(n) {
  let divisors = [];
  for (let i = n - 1; i >= 1; --i) {
    if (n % i === 0) {
      divisors = push(divisors, i);
    }
  }
  return divisors;
}
/**
 *
 * @param {Number} n
 */
function isPerfectNumber(n) {
  let divisors = getDivisors(n);
  let sum = 0;
  for (let i = divisors.length - 1; i >= 0; --i) {
    sum += divisors[i];
  }
  return sum === n;
}
/**
 *
 * @param {Array<Array>} matrix
 * @param {Number} matrix
 */
function fx(matrix, rowIndex) {
  let count = 0;

  for (let i = matrix[rowIndex].length - 1; i >= 0; --i) {
    if (isPerfectNumber(matrix[rowIndex][i])) {
      count++;
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 6],
    [2, 6, 6],
    [6, 6, 6],
  ];
  const r1 = 0; // 1
  const r2 = 1; // 2
  const r3 = 2; // 3
  console.log(fx(a1, r1));
  console.log(fx(a1, r2));
  console.log(fx(a1, r3));
}

{
  test1();
}
