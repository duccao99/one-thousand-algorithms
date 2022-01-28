/**
 * Problem: Let's reverse array
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [5,4,3,2,1]
  const testCase2 = [1,3,5,7,9]; // [9,7,5,3,1]
  const testCase3 = [1,3,3,4]; // [4,3,3,1]
  const testCase4 = [0,0,0,1]; // [1,0,0,0]
  const testCase5 = [1,2,2,3,3,3,4]; // [4,3,3,3,2,2,1]
 * 
  * 
 */

/**
 *
 * @param {Array} a
 */
function E283(a) {
  const mid = Math.round(a.length / 2);

  for (let i = a.length - 1; i >= mid; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [5,4,3,2,1]
  const testCase2 = [1, 3, 5, 7, 9]; // [9,7,5,3,1]
  const testCase3 = [1, 3, 3, 4]; // [4,3,3,1]
  const testCase4 = [0, 0, 0, 1]; // [1,0,0,0]
  const testCase5 = [1, 2, 2, 3, 3, 3, 4]; // [4,3,3,3,2,2,1]

  console.log(E283(testCase1));
  console.log(E283(testCase2));
  console.log(E283(testCase3));
  console.log(E283(testCase4));
  console.log(E283(testCase5));
}

{
  test1();
}
