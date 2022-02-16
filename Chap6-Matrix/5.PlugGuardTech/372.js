/**
 * Problem: Find the greatest value on a line in matrix of 
 * real number
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
 *  row_0: 3,
 *  row_1: 9,
 *  row_2: -7,
 *  row_3: 9 
 * 
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
  for (let i = m.length - 1; i >= 0; --i) {
    let line = m[i];
    let greatestOnLine = Number.NEGATIVE_INFINITY;
    for (let j = line.length - 1; j >= 0; --j) {
      if (line[j] > greatestOnLine) {
        greatestOnLine = line[j];
      }
    }
    ret[`greatest_number_on_line_${i}`] = greatestOnLine;
  }
  return reverseObject(ret);
}

/**
 *
 * @param {object} object
 */
function reverseObject(object) {
  /**
   * - object = {
   *  key_1: value_1,
   *  key_2: value_2,
   *  key_3: value_3,
   *  key_4: value_4
   * }
   *
   * - ret = {
   *  key_4: value_4,
   *  key_3: value_3,
   *  key_2: value_2,
   *  key_1: value_1
   * }
   *
   * Idea: use two arrays, first array contains reverse key
   * second array contains reverse value, then pour to ret object
   */

  let ret = {};
  let reverseObjectKey = [];
  let reverseObjectValue = [];

  for (const key in object) {
    reverseObjectKey = push(reverseObjectKey, key);
    reverseObjectValue = push(reverseObjectValue, object[key]);
  }

  for (let i = reverseObjectKey.length - 1; i >= 0; --i) {
    ret[reverseObjectKey[i]] = reverseObjectValue[i];
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
