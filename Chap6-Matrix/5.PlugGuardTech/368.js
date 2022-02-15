/**
 * Problem: Find the second maximum value in matrix
 * 
 * 
 * - Matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 
 * - ret = 8
 *
 * 
 * 
 const b1 = [
    [1, 2, 3],
    [3, 4, 4],
    [5, 6, 7],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];

  const b3 = [
    [2, 3],
    [4, 5],
  ];

  const b4 = [
    [1, 2, 1, 2],
    [3, 4, 3, 4],
    [1, 2, 1, 2],
    [3, 4, 3, 4],
  ];

  const b5 = [
    [1, 2, 5, 5],
    [3, 4, 5, 5],
    [5, 5, 1, 2],
    [5, 5, 3, 4],
  ];


 * 
 * 
 * /



 


  

  

  
/**
 *
 * @param {Array<Array>} a
 */
function fx1(a) {
  let maximumGuard = a[0][0];
  let secondMaximumGuard = a[0][0];
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = a[i].length - 1; j >= 0; --j) {
      if (maximumGuard <= a[i][j]) {
        maximumGuard = a[i][j];
      }
    }
  }

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = a[i].length - 1; j >= 0; --j) {
      if (secondMaximumGuard <= a[i][j] && a[i][j] < maximumGuard) {
        secondMaximumGuard = a[i][j];
      }
    }
  }

  return secondMaximumGuard;
}

function test1() {
  const b1 = [
    [1, 2, 3],
    [3, 4, 4],
    [5, 6, 7],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];

  const b3 = [
    [2, 3],
    [4, 5],
  ];

  const b4 = [
    [1, 2, 1, 2],
    [3, 4, 3, 4],
    [1, 2, 1, 2],
    [3, 4, 3, 4],
  ];

  const b5 = [
    [1, 2, 5, 5],
    [3, 4, 5, 5],
    [5, 5, 1, 2],
    [5, 5, 3, 4],
  ];
  console.log(fx1(b1)); // 6
  console.log(fx1(b2)); // 3
  console.log(fx1(b3)); // 4
  console.log(fx1(b4)); // 3
  console.log(fx1(b5)); // 4
}

{
  test1();
}
