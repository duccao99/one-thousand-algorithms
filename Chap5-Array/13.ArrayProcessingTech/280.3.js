/**
 * Problem: Bring element which has the value x
 * to the begining of the array of number
 * 
 * Understanding the problem
 * 
 * -------0 1 2 3 4 5 6 7-------
 * - a = [2,3,1,4,1,5,6,1]
 * 
 * ---------0 1 2 3 4 5 6 7-----
 * - ret = [1,1,1,2,3,4,5,6]
 * 
 * + i = 0, a[0] = 2
 * + i = 1, a[1] = 3
 * + i = 2, a[2] = 1
 *   + swap(a,2,1)
 *   + swap(a,1,0)
 *   + a = [1,2,3,4,1,5,6,1]
 *   -> for j = i, j>=1, --j
 *   -> swapPos = i
 *   -> swap(a,swapPos,swapPos-1)
 *   -> swapPos--
 * 
 * 
 * 
 * -------0 1 2 3 4 5 6 7------
 * - a = [2,3,4,5,1,1,1,1]
 * - ret = [1,1,1,1,2,3,4,5]
 * 
 * + i = 7, a[7] = 1
 *   + swap(a,7,6)
 *   + swap(a,6,5)
 *   + swap(a,5,4)
 *   + swap(a,4,3)
 *   + swap(a,3,2)
 *   + swap(a,2,1)
 *   + swap(a,1,0)
 *   -------0 1 2 3 4 5 6 7------
 *   + a = [1,2,3,4,5,1,1,1]
 *   + a[i] === 1 ? i++
 *   
 * 
 * + i = 7
 * + i loop should break when all 1 element is moved to the begining 
 * [1,1,1,1,2,3,4,5]
 * 
 * 
 * 
 * 
 * 
 * 
  const testCase1 = [1,2,3,1,4,5,6,1,7]; // [1,1,1,2,3,4,5,6,7]
  const testCase2 = [2,1,3,4,5]; // [1,2,3,4,5]
  const testCase3 = [2,3,4,5,1]; // [1,2,3,4,5]
  const testCase4 = [2,3,4,5,1,1,1,1]; // [1,1,1,1,2,3,4,5]
 * 
 * 
 * 
 */

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
function E280(a, x) {
  let breakPos = 0;
  for (let i = a.length - 1; i >= breakPos; --i) {
    if (a[i] === x) {
      let swapPos = i;
      for (let j = i; j >= 1; --j) {
        swap(a, swapPos, swapPos - 1);
        swapPos--;
      }

      breakPos++;
      i++;
    }
  }
  return a;
}

function test1() {
  const a1 = [1, 2, 3, 1, 4, 5, 6, 1, 7]; // [6,1,2,3,1,4,5,1,7]
  const x1 = 6;

  const a2 = [2, 1, 3, 4, 5]; // [5,2,1,3,4]
  const x2 = 5;

  const a3 = [2, 3, 4, 5, 1]; // [4,2,3,5,1]
  const x3 = 4;

  const a4 = [2, 3, 4, 5, 1, 1, 1, 1]; // [1,1,1,1,2,3,4,5]
  const x4 = 1;

  console.log(E280(a1, x1));
  console.log(E280(a2, x2));
  console.log(E280(a3, x3));
  console.log(E280(a4, x4));
}

{
  test1();
}
