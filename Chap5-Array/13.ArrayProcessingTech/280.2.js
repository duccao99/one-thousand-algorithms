/**
 * Problem: Let's bring all element which has value equal to one 
 * to the beginning of the array
 * 
 * 
 * Understanding the problem
 * -------0 1 2 3 4 ---------
 * - a = [2,1,3,4,5]
 * 
 * ---------0 1 2 3 4--------
 * - ret = [1,2,3,4,5]
 * 
 * + i = 0, a[0] = 2
 * + i = 1, a[1] = 1
 *   + swap(a,0,1)
 *   + [1,2,3,4,5]
 *  
 *
 * 
 * -------0 1 2 3 4 5 6 7 8 9------
 * - a = [2,3,4,5,1,1,6,1,7,1]
 * 
 * ---------0 1 2 3 4 5 6 7 8 9------
 * - ret = [1,1,1,1,2,3,4,5,6,7]
 * 
 * + i = 0, a[0] = 2
 * + i = 1, a[1] = 3
 * + i = 2, a[2] = 4
 * + i = 3, a[3] = 5
 * + i = 4, a[4] = 1
 *   + swap(a,4,3)
 *   + swap(a,3,2)
 *   + swap(a,2,1)
 *   + swap(a,1,0)
 *   -> for j = i, j>=1, --j
 *   -> swap(a,i,i-1)
 * 
 * ---------0 1 2 3 4 5 6 7 8 9------
 *   + a = [1,2,3,4,5,1,6,1,7,1]
 * + i = 5, a[5] = 1
 *   + swap(a,5,4)
 *   + swap(a,4,3)
 *   + swap(a,3,2)
 *   + swap(a,2,1)
 *   + swap(a,1,0)
 *   -> for j = i, j>=1, --j
 *   -> swap(a,i,i-1)
 * 
 *--------0 1 2 3 4 5 6 7----------- 
 * - a = [2,3,4,5,1,1,1,1]
 * 
 * + i = 7, a[i] = 1
 *   + swap(a,7,6)
 *   + swap(a,6,5)
 *   + swap(a,5,4)
 *   + swap(a,4,3)
 *   + swap(a,3,2)
 *   + swap(a,2,1)
 *   + swap(a,1,0)
 * --------0 1 2 3 4 5 6 7-------
 *   + a =[1,2,3,4,5,1,1,1]
 *   + a[7] is still 1 so we shouldn't check a[6], we should still check a[7]
 *   if(a[i+1]===1){
 *      i++
 *
 *   }
 * + i = 7, a[7] = 1
 *   + swap(a,7,6)
 *   + swap(a,6,5)
 *   + swap(a,5,4)
 *   + swap(a,4,3)
 *   + swap(a,3,2)
 *   + swap(a,2,1)
 *   + swap(a,1,0)
 * ---------0 1 2 3 4 5 6 7
 *   + a = [1,1,2,3,4,5,1,1]
 * 
 * 
 * + 
 * 
 *
 * 
 *  
 * + i = 5, a[5] = 5 -> bug here
 *   + so after swap, update i to re-check old index
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
 * Approach
 * + step 1: 
 *          + step 1.1: traverse input array from len - 1 to 0
 *          + step 1.2: find 1 index
 *          + step 1.3: traverse nested round from 0 to len - 1
 *            + if a[j] !== then swap a[i] and a[j] 
 * 
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
function E280(a) {
  let breakPos = 0;
  for (let i = a.length - 1; i >= breakPos; --i) {
    if (a[i] === 1) {
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
  const testCase1 = [1, 2, 3, 1, 4, 5, 6, 1, 7]; // [1,1,1,2,3,4,5,6,7]
  const testCase2 = [2, 1, 3, 4, 5]; // [1,2,3,4,5]
  const testCase3 = [2, 3, 4, 5, 1]; // [1,2,3,4,5]
  //-----------------0  1  2  3  4  5  6  7-----------------------------
  const testCase4 = [2, 3, 4, 5, 1, 1, 1, 1]; // [1,1,1,1,2,3,4,5]

  console.log(E280(testCase1));
  console.log(E280(testCase2));
  console.log(E280(testCase3));
  console.log(E280(testCase4));
}

{
  test1();
}
