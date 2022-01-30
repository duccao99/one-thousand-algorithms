/**
 * Problem: List all child arrays in an array of number
 * 
 * Understanding the problem
 * ---------0 1 2 3 4-------
 * - a  =  [1,2,3,4,5] 
 * + a11 = [1] 
 * + a12 = [1,2] 
 * + a13 = [1,2,3] 
 * + a14 = [1,2,3,4] 
 * 
 * + a21 = [2]
 * + a22 = [2,3]
 * + a23 = [2,3,4]
 * + a24 = [2,3,4,5]
 * 
 * + a31 = [3]
 * + a32 = [3,4]
 * + a33 = [3,4,5]
 * 
 * + a41 = [4]
 * + a42 = [4,5]
 * 
 * + a51 = [5]
 * 
 * 
 * + i = 0
 *   + a[0] = 1
 *   + ret = [[1],[1,2],[1,2,3],[1,2,3,4]]
 *   -> for j from 0 to len - 2
 * + i = 1
 *   + a[1] = 2
 *   + ret = [[1],[1,2]]
 *   -> for j from i to 0
 * 
 * 
 * + loop i from 0 to 4 <=> 0 to a.length - 1
 *   + loop j from 
 * 
 * 
 * + i = 0 
 *   + ret = [[1]] 
 * + i = 
 * 
 * 
 * 
 *
 * 
 *
 const testCase1 = [1, 2, 3, 4, 5]; 
 // [1] [1,2] [1,2,3] [1,2,3,4] 
 // [2] [2,3] [2,3,4] [2,3,4,5]
 // [3] [3,4] [3,4,5] 
 // [4] [4,5]
  const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1] [1,2] [1,2,3] [1,2,3,4]
  //  [1,2,3,4,5] [1,2,3,4,5,6] [1,2,3,4,5,6,7] [1,2,3,4,5,6,7,8]
  const testCase3 = [1]; // []
  const testCase4 = [1, 2]; // [1]
  const testCase5 = [1, 2, 3]; // [1] [1,2]
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
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function E293(a) {
  let ret = [];

  for (let i = 0; i <= a.length - 1; ++i) {
    for (let j = i; j <= a.length - 1; ++j) {
      let child = [];
      for (let k = i; k <= j; ++k) {
        child = push(child, a[k]);
      }
      ret = push(ret, child);
    }
  }

  return ret;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1] [1,2] [1,2,3] [1,2,3,4]
  const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1] [1,2] [1,2,3] [1,2,3,4]
  //  [1,2,3,4,5] [1,2,3,4,5,6] [1,2,3,4,5,6,7] [1,2,3,4,5,6,7,8]
  const testCase3 = [1]; // []
  const testCase4 = [1, 2]; // [1]
  const testCase5 = [1, 2, 3]; // [1] [1,2]

  console.log(E293(testCase1));
  console.log(E293(testCase2));
  console.log(E293(testCase3));
  console.log(E293(testCase4));
  console.log(E293(testCase5));
}

{
  test1();
}
