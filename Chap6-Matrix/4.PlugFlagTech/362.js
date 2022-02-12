/**
 * Problem: List decreasing lines in array of real number
 *  
 *
 * Understanding the problem
 * - Decreasing line
 * + watch from the left: 3 2 1 (1)
 * + watch from the right: 1 2 3 (2)
 * 
 * - implement (1) & (2)
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
function fx1(m) {
  /**
   * does 3 2 2 1 is decreasing ? - no
   * 3 2 1 is decreasing
   */
  const ret = [];
  for (let i = m.length - 1; i >= 0; --i) {
    const row = m[i];
    let isDecreasing = true;
    for (let i = row.length - 1; i >= 1; --i) {
      if (row[i - 1] <= row[i]) {
        isDecreasing = false;
        break;
      }
    }
    if (isDecreasing) {
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
  // decreasing from the right
  // 1 2 3
  let ret = [];
  for (let i = m.length - 1; i >= 0; --i) {
    const line = m[i];
    let isDecreasing = true;
    for (let j = line.length - 1; j >= 1; --j) {
      if (line[j - 1] >= line[j]) {
        isDecreasing = false;
        break;
      }
    }
    if (isDecreasing) {
      ret.push(i);
    }
  }
  return reverse(ret).join(" ");
}

function test1() {
  const m1 = [
    [5, 4, 3],
    [2, 2, 2],
    [3, 2, 1],
  ]; // 0 2
  const m2 = [
    [-1, -5, -9],
    [4, 5, 6],
    [-5, 0, 9],
    [3, 2, 1],
  ]; // 0 3

  console.log(fx1(m1));
  console.log(fx1(m2));
}

function test2() {
  const m1 = [
    [3, 4, 5],
    [2, 2, 2],
    [1, 2, 3],
  ]; // 0 2
  const m2 = [
    [-9, -5, -1],
    [4, 5, 6],
    [-5, 0, 9],
    [3, 2, 1],
  ]; // 0 1 2
  console.log(fx2(m1));
  console.log(fx2(m2));
}

{
  // test1();
  test2();
}
