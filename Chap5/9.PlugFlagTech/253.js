/**
 * Problem: Determine whether all a array elements are lie in b array
 * 
 * Understanding the problem
 * - a = [1,2,3]
 * - b = [4,5,6,1,2,3,4,5,6]
 * - result: 1
 * 
 * 
  const a1 = [1,2,3];  
  const b1 = [4,5,6,1,2,3,4,5,6];  

  const a2 = [];  
  const b2 = []; 

  const a3 = [1,2,3,4,5];  
  const b3 = [4,5,6,1,2,3,4,6]; 

  const a4 = [1,2,3,4,5];  
  const b4 = [4,5,6,1,2,3,4,5,6];
  
  const a5 = [];  
  const b5 = [4,5,6,1,2,3,4,5,6]; 

  const a6 = [1,2,3,4,5];  
  const b6 = []; 
 * 
 * Approach
 * + step 1: if a.length > b.length return 0
 * + step 2: if a.length = 0 && b.length = 0 return 0
 * + step 3: if a.length = 0 && b.length != 0 return 0
 * + step 4: reverse traverse b array, if we see b[i] = a[a.length - 1],
 * then check if those next i + a.length element are equal to a[i] 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Number} e
 */
function addElementToArrayAtFirstPosition(a, e) {
  return [e, ...a];
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E253(a, b) {
  if (a.length > b.length) return 0;
  if (a.length === 0 && b.length === 0) return 0;
  if (a.length === 0 && b.length !== 0) return 0;

  let flag = 0;

  for (let i = b.length - 1; i >= 0; --i) {
    if (b[i] === a[a.length - 1]) {
      let temp = [];
      for (let j = i; j > i - a.length; --j) {
        temp = addElementToArrayAtFirstPosition(temp, b[j]);
      }

      let subFlag = 1;

      for (let l = temp.length - 1; l >= 0; --l) {
        if (a[l] !== temp[l]) {
          subFlag = 0;

          break;
        }
      }

      if (subFlag === 1) {
        flag = subFlag;

        break;
      }
    }
  }

  return flag;
}

function test1() {
  const a1 = [1, 2, 3];
  const b1 = [4, 5, 6, 1, 2, 3, 4, 5, 6];

  const a2 = [];
  const b2 = [];

  const a3 = [1, 2, 3, 4, 5];
  const b3 = [4, 5, 6, 1, 2, 3, 4, 6];

  const a4 = [1, 2, 3, 4, 5];
  const b4 = [4, 5, 6, 1, 2, 3, 4, 5, 6];

  const a5 = [];
  const b5 = [4, 5, 6, 1, 2, 3, 4, 5, 6];

  const a6 = [1, 2, 3, 4, 5];
  const b6 = [];

  const a7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const b7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(E253(a1, b1)); // 1
  console.log(E253(a2, b2)); // 0
  console.log(E253(a3, b3)); // 0
  console.log(E253(a4, b4)); // 1
  console.log(E253(a5, b5)); // 0
  console.log(E253(a6, b6)); // 0
  console.log(E253(a7, b7)); // 1
}

{
  test1();
}
