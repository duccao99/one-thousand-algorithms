/**
 * Problem: Let's sum perfect numbers in matrix of integer
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
 * - ret = 6
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 6
  const a2 = [[1,2,3],[4,5,6],[7,8,6]]; // 12
  const a3 = [[1,2,3],[4,5,6],[28,8,9]]; // 34
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
function getDivisorsOfN(n) {
  if (isNaN(n)) return [];
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
  /**
   * - 6
   * - divisors: 1 2 3
   * - 1 + 2 + 3 = 6
   *
   * - 28
   * - divisors: 1 2 4 7 14
   * - 1 + 2 + 4 + 7 + 14 = 28
   *
   */
  let divisors = getDivisorsOfN(n);

  let sum = 0;
  for (let i = divisors.length - 1; i >= 0; --i) {
    sum += divisors[i];
  }

  return sum === n;
}
/**
 *
 * @param {Array<Array>} matrix
 *
 *
 */
function E333(matrix) {
  let sum = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isPerfectNumber(matrix[i][j])) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 6
  const a2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 6],
  ]; // 12
  const a3 = [
    [1, 2, 3],
    [4, 5, 6],
    [28, 8, 9],
  ]; // 34

  const a4 = [
    [6, 6, 6],
    [6, 6, 6],
    [6, 6, 6],
  ]; // 6

  const a5 = [
    [28, 28, 28],
    [28, 28, 28],
    [28, 28, 28],
  ]; // 6

  const a6 = [
    [496, 496, 496],
    [496, 496, 496],
    [496, 496, 496],
  ]; // 6

  console.log(E333(a1));
  console.log(E333(a2));
  console.log(E333(a3));
  console.log(E333(a4));
  console.log(E333(a5));
  console.log(E333(a6));
}

{
  test1();
}
