/**
 * - a =   [1,2,3,4,5], n = 6
 * - ret = [6,6,6,6,6]
 *
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];
  const n = 6;

  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = n;
  }
  console.log(a);
}

f();
