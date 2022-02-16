/**
 * Problem: List lines that contains the greatest value
 * in the matrix of real number
 * 
 * - Matrix
 * -- 0 1 2
 * 0| -1 -2 3
 * 1| 4 5 9
 * 2| -7 -8 -9
 * 2| 7 8 9
 * 
 * 
 * - ret = 1 2
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
  let greatestValue = Number.NEGATIVE_INFINITY;
  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (m[i][j] > greatestValue) {
        greatestValue = m[i][j];
      }
    }
  }
  let lines = [];
  for (let i = m.length - 1; i >= 0; --i) {
    let line = m[i];
    for (let j = line.length - 1; j >= 0; --j) {
      if (line[j] === greatestValue) {
        lines = push(lines, i);
        break;
      }
    }
  }
  return join(lines, " ");
}

/**
 *
 * @param {Array} a
 * @param {string} key
 */
function join(a, key) {
  let ret = "";

  for (let i = a.length - 1; i >= 0; --i) {
    ret += a[i] + key;
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

  console.log(fx(b1)); // 1 3
  console.log(fx(b2)); // 0 1 2 - How can you forget this index?
}

{
  test1();
}
