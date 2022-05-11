/**
 * - a =   [1,2,3,4,5]
 * - ret = [6,3,5,7,9]
 *
 * + temporary = a[a.length - 1]
 * + i = a.length - 1 -> 1
 *   + a[i] = a[i] + a[i - 1]
 * + a[0] = a[0] + temporary
 *
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];
  console.log(a);

  const temporary = a[a.length - 1];

  for (let i = a.length - 1; i >= 1; --i) {
    a[i] = a[i] + a[i - 1];
  }

  a[0] = a[0] + temporary;
  console.log(a);
}

f();
