/**
 * Problem: Mix two ascending arrays into one sorted array
 * in ascending order 
 * 
 * Understanding the problem
 * - a = [1,3,5,7]
 * - b = [2,4,6,8]
 * - result = [1,2,3,4,5,6,7,8]
 * 
  const a1 = [1,3,5,7]; // 
  const a2 = [2,4,6,8]; // 

  const a2 = [1,2,3,6,7,10]
  const b2=[2,3,4,5,6]
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function bubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[i] < a[j]) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E264(a, b) {
  const result = [];

  for (let i = a.length - 1; i >= 0; --i) {
    result.push(a[i]);
  }

  for (let j = b.length - 1; j >= 0; --j) {
    result.push(b[j]);
  }

  bubbleSort(result);

  return result;
}

function test1() {
  const a1 = [1, 3, 5, 7]; //
  const a2 = [2, 4, 6, 8]; //

  const b1 = [1, 2, 3, 6, 7, 10];
  const b2 = [2, 3, 4, 5, 6];

  console.log(E264(a1, a2));
  console.log(E264(b1, b2));
}

{
  test1();
}
