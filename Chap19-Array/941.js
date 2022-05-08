/**
 * - a   = [1,2,3,4,5,6]
 * - ret = [3,4,1,2,5,6]
 *
 * -- ----------------
 * ---------0 1 2 3 4 5
 * - a   = [1,2,3,4,5,6]
 *
 * + swapTwoElement(a,0,1,2,3)
 *
 *
 *
 *
 */

function swapTwoElement(a, i1, j1, i2, j2) {
  const temporary1 = a[i1];
  a[i1] = a[i2];
  a[i2] = temporary1;

  const temporary2 = a[j1];
  a[j1] = a[j2];
  a[j2] = temporary2;
}

function f1() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a);

  swapTwoElement(a, 0, 1, 2, 3);

  console.log(a);
}

function f2() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a);

  swapTwoElement(a, 0, 1, a.length - 2, a.length - 1);

  console.log(a);
}

f1();
console.log("");
f2();
