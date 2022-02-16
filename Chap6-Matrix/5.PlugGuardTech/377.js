/**
 * Problem: Find the greatest prime number in 
 * matrix 
 * of
 * integer
 * 
 * 
 * - Matrix
 * -- 0 1 2
 * 0| -1 -2 3
 * 1| 4 5 9
 * 2| -7 -8 -9
 * 3| 7 8 9
 * 
 * - ret = 7
 * 
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let greatestPrimeNumber = Number.NEGATIVE_INFINITY;
  let coordinate = [];
  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (isPrimeNumber(m[i][j]) && greatestPrimeNumber < m[i][j]) {
        greatestPrimeNumber = m[i][j];
        coordinate = [i, j];
      }
    }
  }

  if (greatestPrimeNumber === Number.NEGATIVE_INFINITY) {
    return "Not found!";
  }

  return (
    `The greatest prime number is: ${greatestPrimeNumber}\n` +
    `Coordinate: [${coordinate}]`
  );
}

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (isNaN(n) || n <= 1) return false;
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 *
 * @param {Array<Array>} m
 */
function advanceLogMatrix(m) {
  console.log("--------Matrix--------");

  /**
   *
   * @param {Number} n
   */
  function getNumberDigits(n) {
    let digits = 0;

    while (n !== 0) {
      n = Math.floor(n / 10);
      digits++;
    }

    return digits;
  }

  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    const elementDigits = getNumberDigits(m[0][i]);
    let spacing = "";
    for (let j = elementDigits - 1; j >= 0; --j) {
      spacing += " ";
    }
    columnIndex += i + spacing;
  }

  console.log(columnIndex);

  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      row += m[i][j] + " ";
    }
    console.log(row);
  }

  console.log("----------------------");
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
      let column = [];
      for (let j = columns - 1; j >= 0; --j) {
        column = push(column, generateNumber(10, 99));
      }
      ret = push(ret, column);
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
    let ret = null;
    for (let i = from; i <= to; ++i) {
      ret = random * i;
    }
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
