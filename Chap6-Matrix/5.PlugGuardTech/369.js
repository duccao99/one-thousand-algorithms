/**
 * Problem: Find the first positive number in matrix
 * 
 * - Matrix
 * -- 0 1 2
 * 0| -1 -2 3
 * 1| 4 5 6
 * 2| -7 -8 -9
 * 
 * - Linear traverse ret = 3
 * - Reverse traverse ret = 6
 * 
 *
 * 
 * 
 const b1 = [
    [-1, -2, 3],
    [3, 4, 6],
    [-5, -6, -7],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];


 * 
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx1(m) {
  // Linear traverse
  let guard = -1;
  for (let i = 0; i <= m.length - 1; ++i) {
    let haveFound = false;
    for (let j = 0; j <= m[i].length - 1; ++j) {
      if (m[i][j] >= 0) {
        guard = m[i][j];
        haveFound = true;
        break;
      }
    }
    if (haveFound) {
      break;
    }
  }
  return guard;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx2(m) {
  // Reverse traverse
  let guard = -1;
  for (let i = m.length - 1; i >= 0; --i) {
    let haveFound = false;
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (m[i][j] > 0) {
        guard = m[i][j];
        haveFound = true;
        break;
      }
    }
    if (haveFound) {
      break;
    }
  }
  return guard;
}

function test1() {
  const b1 = [
    [-1, -2, 3],
    [3, 4, 6],
    [-5, -6, -7],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];

  console.log(fx1(b1)); // 3
  console.log(fx1(b2)); // 1
}

function test2() {
  const b1 = [
    [-1, -2, 3],
    [3, 4, 6],
    [-5, -6, -7],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];

  console.log(fx2(b1)); // 6
  console.log(fx2(b2)); // 4
}

{
  test1();
  test2();
}
