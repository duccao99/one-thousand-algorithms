/**
 * - a   = [1,2,3,4,5,6]
 * - ret = [2,1,4,3,6,5]
 *
 * -- ----------------
 * ---------0 1 2 3 4 5
 * - a   = [1,2,3,4,5,6]
 *
 * + swap index 0 1
 * + swap index 2 3
 * + swap index 4 5
 *
 *
 *
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5, 6];
  console.log(a);

  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }

  for (let i = 0; i <= 4; i += 2) {
    swap(a, i, i + 1);
  }

  console.log(a);
}

f();
