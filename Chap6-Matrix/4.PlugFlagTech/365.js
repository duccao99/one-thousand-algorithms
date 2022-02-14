/**
 * Problem: Given two matrixes A and B. Count the number of apperance
 * of matrix A in matrix B
 *  
 *
 * Understanding the problem
 * 
 * - Matrix A
 * -- 0 1
 * 0| 1 2
 * 1| 3 4
 * 
 * - Matrix B
 * -- 0 1 2 3
 * 0| 1 2 1 1 
 * 1| 3 4 1 1
 * 2| 1 2 1 1
 * 3| 3 4 1 1 
 * 
 * - ret = 2
 * 
 * Approach
 * + step 1: get the matrix A last element
 *           a[a.length-1][a[0].length-1]
 * + step 2: reverse traverse matrix B
 *           if the value at current coordinate 
 *           is equal to step 1 result then
 *           start reverse traverse matrix 
 *           such that equal to when we reverse traverse matrix A
 * + step 3: get subMatrix
 * + step 4: compare subMatrix with matrix A
 *           if equal then count
 *           
 *   
 * 
 * 
 const a1 = [
    [1, 2],
    [3, 4],
  ];
  const b1 = [
    [1, 2, 3],
    [3, 4, 4],
    [5, 6, 7],
  ];

  const a2 = [
    [1, 2],
    [3, 4],
  ];
  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];

  const a3 = [[1]];
  const b3 = [
    [2, 3],
    [4, 5],
  ];

  const a4 = [
    [1, 2],
    [3, 4],
  ];
  const b4 = [
    [1, 2, 1, 2],
    [3, 4, 3, 4],
    [1, 2, 1, 2],
    [3, 4, 3, 4],
  ];

  const a5 = [
    [1, 2],
    [3, 4],
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
 * @param {Array<Array>} b
 * 
 */
function fx(a, b) {
  const aLastElement = a[a.length - 1][a[0].length - 1];
  let ret = 0;
  for (let i = b.length - 1; i >= 0; --i) {
    for (let j = b[i].length - 1; j >= 0; --j) {
      if (b[i][j] === aLastElement) {
        /* 
         start reverse traverse such like
         reverse traverse matrix A
        */
        let subMatrix = [];
        let traverseRowBreaker = a.length - 1;
        for (let k = i; k >= 0 && traverseRowBreaker >= 0; --k) {
          let traverseColumnBreaker = a[0].length - 1;
          let row = [];
          for (let l = j; l >= 0 && traverseColumnBreaker >= 0; --l) {
            traverseColumnBreaker--;
            row = push(row, b[k][l]);
          }
          subMatrix = push(subMatrix, reverse(row));
          traverseRowBreaker--;
        }

        if (isMatrixAEqualToMatrixB(reverse(subMatrix), a)) {
          ret++;
        }
      }
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function reverse(a) {
  const mid = Math.floor(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }
  return a;
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
function advanceLogMatrix(matrix) {
  let columnIndex = "--";
  for (let i = matrix[0].length - 1; i >= 0; --i) {
    columnIndex += matrix[0].length - i - 1 + " ";
  }
  console.log(columnIndex);
  for (let i = matrix.length - 1; i >= 0; --i) {
    let row = matrix.length - i - 1 + "|";
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      row += matrix[matrix.length - i - 1][matrix[0].length - j - 1] + " ";
    }
    console.log(row);
  }
}
/**
 *
 * @param {Array<Array>} a
 * @param {Array<Array>} b
 */
function isMatrixAEqualToMatrixB(a, b) {
  if (a.length !== b.length) return false;
  let flag = true;

  for (let i = a.length - 1; i >= 0; --i) {
    let subFlag = true;
    for (let j = a[i].length - 1; j >= 0; --j) {
      if (a[i][j] !== b[i][j]) {
        subFlag = false;
        break;
      }
    }
    if (subFlag === false) {
      flag = subFlag;
      break;
    }
  }
  return flag;
}

/**
 *
 * @param {Array} a
 *
 */
function test1() {
  const a1 = [
    [1, 2],
    [3, 4],
  ];
  const b1 = [
    [1, 2, 3],
    [3, 4, 4],
    [5, 6, 7],
  ];

  const a2 = [
    [1, 2],
    [3, 4],
  ];
  const b2 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 3, 4],
  ];

  const a3 = [[1]];
  const b3 = [
    [2, 3],
    [4, 5],
  ];

  const a4 = [
    [1, 2],
    [3, 4],
  ];
  const b4 = [
    [1, 2, 1, 2],
    [3, 4, 3, 4],
    [1, 2, 1, 2],
    [3, 4, 3, 4],
  ];

  const a5 = [
    [1, 2],
    [3, 4],
  ];
  const b5 = [
    [1, 2, 5, 5],
    [3, 4, 5, 5],
    [5, 5, 1, 2],
    [5, 5, 3, 4],
  ];
  console.log(fx(a1, b1));
  console.log(fx(a2, b2));
  console.log(fx(a3, b3));
  console.log(fx(a4, b4));
  console.log(fx(a5, b5));
}

{
  test1();
}
