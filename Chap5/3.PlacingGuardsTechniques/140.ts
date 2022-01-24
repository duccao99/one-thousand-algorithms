/**
 * Problem: find the minimum positive value in number array
 * if the array has no positive value then returns -1
 *
 * Idea:
 * +
 * + place guard = a[0]
 * + loop and check if a[i] < guard ? guard = a[i]
 * + if guard < 0 then returns -1 else return guard
 * @param a
 */

function E140(a: number[]): number {
  let guard = a[0];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] < guard) guard = a[i];
  }
  return guard < 0 ? -1 : guard;
}

console.log(E140([2, 1, 3, 4, 5])); // 1
console.log(E140([-1, -2, -3])); // -1
console.log(E140([1, 2, 3, 0, 3, 2, 1])); // 0
