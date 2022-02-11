/**
 * Problem: Check if the values in matrix is decreasing 
 * on row and column or not
 * 
 * Understanding the problem

 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 3 4 
 * 1| 2 2 4
 * 2| 3 1 4
 * 
 * - Decreasing on column top down : 0,1,2
 * - Decreasing on column bottom up: 2,1,0
 *  
 * - Decreasing on row start from left: 0,1,2
 * - Decreasing on row start from right: 2,1,0
 * 
 * - column top down, row left (1)
 * - column top down, row right (2)
 * - column bottom up, row left (3)
 * - column bottom up, row right (4)
 * 
 * 
 * 
  const m1 = [[1,1,4],[2,2,4],[3,3,4]]; // {totalColumns:3, column_1:false,column_2:true,column_3:false}
  const m2 = [[-1,-2],[-4,-3]]; //{totalColumns:2, column_1:false,column_2:false}
  const m3 = [[1,2],[3,4]]; //{totalColumns:2, column_1:true,column_2:true}
  const m4 = [[28,2],[2,4]]; //{totalColumns:2, column_1:false,column_2:true}
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 *
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
 * @param {Array<Array>} m
 */
function fx1(m) {
  /**
   * - column top down
   * - row left
   *
   *
   * - matrix 1
   * -- 0 1 2
   * 0| 1 3 4
   * 1| 5 2 1
   * 2| 3 1 4
   *
   *
   * - ret = {
   *   column_0: false,
   *   column_1: true,
   *   column_2: false,
   *   row_0: false,
   *   row_1: true,
   *   row_2: false,
   * }
   *
   *
   * - matrix 2
   * -- 0 1 2
   * 0| 8 7 6
   * 1| 5 2 4
   * 2| 3 1 2
   * - ret = {
   *   column_0: true,
   *   column_1: true,
   *   column_2: true,
   *   row_0: true,
   *   row_1: false,
   *   row_2: false,
   * }
   *
   * const m1 =  [[1,3,4],[5,2,1],[3,1,4]]
   * const m2 =  [[8,7,6],[5,2,4],[3,1,2]]
   *
   *
   * + step 1: generate object key function
   * + step 2: check column decreasing top down func
   * + step 3: check row decreasing from left func
   * + step 4: get result
   *
   */

  /**
   *
   * @param {Array} column
   *
   */
  function isColumnDecreasingTopDown(column) {
    /**
     * 3
     * 2 <=> [3,2,1]
     * 1
     */
    let flag = true;
    for (let i = column.length - 1; i >= 1; --i) {
      if (column[i - 1] < column[i]) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  /**
   *
   * @param {Array} row
   *
   */
  function isRowDecreasingFromLeft(row) {
    /**
     * - row = [3,2,1] - true
     * - row = [1,2,3] - false
     *
     *
     */
    let flag = true;
    for (let i = row.length - 1; i >= 1; --i) {
      if (row[i - 1] < row[i]) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  const ret = {};
  for (let i = m.length - 1; i >= 0; --i) {
    const row_i = m[i];
    ret[`row_${i}`] = isRowDecreasingFromLeft(row_i);
  }

  /**
   * - column top down traverse
   * - matrix
   * -- 0 1 2
   * 0| 1 3 4
   * 1| 2 2 4
   * 2| 3 1 4
   *
   * - m[0][0], m[1][0], m[2][0]
   * - m[0][1], m[1][1], m[2][1]
   * - m[0][2], m[1][2], m[2][2]
   *
   * - i from 0 to m.length - 1
   * - j from 0 to m[0].length -1
   * - check m[j][i]
   *
   */
  for (let i = 0; i <= m.length - 1; i++) {
    let column = [];
    for (let j = 0; j <= m[0].length - 1; j++) {
      column = push(column, m[j][i]);
    }
    ret[`column_${i}`] = isColumnDecreasingTopDown(column);
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx2(m) {
  /**
   * - column top down
   * - row right
   *
   * - matrix 1
   * -- 0 1 2
   * 0| 1 3 4
   * 1| 5 2 1
   * 2| 3 1 4
   *
   * - matrix 2
   * -- 0 1 2
   * 0| 8 7 6
   * 1| 5 2 4
   * 2| 3 1 2
   */

  /**
   *
   * @param {Array} column
   *
   */
  function isColumnDecreasingTopDown(column) {
    /**
     * 3
     * 2 <=> [3,2,1] - true
     * 1
     *
     * 1
     * 2 <=> [1,2,3] - false
     * 3
     */
    let flag = true;

    for (let i = column.length - 1; i >= 1; --i) {
      if (column[i - 1] < column[i]) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  /**
   *
   * @param {Array} row
   *
   */
  function isRowDecreasingFromRight(row) {
    /**
     * - row = [1,2,3] - true
     * - row = [3,2,1] - false
     *
     */
    let flag = true;

    for (let i = row.length - 1; i >= 1; --i) {
      if (row[i - 1] > row[i]) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  const ret = {};
  for (let i = m.length - 1; i >= 0; --i) {
    ret[`row_${i}`] = isRowDecreasingFromRight(m[i]);
  }

  for (let i = 0; i <= m.length - 1; ++i) {
    let column = [];
    for (let j = 0; j <= m[0].length - 1; j++) {
      column = push(column, m[j][i]);
    }
    ret[`column_${i}`] = isColumnDecreasingTopDown(column);
  }

  return ret;
}
/**
 *
 * @param {Array<Array>} m
 */
function fx3(m) {
  /**
   * - column bottom up
   * - row left
   *
   * - matrix 1
   * -- 0 1 2
   * 0| 1 3 4
   * 1| 5 2 1
   * 2| 3 1 4
   *
   * - matrix 2
   * -- 0 1 2
   * 0| 8 7 6
   * 1| 5 2 4
   * 2| 3 1 2
   */

  /**
   *
   * @param {Array} row
   *
   */
  function isRowDecreasingFromLeft(row) {
    /**
     * - row = [3,2,1] - true
     * - row = [1,2,3] - false
     *
     */

    let flag = true;
    for (let i = row.length - 1; i >= 1; --i) {
      if (row[i - 1] < row[i]) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  /**
   *
   * @param {Array} column
   *
   */
  function isColumnDecreasingBottomUp(column) {
    /**
     * 3
     * 2 ~ [1,2,3] - false
     * 1
     *
     * 1
     * 2 ~ [3,2,1] - true
     * 3
     */
    let flag = true;
    for (let i = column.length - 1; i >= 1; --i) {
      if (column[i - 1] < column[i]) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  const ret = {};

  for (let i = m.length - 1; i >= 0; --i) {
    ret[`row_${i}`] = isRowDecreasingFromLeft(m[i]);
  }

  /**
   * - column bottom up traverse
   * - matrix
   * -- 0 1 2
   * 0| 1 3 4
   * 1| 2 2 4
   * 2| 3 1 4
   * 3| 3 1 4
   *
   *
   *
   *
   */
  for (let i = m.length - 1; i >= 0; --i) {
    let column = [];
    for (let j = m[i].length - 1; j >= 0; --j) {
      column = push(column, m[j][i]);
    }
    ret[`column_${i}`] = isColumnDecreasingBottomUp(column);
  }

  return ret;
}
/**
 *
 * @param {Array<Array>} m
 */
function fx4(m) {
  /**
   * - column bottom up
   * - row right
   */

  /**
   *
   * @param {Array} row
   *
   */
  function isRowDecreasingFromRight(row) {
    /**
     * - row = [1,2,3] - true
     */
    let flag = true;

    for (let i = row.length - 1; i >= 1; --i) {
      if (row[i - 1] > row[i]) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  /**
   *
   * @param {Array} column
   *
   */
  function isColumnDecreasingBottomUp(column) {
    /**
     * 1
     * 2
     * 3 ~ [4,3,2,1] - true
     * 4
     */
    let flag = true;

    for (let i = column.length - 1; i >= 1; --i) {
      if (column[i - 1] < column[i]) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  const ret = {};

  for (let i = m.length - 1; i >= 0; --i) {
    ret[`row_${i}`] = isRowDecreasingFromRight(m[i]);
  }

  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 4 4
   * 1| 2 3 4
   * 2| 3 2 4
   * 3| 4 1 4
   *
   * - m[3][2]  m[3][1]  m[3][0]
   * - m[2][2]  m[2][1]  m[2][0]
   * - m[1][2]  m[1][1]  m[1][0]
   * - m[0][2]  m[0][1]  m[0][0]
   *
   * - i from m[0].length - 1 to 0
   * - j from m.length - 1 to 0
   * - check m[j][i]
   */

  for (let i = m[0].length - 1; i >= 0; --i) {
    let column = [];
    for (let j = m.length - 1; j >= 0; --j) {
      column = push(column, m[j][i]);
    }
    ret[`column_${i}`] = isColumnDecreasingBottomUp(column);
  }

  return ret;
}

function test1() {
  const m1 = [
    [1, 3, 4],
    [5, 2, 1],
    [3, 1, 4],
  ];
  const m2 = [
    [8, 7, 6],
    [5, 2, 4],
    [3, 1, 2],
  ];

  /**
   *
   *    * - ret1 = {
   *   column_0: false,
   *   column_1: true,
   *   column_2: false,
   *   row_0: false,
   *   row_1: true,
   *   row_2: false,
   * }
   *
   *   * - ret2 = {
   *   column_0: true,
   *   column_1: true,
   *   column_2: true,
   *   row_0: true,
   *   row_1: false,
   *   row_2: false,
   * }
   *
   */
  console.log(fx1(m1));
  console.log(fx1(m2));
}

function test2() {
  const m1 = [
    [1, 3, 4],
    [5, 2, 1],
    [3, 1, 4],
  ];
  const m2 = [
    [8, 7, 6],
    [5, 2, 4],
    [3, 1, 2],
  ];

  /**
   *
   *    * - ret1 = {
   *   column_0: false,
   *   column_1: true,
   *   column_2: false,
   *   row_0: true,
   *   row_1: false,
   *   row_2: false,
   * }
   *
   *   * - ret2 = {
   *   column_0: true,
   *   column_1: true,
   *   column_2: true,
   *   row_0: false,
   *   row_1: false,
   *   row_2: false,
   * }
   *
   */
  console.log(fx2(m1));
  console.log(fx2(m2));
}
function test3() {
  const m1 = [
    [1, 3, 4],
    [5, 2, 1],
    [3, 1, 4],
  ];
  const m2 = [
    [8, 7, 6],
    [5, 2, 4],
    [3, 1, 2],
  ];

  /**
   *
   *   - ret1 = {
   *   column_0: false,
   *   column_1: false,
   *   column_2: false,
   *   row_0: false,
   *   row_1: true,
   *   row_2: false,
   * }
   *
   *   * - ret2 = {
   *   column_0: false,
   *   column_1: false,
   *   column_2: false,
   *   row_0: true,
   *   row_1: false,
   *   row_2: false,
   * }
   *
   */
  console.log(fx3(m1));
  console.log(fx3(m2));
}
function test4() {
  const m1 = [
    [1, 3, 4],
    [5, 2, 1],
    [3, 1, 4],
  ];
  const m2 = [
    [8, 2, 6],
    [5, 5, 4],
    [7, 8, 9],
    [1, 9, 2],
  ];

  /**
   *
   *   - ret1 = {
   *   column_0: false,
   *   column_1: false,
   *   column_2: false,
   *   row_0: true,
   *   row_1: false,
   *   row_2: false,
   * }
   *
   *   * - ret2 = {
   *   column_0: false,
   *   column_1: true,
   *   column_2: false,
   *   row_0: false,
   *   row_1: false,
   *   row_2: true,
   *   row_3: false,
   *
   * }
   *
   */
  console.log(fx4(m1));
  console.log(fx4(m2));
}

{
  // test1();
  // test2();
  // test3();
  test4();
}
