/**
 * - a   = [1,2,3,4,5]
 * - ret = [2,3,4,5,6]
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);
  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = a[i] + 1;
  }
  console.log(a);
}

f();
