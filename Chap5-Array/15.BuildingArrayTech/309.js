/**
 * Problem: Given an array of number a. Build an array b from a
 * with b[i] is equal to the sum of adjacent a[i]
 * 
 * Understanding the problem
 * 
  const testCase1 = [2, -1, 4, -7 ,10 ,5 ,-9, 5, 8, 12, -10]; 
  // [1, 6, -8 ,14, -2 ,1 ,10 ,-1 ,17 ,-2, 12]
  const testCase2 = [1,2,3,4,5]; // [3,4,6,8,9]
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = a.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}
/**
 *
 * @param {Array} a
 */
function E309(a) {
  let b = new Array(a.length);

  b[0] = a[1];
  b[b.length - 1] = a[a.length - 2];

  for (let i = a.length - 2; i >= 1; --i) {
    b[i] = a[i - 1] + a[i + 1];
  }

  return b;
}

function test1() {
  const testCase1 = [2, -1, 4, -7, 10, 5, -9, 5, 8, 12, -10];
  // [-1, 6, -8 ,14, -2 ,1 ,10 ,-1 ,17 ,-2, 12]
  const testCase2 = [1, 2, 3, 4, 5]; // [2,4,6,8,4]

  console.log(E309(testCase1));
  console.log(E309(testCase2));
}

{
  test1();
}
