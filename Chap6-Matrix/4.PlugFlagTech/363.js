/**
 * Problem: List increasing columns in matrix of real number
 *  
 *
 * Understanding the problem
 * - Increasing column
 * 
 * - top down view (1)
 * 0
 * 1
 * 2
 * 
 * - bottom up view (2)
 * 3
 * 2
 * 1
 * 
 * - Implement (1) & (2)
 *
 * 
 * 
 * /



 


  

  

  
/**
 *
 * @param {Array<Array>} m
 */
function fx1(m) {
  /**
   * column top down traverse
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 1 2 3
   *
   */
  const ret = [];
  for (let i = m[0].length - 1; i >= 0; --i) {
    let isIncreasing = true;
    for (let j = m.length - 1; j >= 1; --j) {
      if (m[j - 1][i] >= m[j][i]) {
        isIncreasing = false;
        break;
      }
    }
    if (isIncreasing) {
      ret.push(i);
    }
  }

  return reverse(ret).join(" ");
}

/**
 *
 * @param {Array} a
 *
 */
function reverse(a) {
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
function fx2(m) {
  const ret = [];
  // increasing bottom up
  for (let i = m[0].length - 1; i >= 0; --i) {
    let isIncreasing = true;
    for (let j = m.length - 1; j >= 1; --j) {
      if (m[j - 1][i] <= m[j][i]) {
        isIncreasing = false;
        break;
      }
    }
    if (isIncreasing) {
      ret.push(i);
    }
  }
  return reverse(ret).join(" ");
}

function test1() {
  const m1 = [
    [1, 3, 3],
    [2, 2, 4],
    [3, 2, 5],
  ]; // 0 2
  const m2 = [
    [-1, -5, -9],
    [0, -4, 6],
    [5, -3, 9],
    [8, -2, 1],
  ]; // 0 1

  console.log(fx1(m1));
  console.log(fx1(m2));
}

function test2() {
  const m1 = [
    [3, 3, 7],
    [2, 2, 6],
    [1, 2, 5],
  ]; // 0 2
  const m2 = [
    [-1, 5, -9],
    [0, 4, 6],
    [5, 0, 9],
    [8, -2, 1],
  ]; //  1

  console.log(fx2(m1));
  console.log(fx2(m2));
}

{
  test1();
  console.log("");
  test2();
}
