/**
 * - a   = [1,2,3,4,5,6]
 * - ret = [4,5,6,1,2,3]
 *
 * - a   = [1,2,3,4,5,6,7,8,9]
 * - ret = [7,8,9,4,5,6,1,2,3]
 *
 * - a   = [1,2,3,4,5,6,7,8,9]
 * - ret = [1,5,6,7,2,3,4,8,9]
 *
 *
 *
 *
 */

function swapThreeElements(a, i1, j1, k1, i2, j2, k2) {
  const temporary1 = a[i1];
  a[i1] = a[i2];
  a[i2] = temporary1;

  const temporary2 = a[j1];
  a[j1] = a[j2];
  a[j2] = temporary2;

  const temporary3 = a[k1];
  a[k1] = a[k2];
  a[k2] = temporary3;
}

function f1() {
  /**
   * --------0 1 2 3 4 5
   *  a   = [1,2,3,4,5,6]
   *  ret = [4,5,6,1,2,3]
   *
   *
   */
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a);

  swapThreeElements(a, 0, 1, 2, 3, 4, 5);

  console.log(a);
}

function f2() {
  /*
   * ---------0 1 2 3 4 5 6 7 8
   * - a   = [1,2,3,4,5,6,7,8,9]
   * - ret = [7,8,9,4,5,6,1,2,3]
   *
   */
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(a);

  swapThreeElements(
    a,
    0,
    1,
    2,
    a.length - 1 - 1 - 1,
    a.length - 1 - 1,
    a.length - 1
  );

  console.log(a);
}

function f3() {
  /*
   * ---------0 1 2 3 4 5 6 7 8
   * - a   = [1,2,3,4,5,6,7,8,9]
   * - ret = [1,5,6,7,2,3,4,8,9]
   *
   *
   */
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(a);

  const arrayParameter = [];

  for (let i = 1; i <= 6; ++i) {
    arrayParameter.push(i);
  }

  swapThreeElements(a, ...arrayParameter);

  console.log(a);
}

// f1();
console.log("");
// f2();
// console.log("");
f3();
