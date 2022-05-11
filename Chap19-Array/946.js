/**
 * ---------0 1 2 3 4
 * - a =   [0,4,1,2,3]
 *
 * ---------0 1 2 3 4
 * - ret = [0,1,2,3,4]
 *
 * -- ----------------
 * + i = 4
 *   + if a[i] != i
 *     + j = 3 -> 0 <=> j = i - 1 -> 0
 *       + if a[j] = i
 *         + swap(a,j,i)
 *
 */

function f() {
  const a = [0, 4, 1, 2, 3];

  console.log(a);

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] !== i) {
      for (let j = i - 1; j >= 0; --j) {
        if (a[j] === i) {
          swap(a, i, j);
        }
      }
    }
  }

  console.log(a);

  // ret = [0 1 2 3 4]
}

function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

function f2() {
  const a = [0, 1, 4, 3, 2, 5, 7, 6];

  console.log(a);

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] !== i) {
      for (let j = i - 1; j >= 0; --j) {
        if (a[j] === i) {
          swap(a, i, j);
        }
      }
    }
  }

  console.log(a);
  // ret = [0,1,2,3,4,5,6,7]
}

f();
console.log("");
f2();
