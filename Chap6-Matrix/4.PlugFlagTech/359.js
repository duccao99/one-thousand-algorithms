/**
 * Problem: List lines which contains negative number 
 * in matrix of number
 *
 * Understanding the problem
 *
  const m1 = [[1,3,5],[2,-5,7],[6,1,4]] // 1
  const m2 = [[11,13,17],[2,3,-4],[-3,1,-5]] // 1 2
  const m3 = [[11,13,17],[3,5,7],[-2,-0,-4],[-1,0,0]] // 2 3
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
    const line = m[i];
    let isNegativeNumber = false;
    for (let i = line.length - 1; i >= 0; --i) {
      if (line[i] <= 0) {
        isNegativeNumber = true;
        break;
      }
    }
    if (isNegativeNumber === true) {
      ret.push(i);
    }
  }

  ret = reverse(ret);

  return ret.join(" ");
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

function test1() {
  const m1 = [
    [1, 3, 5],
    [2, -5, 7],
    [6, 1, 4],
  ]; // 1
  const m2 = [
    [11, 13, 17],
    [2, 3, -4],
    [-3, 1, -5],
  ]; // 1 2
  const m3 = [
    [11, 13, 17],
    [3, 5, 7],
    [-2, -0, -4],
    [-1, 0, 0],
  ]; // 2 3
  const m4 = [
    [11, 13, 17],
    [3, 5, 7],
    [-2, -0, -4],
    [-1, 0, 0],
    [0, -1, 0],
  ]; // 2 3 4

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
  console.log(fx(m4));
}
{
  test1();
}
