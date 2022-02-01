/**
 * Problem: Given array of number and given a number M. 
 * Let's find the sequence such that it sumation of all elements
 * are equal to M 
 * 
 * Understanding the problem
 * - a = [1,2,3,4,5]
 * - m = 6
 * - ret = [[1,2,3]]
 * 
 * - a = [1,2,3,4,5,4,3,2,1]
 * - m = 6 
 * - ret = [[1,2,3],[3,2,1]]
 * 
 * 
  const a1 = [1,2,3,4,5]; // [[1,2,3]]
  const m1 = 6

  const a2 = [1,2,3,4,5,4,3,2,1]; // [[1,2,3],[3,2,1]]
  const m2 = 6


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
function reverse(a) {
  const mid = Math.round(a.length / 2);
  for (let i = a.length - 1; i >= mid; --i) {
    swap(a, i, a.length - i - 1);
  }
  return a;
}
/**
 *
 * @param {Array} a
 * @param {Number} m
 */
function E304(a, m) {
  let ret = [];
  let summation = 0;
  for (let i = a.length - 1; i >= 0; --i) {
    summation += a[i];

    if (summation > m) {
      summation = a[i];
    }

    if (summation === m) {
      const startPos = i;
      let subSumation = 0;
      let sequence = [];
      for (let j = startPos; j <= a.length - 1; j++) {
        subSumation += a[j];
        sequence = push(sequence, a[j]);

        if (subSumation === summation) {
          summation = a[i];
          break;
        }
      }
      ret = push(ret, sequence);
    }
  }
  return reverse(ret);
}

function test1() {
  const a1 = [1, 2, 3, 4, 5]; // [[1,2,3]]
  const m1 = 6;

  const a2 = [1, 2, 3, 4, 5, 4, 3, 2, 1]; // [[1,2,3],[3,2,1]]
  const m2 = 6;

  const a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [[2,3,4],[4,5],[9]]
  const m3 = 9;

  console.log(E304(a1, m1));
  console.log(E304(a2, m2));
  console.log(E304(a3, m3));
}

{
  test1();
}
