/**
 * Problem: Given an array of number a. Build an array b from a
 * so that b only contains the prime numbers 
 * 
 * Understanding the problem
 * 
  const a1 = [1,2,3,4,5]; // [2,3,5]
  const a2 = [0,1,2,3,4,5,6,7,8,9]; // [2,3,5,7]
  const a3 = [4,6]; // []
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
function isPrimeNumber(n) {
  if (n === 0 || n === 1) return false;
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
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}
/**
 *
 * @param {Array} a
 */
function reverse(a) {
  const mid = Math.round(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    swap(a, i, a.length - i - 1);
  }
  return a;
}
/**
 *
 * @param {Array} a
 */
function E310(a) {
  let b = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPrimeNumber(a[i])) {
      b = push(b, a[i]);
    }
  }

  return reverse(b);
}

function test1() {
  const a1 = [1, 2, 3, 4, 5]; // [2,3,5]
  const a2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // [2,3,5,7]
  const a3 = [4, 6]; // []

  console.log(E310(a1));
  console.log(E310(a2));
  console.log(E310(a3));
}

{
  test1();
}
