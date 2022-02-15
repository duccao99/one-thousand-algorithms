/**
 * Problem: Find the maximum value in matrix 
 * Understanding the problem
 * 
 * 
 * - Matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 
 * ret = 9
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
  let guard = a[0][0];
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = a[i].length - 1; j >= 0; --j) {
      if (a[i][j] > guard) {
        guard = a[i][j];
      }
    }
  }
  return guard;
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
  console.log(fx1(b1)); // 7
  console.log(fx1(b2)); // 4
  console.log(fx1(b3)); // 5
  console.log(fx1(b4)); // 4
  console.log(fx1(b5)); // 5
}

{
  test1();
}
