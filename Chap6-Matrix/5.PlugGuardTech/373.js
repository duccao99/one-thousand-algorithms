/**
 * Problem: Find the smallest value on a column 
 * in matrix of real number
 * 
 * 
 * - Matrix
 * -- 0 1 2
 * 0| -1 -2 3
 * 1| 4 5 9
 * 2| -7 -8 -9
 * 3| 7 8 9
 * 
 * 
 * - ret = {
 *  column_0: -7,
 *  column_1: -8,
 *  column_2: -9,
 * }
 * 
 * 
 *
 * 
 * 
 const b1 = [
    [-1, -2, 3],
    [4, 5, 9],
    [-7, -8, -9],
    [7, 8, 9],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, -2],
    [1, -3, -4],
  ];


 * 
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let ret = {};
  for (let i = m[0].length - 1; i >= 0; --i) {
    let smallestValueOnColumn = Number.POSITIVE_INFINITY;
    for (let j = m.length - 1; j >= 0; --j) {
      if (m[j][i] < smallestValueOnColumn) {
        smallestValueOnColumn = m[j][i];
      }
    }
    ret[`smallest_value_on_column_${i}`] = smallestValueOnColumn;
  }
  return reverseObjectKeyValue(ret);
}

/**
 *
 * @param {object} object
 */
function reverseObjectKeyValue(object) {
  let ret = {};
  let keys = [];
  let values = [];

  for (const key in object) {
    keys = push(keys, key);
    values = push(values, object[key]);
  }

  for (let j = keys.length - 1; j >= 0; --j) {
    ret[keys[j]] = values[j];
  }

  return ret;
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
  const b1 = [
    [-1, -2, 3],
    [4, 5, 9],
    [-7, -8, -9],
    [7, 8, 9],
  ];

  const b2 = [
    [1, 1, 1],
    [1, 1, -2],
    [1, -3, -4],
  ];

  console.log(fx(b1)); //
  console.log(fx(b2)); // - How can you forget this index? - Just forget
}

{
  test1();
}
