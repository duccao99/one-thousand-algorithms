/**
 * Problem: Write a function to count the prime number 
 * in the matrix of number
 * 
 * Understanding the problem
 * --0 1 2
 * 0|1 2 3
 * 1|4 5 6
 * 2|7 8 9
 * - primes: [2,3,5,7]
 * - count: 4
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 4
  const a2 = [[1,2],[3,4]]; // 2
  const a3 = [[1,1],[0,0]]; // 0
  const a4 = [[2,5],[7,11]]; // 4
 * 
 * Approach
 * + step 1: write a function to check if a number was a prime number
 * + step 2: traverse matrix, get primes number
 * + step 3: count step 2 result
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (isNaN(n)) {
    return false;
  }

  if (n === 0 || n === 1) {
    return false;
  }

  let flag = true;

  for (let i = Math.floor(Math.sqrt(n)); i >= 2; --i) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

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
 * @param {Array<Array>} matrix
 */
function E317(matrix) {
  let primes = [];

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isPrimeNumber(matrix[i][j])) {
        primes = push(primes, matrix[i][j]);
      }
    }
  }

  let count = 0;

  for (let i = primes.length - 1; i >= 0; --i) {
    count++;
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 4
  const a2 = [
    [1, 2],
    [3, 4],
  ]; // 2
  const a3 = [
    [1, 1],
    [0, 0],
  ]; // 0
  const a4 = [
    [2, 5],
    [7, 11],
  ]; // 4

  console.log(E317(a1));
  console.log(E317(a2));
  console.log(E317(a3));
  console.log(E317(a4));
}

{
  test1();
}
