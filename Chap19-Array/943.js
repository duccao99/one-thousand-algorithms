/**
 * - a =   [1,2,3,4,5], pos = 0
 * - ret = [1,1,1,1,1]
 *
 *
 * - a =   [1,2,3,4,5], pos = 1
 * - ret = [2,2,2,2,2]
 *
 * - a =   [1,2,3,4,5], pos = 2
 * - ret = [3,3,3,3,3]
 *
 *
 *
 */

function f1() {
  const a = [1, 2, 3, 4, 5];
  const pos = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = a[pos];
  }

  console.log(a);
}

function f2() {
  const a = [1, 2, 3, 4, 5];
  const pos = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = a[pos];
  }

  console.log(a);
}

function f3() {
  const a = [1, 2, 3, 4, 5];
  const pos = 2;
  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = a[pos];
  }
  console.log(a);
}

{
  f1();
  f2();
  f3();
}
