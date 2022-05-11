/**
 * - a =   [1,2,3,4,5,6], n1 = 7, n2 = 8
 * - ret = [7,7,7,8,8,8]
 *
 * -- ----
 * -- 0 1 2 3 4 5
 *   [1,2,3,4,5,6]
 */

function f() {
  const a = [1, 2, 3, 4, 5, 6];
  const n1 = 7;
  const n2 = 8;
  const midPosition = Math.floor((a.length - 1) / 2);
  console.log(midPosition);
  for (let i = a.length - 1; i >= midPosition + 1; --i) {
    a[i] = n2;
  }

  for (let j = midPosition; j >= 0; --j) {
    a[j] = n1;
  }
  console.log(a);
}

f();
