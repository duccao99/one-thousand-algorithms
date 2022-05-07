/**
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 *
 * ---------0 1 2 3 4
 * - ret = [2,1,3,4,5]
 *
 *
 */

function f() {
  const a = [1, 2, 3, 4, 5];

  const temporary = a[0];
  a[0] = a[1];
  a[1] = temporary;

  console.log(a);
}

f();
