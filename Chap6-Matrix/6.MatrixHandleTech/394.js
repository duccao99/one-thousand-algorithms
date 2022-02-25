/**
 * Problem: Shift down rotates the rows in matrix
 * 
 * 
 * Understanding the problem
 * 
 * - Matrix
 * -- 0 1 2
 * 0| 1 6 3
 * 1| 6 28 7
 * 2| 28 16 8
 * 3| 7 11 13
 * 
 * - ret
 * -- 0 1 2
 * 3| 7 11 13
 * 0| 1 6 3
 * 1| 6 28 7
 * 2| 28 16 8
 * 
 * 
 * m[0] = m[3]
 * m[1] = m[0]
 * m[2] = m[1]
 * m[3] = m[2]
 * 
 * -> i from m.length - 1 to 0
 *    if(i === 0){
 *       m[i] = m[m.length - i - 1]
 *    }
 *    m[i] = m[i-1]
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 *
 *
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  for (let i = m.length - 1; i >= 0; --i) {
    if (i === 0) {
      const temporary = m[i];
      m[i] = m[m.length - i - 1];
      m[m.length - i - 1] = temporary;
    }
    if (i !== 0) {
      const temporary = m[i];
      m[i] = m[i - 1];
      m[i - 1] = temporary;
    }
  }

  return m;
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

  const m2 = generateMatrix(rows_2, columns_3);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_3);

  const column_index_0 = 0;
  const column_index_1 = 1;
  const column_index_2 = 2;
  const column_index_3 = 3;

  const row_index_0 = 0;
  const row_index_1 = 1;
  const row_index_2 = 2;
  const row_index_3 = 3;

  advanceLogMatrix(m2);
  advanceLogMatrix(fx(m2, column_index_0, column_index_1));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx(m4, column_index_0, column_index_2));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx(m5, column_index_2, column_index_1));
}

function test2() {
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
  const m3 = generateMatrix(rows_2, columns_1);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_3);

  const column_index_0 = 0;
  const column_index_1 = 1;
  const column_index_2 = 2;
  const column_index_3 = 3;

  const row_index_0 = 0;
  const row_index_1 = 1;
  const row_index_2 = 2;
  const row_index_3 = 3;

  advanceLogMatrix(m1);
  advanceLogMatrix(fx(m1));

  advanceLogMatrix(m2);
  advanceLogMatrix(fx(m2));

  advanceLogMatrix(m3);
  advanceLogMatrix(fx(m3));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx(m5));
}

{
  // test1();
  test2();
}
