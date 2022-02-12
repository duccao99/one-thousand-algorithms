/**
 * Problem: List columns in matrix of integer which contains 
 * square number
 *
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 3| 1 2 3
 * 
 * - ret = 0 2
 * 
  const m1 = [[1,3,5],[2,-5,7],[6,1,4]] // 0 1 2
  const m2 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3]] // 0 2
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
  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = m.length - 1; j >= 0; --j) {
      if (isSquareNumber(m[j][i])) {
        ret = push(ret, i);
      }
    }
  }

  const hashmap = {};
  for (let i = ret.length - 1; i >= 0; --i) {
    hashmap[ret[i]] = 0;
  }

  ret = [];
  for (const key in hashmap) {
    ret = push(ret, +key);
  }

  const mid = Math.floor(ret.length / 2);
  for (let i = ret.length - 1; i >= mid; --i) {
    const temporary = ret[i];
    ret[i] = ret[ret.length - i - 1];
    ret[ret.length - i - 1] = temporary;
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
 * @param {Number} n
 *
 */
function isSquareNumber(n) {
  if (isNaN(n) || n <= 0) return false;
  return Math.floor(Math.sqrt(n)) - Math.sqrt(n) === 0;
}

function test1() {
  const m1 = [
    [1, 3, 5],
    [2, -5, 7],
    [6, 1, 4],
  ]; // 0 1 2
  const m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3],
  ]; // 0 2
  console.log(fx(m1));
  console.log(fx(m2));
}
{
  test1();
}
