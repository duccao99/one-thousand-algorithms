/**
 * Problem: Let's check if the matrix contains any perfect number 
 * or not
 * 
 * Understanding the problem
 * 
  const m1 = [[1,2,3],[-1,-2,-3],[4,5,6]]; // true
  const m2 = [[-1,-2],[-3,-4]]; // false
  const m3 = [[1,2],[-3,-4]]; // false
  const m4 = [[28,2],[-3,-4]]; // true

 * 
 * 
 * Approach
 * + step 1: write a function to check if a number was a perfect number
 * + step 2: traverse matrix, check, get result 
 * 
 * 
 *
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
function getDivisorsOfNumber(n) {
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
  if (isNaN(n)) {
    return false;
  }
  let divisors = getDivisorsOfNumber(n);
  let sum = 0;

  for (let i = divisors.length - 1; i >= 0; --i) {
    sum += divisors[i];
  }

  return sum === n;
}

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return !isNaN(n) && n >= 0;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let flag = false;

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (isPerfectNumber(m[i][j])) {
        flag = true;
        break;
      }
    }
  }

  return flag;
}

function test1() {
  const m1 = [
    [1, 2, 3],
    [-1, -2, -3],
    [4, 5, 6],
  ]; // true
  const m2 = [
    [-1, -2],
    [-3, -4],
  ]; // false
  const m3 = [
    [1, 2],
    [-3, -4],
  ]; // false
  const m4 = [
    [28, 2],
    [-3, -4],
  ]; // true

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
  console.log(fx(m4));
}
{
  test1();
}
