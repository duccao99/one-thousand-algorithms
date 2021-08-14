/**
 * Write a function to check is exists even number that is less than 2021 of an array
 *
 * Idea:
 * + loop & check
 */

function E124(a: number[]): boolean {
  for (let i = a.length - 1; i >= 0; --i)
    if (a[i] % 2 === 0 && a[i] < 2021) return true;
  return false;
}

console.log(E124([1, 2, 3, 4, 5]));
console.log(E124([2020, 2021, 20222]));
console.log(E124([2022, 2021, 20222]));
