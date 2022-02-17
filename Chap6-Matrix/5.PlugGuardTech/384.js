/**
 * Problem: Find digit that appear in the matrix the most
 * 
 * - Matrix
 * -- 0  1  2
 * 0| 11 22 33
 * 1| 44 11 19
 * 2| 11 28 6
 * 3| 47 48 59
 *  
 * 
 * - ret = 1
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let indexAsNumber = [];
  const matrixMaxValue = getMatrixMaxValue(m);

  for (let i = matrixMaxValue; i >= 0; --i) {
    indexAsNumber = push(indexAsNumber, 0);
  }

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      const divisors = getDigits(m[i][j]);
      for (let k = divisors.length - 1; k >= 0; --k) {
        indexAsNumber[divisors[k]] += 1;
      }
    }
  }

  let maxOfIndexAsNumber = Number.NEGATIVE_INFINITY;

  for (let i = indexAsNumber.length - 1; i >= 0; --i) {
    if (indexAsNumber[i] > maxOfIndexAsNumber) {
      maxOfIndexAsNumber = indexAsNumber[i];
    }
  }

  let ret = {
    digitAppearTheMost: null,
    coordinates: [],
  };

  for (let i = indexAsNumber.length - 1; i >= 0; --i) {
    if (indexAsNumber[i] === maxOfIndexAsNumber) {
      ret.digitAppearTheMost = i;
    }
  }

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      let divisors = getDigits(m[i][j]);
      for (let k = divisors.length - 1; k >= 0; --k) {
        if (divisors[k] === ret.digitAppearTheMost) {
          ret.coordinates = push(ret.coordinates, [i, j]);
          break;
        }
      }
    }
  }

  ret.coordinates = reverseArray(ret.coordinates);

  return ret;
}

/**
 *
 * @param {Array<Array>} m
 */
function getMatrixMaxValue(m) {
  let maxValue = Number.NEGATIVE_INFINITY;
  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (m[i][j] > maxValue) {
        maxValue = m[i][j];
      }
    }
  }
  return maxValue;
}

/**
 *
 * @param {Number} n
 */
function getDigits(n) {
  let ret = [];

  while (n !== 0) {
    ret = push(ret, n % 10);
    n = Math.floor(n / 10);
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function reverseArray(a) {
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
 * @param {Array<Array>} m
 */
function getMatrixMaxValue(m) {
  let ret = m[0][0];

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (m[i][j] > ret) {
        ret = m[i][j];
      }
    }
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
        row = push(row, generateNumber(0, 30));
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
