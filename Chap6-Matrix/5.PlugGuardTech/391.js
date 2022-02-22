/**
 * Problem: Find those children matrixes which have 
 * the smallest sum 
 * 
 * Understanding the problem
 * - Assuming that the matrix has more than one element
 * 
 * - Matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 3| 0 0 0
 *  
 * 
 * - ret 
 * -- 0 1
 * 0| 1 2 
 * 
 * Approach
 * + step 1: Diverge matrix into children matrix for all cases
 * + step 2: reverse traverse step 1
 * + step 3: sum each child matrix
 * + step 4: save sum using array
 * + step 5: find max in step 4
 * + step 6: reverse traverse step 1
 * + step 7: sum each child matrix
 * + step 8: if step 7 = step 5 then return ret
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {}

/**
 *
 * @param {Array<Array>} m
 */
function decreasingRowIndexMatrixDiverging(m) {
  /**
   * - matrix
   * -- 0 1 2
   * 0|
   * 1|
   * 2|
   * 3|
   *
   * + child 1
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   *  + child 1.1    + child 1.2
   *  -- 0 1         -- 0
   *  0| 1 2         0| 1
   *  1| 4 5         1| 4
   *  2| 7 8         2| 7
   *

   *
   * + child 2
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   *  + child 2.1     + child 2.2
   *  -- 0 1          -- 0
   *  0| 1 2          0| 1
   *  1| 4 5          1| 4
   *
 
   *
   *
   * + child 3
   * -- 0 1 2
   * 0| 1 2 3
   *  + child 3.1     + child 3.2
   *  -- 0 1          -- 0
   *  0| 1 2          0| 1
   *
   * 
   * -
   * 
   * 
   * 
   
   * 
   * Revise Combination And Permutation  
   * 
   * + Combination (Order matter)
   * - Summary: 
   *   + Choose r objects from a set have n elements 
   *   + Order matter
   *   + Combination literally meaning
   * 
   * - What is Combination?
   *   + To mix two or more than two things
   *   - Example
   *   + First thing: 1
   *   + Second thing: 2
   *   + Third thing: 3
   *   
   *   + Combination 1 - combine first thing and second thing
   *     + Result: 1 2 
   *   + Combination 2 - Combine first thing and third thing
   *     + Result: 1 3
   *   + Combination 3 - Combine second thing and third thing
   *     + Result: 2 3
   *   + Combination 4 - Combine first thing and second thing and third thing
   *     + Result: 1 2 3
   * 
   *            n!
   * nC(r) = ________  (Why we have this - find later)
   *         r!(n-r)!
   * 
   * - nC(r): Number of combinations
   * - n: total number of objects in the set
   * - r: number of choosing objects from the set
   * 
   * - Example:
   *   + set = {1,2,3,4,5}, r = 3
   *     + object 1: 1
   *     + object 2: 2
   *     + object 3: 3
   *     + object 4: 4
   *     + object 5: 5
   *     => n: 5
   *   + r = 3 means we choose 3 objects from the set which have 5 objects
   * 
   *   + According to the fomular (Currently, I don't know why we have that formular)
   *   We have:
   *   
   *             n!         5!      5 x 4 x 3 x 2 x 1   5 x 4
   *  nC(r) = ________ = ________ = _________________ = ______ = 10
   *          r!(n-r)!   3!(5-3)!   3 x 2 x 1 x 2 x 1   2 x 1 
   * 
   *  + Choose by hand - not the formular
   *  + {1,2,3} - 1
   *  + {1,2,4} - 2
   *  + {1,2,5} - 3
   *  + {1,3,4} - 4
   *  + {1,3,5} - 5
   *  + {1,4,5} - 6
   *  + {2,3,4} - 7
   *  + {2,3,5} - 8
   *  + {2,4,5} - 9
   *  + {3,4,5} - 10
   * 
   * 
   * 
   * 
   * 
   * + Permutation
   * - Summary
   *   + Select r objects in a set n elements
   *   + Order does not matter 
   *   + Permutation literally meaning
   * 
   * - What is permutation?
   *   + This is permutation:  
   *     + set = {1,2}
   *     + set permutation: {1,2}, {2,1}
   * 
   * 
   *            n!
   *  nP(r) = ______ (Why we have this stuff?)
   *          (n-r)!
   *
   * - nP(r): Number of perputations
   * - n: Total number of objects in a set
   * - r: Number of selected objects  
   * 
   *  
   * - set = {1,2,3,4,5}
   * + n = 5
   * + r = 2
   *             n!       5!     5 x 4 x 3 x 2 x 1
   * + nP(r) = ______ = ______ = _________________ = 20
   *           (n-r)!   (5-2)!   3 x 2 x 1 
   * 
   * + select 2 element in set - by hand
   *   + {1,2} - 1
   *   + {1,3} - 2
   *   + {1,4} - 3
   *   + {1,5} - 4
   *   + {2,3} - 5
   *   + {2,4} - 6
   *   + {2,5} - 7
   *   + {3,4} - 8
   *   + {3,5} - 9
   *   + {4,5} - 10
   * 
   *   + {5,4} - 11
   *   + {5,3} - 12
   *   + {4,3} - 13
   *   + {5,2} - 14
   *   + {4,2} - 15
   *   + {3,2} - 16
   *   + {5,1} - 17
   *   + {4,1} - 18
   *   + {3,1} - 19
   *   + {2,1} - 20
   * 
   * 
   * 
   *  
   * 
   *  
   *  
   * 
   * 
   */
  let rowIndex = m.length - 1;
  for (let i = rowIndex; i >= 0; --i) {}
}

