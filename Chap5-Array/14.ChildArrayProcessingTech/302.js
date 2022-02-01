/**
 * Problem: Given two array of numbers a and b. Let's count the number
 * of appearance of array a in array b
 * 
 * Understanding the problem
 * - a = [1,2,3]
 * - b = [1,2,3,4,3,2,1,5,1,2,3]
 * - ret = 2
 * 
 * 
 * 
  const a1 = [1,2,3]; // 2
  const b1 = [1,2,3,4,3,2,1,5,1,2,3] ;  

  const a2 = [3,2,1]; // 0
  const b2 = [1,2,3,4,5,3,2,5]

  const a3 = [3,2,1]; // 1
  const b3 = [1,2,3,4,5,3,2,1]

 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E302(a, b) {
  if (a.length > b.length) return 0;

  let count = 0;

  for (let i = b.length - 1; i >= 0; --i) {
    if (b[i] === a[a.length - 1]) {
      let checkPos = i;
      let flag = true;
      for (let j = a.length - 1; j >= 0; --j) {
        if (b[checkPos] !== a[j]) {
          flag = false;
          break;
        }
        checkPos--;
      }

      if (flag) {
        count++;
      }
    }
  }

  return count;
}

function test1() {
  const a1 = [1, 2, 3]; // 2
  const b1 = [1, 2, 3, 4, 3, 2, 1, 5, 1, 2, 3];

  const a2 = [3, 2, 1]; // 0
  const b2 = [1, 2, 3, 4, 5, 3, 2, 5];

  const a3 = [3, 2, 1]; // 1
  const b3 = [1, 2, 3, 4, 5, 3, 2, 1];

  console.log(E302(a1, b1));
  console.log(E302(a2, b2));
  console.log(E302(a3, b3));
}

{
  test1();
}
