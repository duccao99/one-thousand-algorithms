/**
 * Problem: Let's bring all element which divisible by 3 to
 * the begining of the array
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5,6,7,8,9]; // [9,6,3,1,2,4,5,7,8]
  const testCase2 = [1,2,3,4,5,6,7,8,9,9,6,6,3,3]; // [3,3,6,6,9,9,6,3,1,2,4,5,7,8]

 * 
 * Approach
 * + step 1: write a function to check if a number is divisible by 3
 * + step 2: bring it to the begining
 * 
 */

/**
 *
 * @param {Number} n
 */
function isNumberDivisibleBy3(n) {
  return n % 3 === 0;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function E282(a) {
  let breakPos = 0;

  for (let i = a.length - 1; i >= breakPos; --i) {
    if (isNumberDivisibleBy3(a[i])) {
      let swapPos = i;
      for (let j = i; j >= breakPos + 1; --j) {
        swap(a, swapPos, swapPos - 1);
        swapPos--;
      }
      i++;
      breakPos++;
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [9,6,3,1,2,4,5,7,8]
  const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 6, 6, 3, 3]; // [3,3,6,6,9,9,6,3,1,2,4,5,7,8]

  console.log(E282(testCase1));
  console.log(E282(testCase2));
}

{
  test1();
}
