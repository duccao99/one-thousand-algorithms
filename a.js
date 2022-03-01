/**
 * -------0 1 2 3 4
 * - a = [1,2,3,4,5]
 *
 * ---------0 1 2
 * - ret = [5,4,3,2,1]
 */
let a = [1, 2, 3, 4, 5];
const mid = Math.floor(a.length / 2);
console.log(mid);
for (let i = 0; i <= mid; ++i) {
  const t = a[i];
  a[i] = a[a.length - i - 1];
  a[a.length - i - 1] = t;
}
console.log(a);
