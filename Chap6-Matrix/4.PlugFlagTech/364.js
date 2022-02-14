/**
 * Problem: Given two matrix A and B, let's check 
 * if the A matrix was a B matrix's children or not
 *  
 *
 * Understanding the problem
 * + Scenario 1
 * - matrix A 
 * -- 0 1
 * 0| 1 2
 * 1| 3 4
 * 
 * - matrix B 
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 3 4 4
 * 2| 5 6 7
 * 
 * Approach
 * + step 1: if b.length < a.length then ret = {isChild:false}
 * + step 2: traverse matrix B
 *         + step 2.1: if b[i][j] = a[a.len-1][a[0].len-1]
 *         then traverse sub matrix b
 *           + if sub matrix b values are equal to matrix a
 *             then we got result  
 *           + if sub matrix b values are not equal to matrix a
 *             then continue traverse matrix b
 * 
 * - ret = {
 *    isChild:true
 *    position: 
 *      1 2 *
 *      3 4 *
 *      * * *
 * }
 * 
 * 
 * + Scenario 2
 * 
 * - matrix A2
 * -- 0 1
 * 0| 1 2 
 * 1| 3 4
 * - matrix B2
 * -- 0 1 2
 * 0| 1 1 1
 * 1| 1 1 2 
 * 2| 1 3 4 
 * 
 * - ret = {
 *   isChild:true
 *   position: 
 *   * * *
 *   * 1 2
 *   * 3 4 
 *  }
 * 
 * 
 * + Scenario 3
 * - matrix A3
 * -- 0
 * 0| 1
 * - matrix B3
 * -- 0 1 
 * 0| 2 3
 * 1| 4 5
 * 
 * ret = {
 *  isChild:false
 * }
 *
 * 
 * - matrix a4
 * -- 0 1 
 * 0| 1 2
 * 1| 3 4
 * - matrix b4
 * -- 0 1 2 3 
 * 0| 1 2 5 5
 * 1| 3 4 5 5
 * 2| 5 5 1 2
 * 3| 5 5 3 4
 * 
  const a1 = [[1,2],[3,4]]
  const b1 = [[1,2,3],[3,4,4],[5,6,7]]

  const a2 = [[1,2],[3,4]]
  const b2 = [[1,1,1],[1,1,2],[1,3,4]]

  const a3 = [[1]]
  const b3 = [[2,3],[4,5]]

  const a4 = [[1,2],[3,4]]
  const b4 = [[1,2,5,5],[3,4,5,5],[5,5,1,2],[5,5,3,4]]


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
  if (b.length < a.length) {
    return {
      isChild: "Matrix A was not a Matrix B child",
      coordinate: "coordinate not found",
    };
  }

  const aLastValue = a[a.length - 1][a[0].length - 1];
  const ret = {
    isChild: false,
    coordinate: "",
  };

  for (let i = b.length - 1; i >= 0; --i) {
    for (let j = b[i].length - 1; j >= 0; --j) {
      if (b[i][j] === aLastValue) {
        // traverse sub matrix
        let subMatrix = [];
        let rowTraverseTime = a.length;
        let coordinates = [];

        for (let k = i; k >= 0 && rowTraverseTime > 0; --k) {
          const row = [];
          let columnTraverseTime = a[0].length;
          for (let l = j; l >= 0 && columnTraverseTime > 0; --l) {
            row.push(b[k][l]);

            coordinates.push([k, l]);
            columnTraverseTime--;
          }
          subMatrix.push(reverse(row));
          rowTraverseTime--;
        }
        subMatrix = reverse(subMatrix);
        if (isMatrixAEqualToMatrixB(subMatrix, a)) {
          const temporary = refereringMatrix(b);

          ret.isChild = "Matrix A was a Matrix B child";
          ret.coordinate +=
            "Coordinate\n" + drawMatrixCoordinate(coordinates, temporary);
        }
      }
    }
  }

  if (ret.isChild === undefined) {
    return {
      isChild: "Matrix A was not a Matrix B child",
      coordinate: "coordinate not found",
    };
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} a
 */
function refereringMatrix(a) {
  const ret = [];
  for (let i = 0; i <= a.length - 1; i++) {
    const row = [];
    for (let j = 0; j <= a[i].length - 1; ++j) {
      row.push(a[i][j]);
    }
    ret.push(row);
  }
  return ret;
}

/**
 *
 * @param {Array} coordinates
 * @param {Array<Array>} matrix
 *
 *
 */
function drawMatrixCoordinate(coordinates, matrix) {
  /**
   * + scenario 1
   * - subMatrix
   * -- 0 1
   * 0| 1 2
   * 1| 3 4
   *
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 3 4 5
   * 2| 6 7 8
   *
   * - ret
   * -- 0 1 2
   * 0| 1 2 *
   * 1| 3 4 *
   * 2| * * *
   *
   * + step 1: get array of subMatrix coordinates
   * + step 2: traverse matrix, if current coordinates is difference
   * from step 1 result then fill it by *
   * ->
   *
   *
   * + scenario 2
   * - subMatrix
   * -- 0 1
   * 0| 1 2
   * 1| 3 4
   *
   * - matrix
   * -- 0 1 2
   * 0| 1 1 1
   * 1| 1 1 2
   * 2| 1 3 4
   *
   *
   *
   *
   *
   *
   *
   */

  let ret = "";

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      const currentCoordinate = [i, j];
      let isCurrentCoordinateInCoordinates = false;
      for (let k = coordinates.length - 1; k >= 0; --k) {
        if (isArrayAEqualToArrayB(coordinates[k], currentCoordinate)) {
          isCurrentCoordinateInCoordinates = true;
          break;
        }
      }
      if (isCurrentCoordinateInCoordinates === false) {
        matrix[i][j] = "*";
      }
    }
  }

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      ret += matrix[matrix.length - i - 1][matrix[0].length - j - 1] + " ";
    }
    ret += "\n";
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 *
 */
function isArrayAEqualToArrayB(a, b) {
  if (a.length !== b.length) return false;
  let flag = true;
  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] !== b[i]) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 *
 * @param {Array<Array>} a
 * @param {Array<Array>} b
 *
 *
 */
function isMatrixAEqualToMatrixB(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let flag = true;
  for (let i = a.length - 1; i >= 0; --i) {
    let isEqual = true;
    for (let j = a[i].length - 1; j >= 0; --j) {
      if (a[i][j] !== b[i][j]) {
        isEqual = false;
        break;
      }
    }
    if (isEqual === false) {
      flag = isEqual;
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
function reverse(a) {
  const mid = Math.round(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }
  return a;
}

/**
 *
 * @param {Array<Array>} m
 *
 */
function advanceLogMatrix(m) {
  /**
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   */
  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    columnIndex += i + " ";
  }

  let ret = [columnIndex];
  for (let i = 0; i <= m.length - 1; i++) {
    let line = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      line += m[i][j] + " ";
    }
    ret.push(line);
  }
  console.log(ret.join("\n"));
}

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

  console.log(fx(a1, b1).isChild);
  console.log(fx(a1, b1).coordinate);

  console.log(fx(a2, b2).isChild);
  console.log(fx(a2, b2).coordinate);

  console.log(fx(a3, b3).isChild);
  console.log(fx(a3, b3).coordinate);

  console.log(fx(a4, b4).isChild);
  console.log(fx(a4, b4).coordinate);

  console.log(fx(a5, b5).isChild);
  console.log(fx(a5, b5).coordinate);
}

{
  test1();
}
