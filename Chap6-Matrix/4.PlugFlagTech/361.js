/**
 * Problem: List lines in a matrix of real number
 * that satisfies those conditions bellow
 * + a line contains negative number and positive number
 * and zero number
 *  
 *
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| -1 2 0
 * 1| 4 5 6
 * 2| -5 0 9
 * 3| 1 2 3
 * 
 * - ret = 0 2
 * 
  const m1 = [[-1,0,5],[2,-5,7],[6,1,4]] // 0
  const m2 = [[-1,2,0],[4,5,6],[-5,0,9],[1,2,3]] // 0 2
 *
 * 
 * 
 * /



 


  

  

  
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let ret = [];

  for (let i = m.length - 1; i >= 0; --i) {
    const row = m[i];
    if (isSatisFiesCondition(row)) {
      ret = push(ret, i);
    }
  }

  return join(ret, " ");
}

/**
 *
 * @param {Array} a
 * @param {any} e
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
 * @param {Array} a
 * @param {string} key
 *
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
 * @param {Array} row
 *
 */
function isSatisFiesCondition(row) {
  let isExistNegativeNumber = false;
  let isExistPositiveNumber = false;
  let isExistZeroNumber = false;

  for (let i = row.length - 1; i >= 0; --i) {
    if (row[i] === 0) {
      isExistZeroNumber = true;
    }
    if (row[i] < 0) {
      isExistNegativeNumber = true;
    }
    if (row[i] > 0) {
      isExistPositiveNumber = true;
    }
  }

  return isExistNegativeNumber && isExistPositiveNumber && isExistZeroNumber;
}

function test1() {
  const m1 = [
    [-1, 0, 5],
    [2, -5, 7],
    [6, 1, 4],
  ]; // 0
  const m2 = [
    [-1, 2, 0],
    [4, 5, 6],
    [-5, 0, 9],
    [1, 2, 3],
  ]; // 0 2

  console.log(fx(m1));
  console.log(fx(m2));
}
{
  test1();
}
