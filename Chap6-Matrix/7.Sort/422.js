/**
 * Problem: Sort the row in the matrix as criteria bellow
 * + the rows those have the greater sum stay on the top
 * + the rows those have the smaller sum stay on the bottom
 *
 *
 * Understanding the problem
 * - matrix
 * -- 0 1 2 3
 * 0| 4 -1 3 5
 * 1| 2 6 7 8
 * 2| 9 1 -4 5
 *
 * - sum
 * + row[0] sum: 11
 * + row[1] sum: 23
 * + row[2] sum: 11k
 *
 * - sort sum
 * + row[1] sum: 23
 * + row[0] sum: 11
 * + row[2] sum: 11
 *
 * - matrix ret
 * -- 0 1 2 3
 * 1| 2 6 7 8
 * 0| 4 -1 3 5
 * 2| 9 1 -4 5
 *
 *
 * - a = [5,3,1,2,4]
 * + a = [5,3,1,4,2]
 * + a = [5,3,2,4,1]
 *
 *---------0       1       2       3       4
 * - m = [[5,1,2],[3,3,1],[1,6,7],[2,0,1],[4,6,5]]
 * ----------0 1 2  3 4
 * - sum  = [8,7,14,3,15]
 * + sum = {
 *   8:0,
 * }
 * index = 0
 * -> sum[sum[i]] = index
 * index++
 *------------------0  1  2 3 4
 * - sum sorted  = [15,14,8,7,3]
 * - swap key-index = []
 * + sum[15] = 0
 * -> use object
 *
 * + traverse m
 * + cal sum m[i]
 * + swap(m,i,sum[i])
 *
 *
 *
 */

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx(m) {
  let sumArray = [];
  const sumHashMap = {};

  for (let i = 0; i <= m.length - 1; ++i) {
    const row = m[i];
    let sum = 0;
    for (let j = row.length - 1; j >= 0; --j) {
      sum += row[j];
    }
    sumArray = push(sumArray, sum);
  }

  console.log("sum coresponding each row: ", sumArray);

  sumArray = descendingBubbleSortArray(sumArray);

  for (let i = 0; i <= sumArray.length - 1; ++i) {
    sumHashMap[sumArray[i]] = i;
  }

  console.log("sum sorted in descending order");
  console.log(sumHashMap);
  for (let i = m.length - 1; i >= 0; --i) {
    let row = m[i];
    let sum = 0;
    for (let j = row.length - 1; j >= 0; --j) {
      sum += row[j];
    }
    swapMatrixRow(m, i, sumHashMap[sum]);
  }

  console.log("matrix after the row were sorted");

  return m;
}

/**
 *
 * @param {Array<Array>} m
 * @param {Number} i
 * @param {Number} j
 *
 */
function swapMatrixRow(m, i, j) {
  const temporary = m[i];
  m[i] = m[j];
  m[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function descendingBubbleSortArray(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] < a[i]) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
  return a;
}

/**
 *
 * @param {Array} a
 */
function pop(a) {
  const ret = new Array(a.length - 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {string} key
 *
 */
function join(a, key) {
  let ret = "";

  for (let i = 0; i <= a.length - 1; ++i) {
    ret += a[i] + key;
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function push(a, e) {
  let ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = a.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 *
 * @param {Array<Array>} m
 */
function advanceLogMatrix(m) {
  /**
   *
   * @param {Number} number
   */
  function generateSpace(number) {
    /**
     * - n = 1
     * - ret = " "
     *
     * - n = 3
     * - ret = "   "
     */
    let ret = "";
    for (let i = number; i >= 1; --i) {
      ret += " ";
    }
    return ret;
  }
  /**
   *
   * @param {string} s
   */
  function stringRightTrim(s) {
    let arrayCharacters = new Array(s.length);

    for (let i = s.length - 1; i >= 0; --i) {
      arrayCharacters[i] = s[i];
    }

    while (arrayCharacters[arrayCharacters.length - 1] === " ") {
      arrayCharacters = pop(arrayCharacters);
    }

    return {
      arrayCharacters: arrayCharacters,
      string: join(arrayCharacters, ""),
    };
  }

  /**
   *
   * @param {Array} a
   * @param {string} key
   *
   */
  function join(a, key) {
    let ret = "";

    for (let i = 0; i <= a.length - 1; ++i) {
      ret += a[i] + key;
    }

    return ret;
  }

  /**
   *
   * @param {Array} a
   */
  function pop(a) {
    /**
     * -------0 1 2 3
     * - a = [1,2,3,4]
     * ---------0 1 2
     * - ret = [1,2,3]
     */
    const ret = new Array(a.length - 1);
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    return ret;
  }

  const topBoundary = "-----Matrix-----";
  console.log(topBoundary); // len = 16
  /**
   *
   * @param {Number} n
   */
  function getNumberDigits(n) {
    if (n === 0) return 1;

    let ret = 0;
    if (n < 0) {
      ret++;
      n = Math.abs(n);

      while (n !== 0) {
        n = Math.floor(n / 10);
        ret++;
      }

      return ret;
    }

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
  columnIndex = stringRightTrim(columnIndex).string;
  let spaceBetweenLastColumnIndexToRightBoundary =
    topBoundary.length - columnIndex.length;
  const spaceForColumnIndexToRightBoundary = generateSpace(
    spaceBetweenLastColumnIndexToRightBoundary - 1 + 5
  );
  columnIndex += spaceForColumnIndexToRightBoundary + "|";
  console.log(columnIndex);

  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      row += m[i][j] + " ";
    }
    row = stringRightTrim(row).string;
    const spaceBetweenRowIToRightBoundary = generateSpace(
      topBoundary.length - 1 - row.length + 5
    );
    row += spaceBetweenRowIToRightBoundary + "|";
    console.log(row);
  }
  const bottomBoundary = "---------------";
  console.log(bottomBoundary);
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
      row = push(row, generateNumber(-100, 100));
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
  return Math.round(Math.random() * (to - from) + from);
}

function test() {
  const rows_1 = 1;
  const rows_2 = 2;
  const rows_3 = 3;
  const rows_4 = 4;

  const columns_1 = 1;
  const columns_2 = 2;
  const columns_3 = 3;
  const columns_4 = 4;
  const columns_5 = 5;

  const m3 = generateMatrix(rows_2, columns_3);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_5);

  const column_index_0 = 0;
  const column_index_1 = 1;
  const column_index_2 = 2;
  const column_index_3 = 3;

  const row_index_0 = 0;
  const row_index_1 = 1;
  const row_index_2 = 2;
  const row_index_3 = 3;

  const remove_row_index_0 = 0;
  const remove_row_index_1 = 1;
  const remove_row_index_2 = 2;
  const remove_row_index_3 = 3;
  const remove_row_index_4 = 4;

  const remove_column_index_0 = 0;
  const remove_column_index_1 = 1;
  const remove_column_index_2 = 2;
  const remove_column_index_3 = 3;
  const remove_column_index_4 = 4;

  advanceLogMatrix(m3);
  advanceLogMatrix(fx(m3));
  // console.log(fx(m3));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx(m4));
  // console.log(fx(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx(m5));
  // console.log(fx(m5));
}

{
  test();
}
