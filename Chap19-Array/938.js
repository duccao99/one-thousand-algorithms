/**
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 *
 * ---------0 1 2 3 4
 * - ret = [4,1,2,3,5]
 *
 * + swap index 3 2
 * + swap index 2 1
 * + swap index 1 0
 *
 *
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);

  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }

  swap(a, 3, 2);
  swap(a, 2, 1);
  swap(a, 1, 0);

  console.log(a);
}

f();
