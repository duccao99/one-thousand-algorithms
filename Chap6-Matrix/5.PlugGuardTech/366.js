/**
 * Problem: Find the first even number 
 * in the matrix of integer
 *
 * Understanding the problem
 * 
 * 
 * - Matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * |2 7 8 9
 * 
 * - Linear traverse first even number: 2
 * - Reverse traverse first even number: 8
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
  let guard = null;
  for (let i = 0; i <= a.length - 1; i++) {
    let isFound = false;
    for (let j = 0; j <= a[i].length - 1; ++j) {
      if (isEvenNumber(a[i][j])) {
        guard = a[i][j];
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  return guard;
}
/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return !isNaN(n) && n % 2 === 0;
}

/**
 *
 * @param {Array<Array>} a
 */
function fx2(a) {
  let guard = null;
  for (let i = a.length - 1; i >= 0; --i) {
    let haveFound = false;
    for (let j = a[i].length - 1; j >= 0; --j) {
      if (isEvenNumber(a[i][j])) {
        guard = a[i][j];
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

function test2() {
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
  console.log(fx2(b1)); // 6
  console.log(fx2(b2)); // 4
  console.log(fx2(b3)); // 4
  console.log(fx2(b4)); // 4
  console.log(fx2(b5)); // 4
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
  console.log(fx1(b1)); // 2
  console.log(fx1(b2)); // 2
  console.log(fx1(b3)); // 2
  console.log(fx1(b4)); // 2
  console.log(fx1(b5)); // 2
}

{
  test1();
  console.log("");
  test2();
}
