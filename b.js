/**
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 * ---------0 1 2 3 4
 * - ret = [2,3,4,5,1]
 *
 *
 *
 *
 */
const a = [1, 2, 3, 4, 5];
const temporary = a[0];
for (let i = 0; i < a.length - 1; ++i) {
  const temporary = a[i];
  a[i] = a[i + 1];
  a[i + 1] = temporary;
}
a[a.length - 1] = temporary;
console.log(a);
