/**
 * - a   = [1,2,3,4,5]
 * - ret = [5,1,2,3,4]
 *
 * -- ----------------
 * ---------0 1 2 3 4
 * - a   = [1,2,3,4,5]
 *
 * ---------0 1 2 3 4
 * - ret = [5,1,2,3,4]
 *
 *
 * + swap index 4 3
 * + swap index 3 2
 * + swap index 2 1
 * + swap index 1 0
 *
 *
 *
 *
 *
 */

function f1() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);

  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }

  swap(a, 4, 3);
  swap(a, 3, 2);
  swap(a, 2, 1);
  swap(a, 1, 0);

  console.log(a);
}

function f2() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);

  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }

  for (let i = 4; i >= 1; --i) {
    swap(a, i, i - 1);
  }

  console.log(a);
}

f1();
console.log("");
f2();
