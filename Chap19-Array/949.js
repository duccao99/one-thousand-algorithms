/**
 * - a = [1,2,3,4,5]
 * - ret = [1,3,5,7,9]
 * + a[i] = a[i] + a[i - 1]
 *
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);

  for (let i = a.length - 1; i >= 1; --i) {
    a[i] = a[i] + a[i - 1];
  }

  console.log(a);
}

f();
