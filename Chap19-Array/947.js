/**
 * ---------0 1 2 3 4
 * - a =   [1,2,3,4,5]
 * - ret = [0,1,2,3,4]
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);

  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = i;
  }
  console.log(a);
}

f();
