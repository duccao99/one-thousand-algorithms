/**
 * Problem: Find the greatest negative number in the matrix
 * 
 * - Matrix
 * -- 0 1 2
 * 0| -1 -2 3
 * 1| 4 5 6
 * 2| -7 -8 -9
 * 
 * - Linear traverse ret = -1
 * 
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
function fx(m) {
  let guard = Number.NEGATIVE_INFINITY;

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (m[i][j] < 0 && guard < m[i][j]) {
        guard = m[i][j];
      }
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
    [1, 1, -2],
    [1, -3, -4],
  ];

  console.log(fx(b1)); // -1
  console.log(fx(b2)); // -2
}

{
  test1();
}