/**
 *
 * @param {Array<Array>} m
 */
function decreasingColumnIndexMatrixDiverging(m) {
  /**
   *
   */
}

/**
 *
 * @param {Array<Array>} m
 */
function divergeMatrix(m) {
  /**
   * - m
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 0 0 0
   *
   * - rows: 4
   * - columns: 3
   *
   * - total child: 10
   *
   * - ret
   * + child 1:
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   *
   * + child 2:
   * -- 0 1
   * 0| 1 2
   * 1| 4 5
   * 2| 7 8
   *
   * + child 3:
   * -- 0
   * 0| 1
   * 1| 4
   * 2| 7
   *
   *
   *
   * + child 4:
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 7 8 9
   *
   *
   * + child 5:
   * -- 0 1
   * 0| 1 2
   * 1| 7 8
   *
   * + child 6:
   * -- 0
   * 0| 1
   * 1| 7
   *
   *
   * + child 7:
   * -- 0 1 2
   * 0| 1 2 3
   *
   * + child 8:
   * -- 0 1
   * 0| 1 2
   *
   * + child 9: No count this child
   * -- 0
   * 0| 1
   *
   *
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 0 0 0
   *
   * + child 10:
   * -- 0 1
   * 0| 1 2
   * 1| 4 5
   * 2| 7 8
   * 3| 0 0
   *
   * + child 11:
   * -- 0
   * 0| 1
   * 1| 4
   * 2| 7
   * 3| 0
   *
   *
   *
   *
   */
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function reversePush(a, e) {
  const ret = new Array(a.length + 1);
  ret[0] = e;
  for (let i = ret.length - 1; i >= 1; --i) {
    ret[i] = a[i - 1];
  }
  return ret;
}

/**
 *
 * @param {Array<Array>} m
 */
function advanceLogMatrix(m) {
  console.log("-----Matrix-----");
  /**
   *
   * @param {Number} n
   */
  function getNumberDigits(n) {
    let ret = 0;

    while (n !== 0) {
      n = Math.floor(n / 10);
      ret++;
    }

    return ret;
  }

  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    let space = "";
    let numberDigits = getNumberDigits(m[0][i]);
    for (let j = numberDigits - 1; j >= 0; --j) {
      space += " ";
    }
    columnIndex += i + space;
  }
  console.log(columnIndex);
  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      row += m[i][j] + " ";
    }
    console.log(row);
  }
  console.log("---------------");
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  let ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

function test1() {
  /**
   *
   * @param {Number} rows
   * @param {Number} columns
   *
   */
  function generateMatrix(rows, columns) {
    let ret = [];
    for (let i = rows - 1; i >= 0; --i) {
      let row = [];
      for (let j = columns - 1; j >= 0; --j) {
        row = push(row, generateNumber(0, 100));
      }
      ret = push(ret, row);
    }
    return ret;
  }

  /**
   *
   * @param {Number} from
   * @param {Number} to
   *
   */
  function generateNumber(from, to) {
    let random = Math.random();
    let ret = random * to;

    if (ret < from || ret > to) {
      return generateNumber(from, to);
    }

    return Math.floor(ret);
  }

  const rows_1 = 1;
  const rows_2 = 2;
  const rows_3 = 3;
  const rows_4 = 4;

  const columns_1 = 1;
  const columns_2 = 2;
  const columns_3 = 3;
  const columns_4 = 4;

  const m1 = generateMatrix(rows_1, columns_2);
  const m2 = generateMatrix(rows_2, columns_3);
  const m3 = generateMatrix(rows_3, columns_1);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_3);

  advanceLogMatrix(m1);
  console.log(fx(m1));

  advanceLogMatrix(m2);
  console.log(fx(m2));

  advanceLogMatrix(m3);
  console.log(fx(m3));

  advanceLogMatrix(m4);
  console.log(fx(m4));

  advanceLogMatrix(m5);
  console.log(fx(m5));
}

{
  test1();
}
