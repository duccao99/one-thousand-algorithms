/**
 * Problem: Find the first prime number in matrix of integer
 * 
 * 
 * - Matrix
 * -- 0 1 2
 * 0| -1 -2 3
 * 1| 4 5 9
 * 2| -7 -8 -9
 * 3| 7 8 9
 * 
 * - ret1 = 3
 * - ret2 = 7
 * 
 * 
 * 
 *
 * 
 * 
 const b1 = [
    [-1, -2, 3],
    [4, 5, 9],
    [-7, -8, -9],
    [7, 8, 9],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, -2],
    [1, -3, -4],
  ];


 * 
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx1(m) {
  let ret = null;
  for (let i = 0; i <= m.length - 1; ++i) {
    let haveFound = false;
    for (let j = 0; j <= m[i].length - 1; ++j) {
      if (isPrimeNumber(m[i][j])) {
        ret = m[i][j];
        haveFound = true;
        break;
      }
    }
    if (haveFound) {
      break;
    }
  }
  return ret;
}

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (isNaN(n) || n < 0) return false;
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function test1() {
  const b1 = [
    [-1, -2, 3],
    [4, 5, 9],
    [-7, -8, -9],
    [7, 8, 9],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, -2],
    [1, -3, -4],
  ];

  console.log(fx1(b1));
  console.log(fx1(b2));
}

/**
 *
 * @param {Array<Array>} m
 */
function fx2(m) {
  let ret = null;
  for (let i = m.length - 1; i >= 0; --i) {
    let haveFound = false;
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (isPrimeNumber(m[i][j])) {
        ret = m[i][j];
        haveFound = true;
        break;
      }
    }
    if (haveFound) {
      break;
    }
  }
  return ret;
}

function test2() {
  const b1 = [
    [-1, -2, 3],
    [4, 5, 9],
    [-7, -8, -9],
    [7, 8, 9],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, -2],
    [1, -3, -4],
  ];

  console.log(fx2(b1));
  console.log(fx2(b2));
}

{
  test1();
  console.log("");
  test2();
}
