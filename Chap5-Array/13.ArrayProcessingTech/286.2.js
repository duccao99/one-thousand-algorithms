/**
 * Problem: Let's shift left rotate all element of an array of number
 * 
 * Understanding the problem
 * 
 const testCase1 = [1,2,3,4,5]; // [5,1,2,3,4]
  const testCase2 = [5,4,3,2,1]; // [1,5,4,3,2]
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1,5,4,3,2]
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E286(a) {
  for (let j = a.length - 1; j >= 1; --j) {
    const temporary = a[0];

    for (let i = a.length - 1; i >= 1; i--) {
      a[a.length - i - 1] = a[a.length - i];
    }

    a[a.length - 1] = temporary;
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [5,1,2,3,4]
  const testCase2 = [5, 4, 3, 2, 1]; // [1,5,4,3,2]
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [9,1,2,3,4,5,6,7,8]

  console.log(E286(testCase1));
  console.log(E286(testCase2));
  console.log(E286(testCase3));
}

{
  test1();
}
