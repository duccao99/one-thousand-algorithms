/**
 * Function to check the perfect number
 * Idea:
 * + In number theory, a perfect number is a positive integer that
 * is equal to the sum of its positive divisors, excluding the number itself
 *
 * + step 1: get all divisor of n
 * + step 2: sum it
 * + check n = step 2 ? true:false
 * @param n
 */

function isPerfectNumber(n: number): boolean {
  let sum: number = 0;
  let n_divisors: number[] = nDivisors(n);
  let initial_value = 0;

  sum = n_divisors.reduce((previous_value, current_value) => {
    return previous_value + current_value;
  }, initial_value);

  return n === sum;
}

/**
 * Find n divisor
 * Idea:
 * 6 -> 1 2 3
 * + loop i from 1 to n -1
 * + if n%i=0 then push i into ret
 *
 * @param n
 */
function nDivisors(n: number): number[] {
  let ret: number[] = [];
  for (let i = 1; i < n - 1; i++) if (n % i === 0) ret.push(i);
  return ret;
}

/**
 * Problem:
 * Find the last perfect number position in the number array
 * if the array has no perfect number then returns -1
 *
 * Idea:
 * + check perfect number func
 * + loop i from 0 to n - 1
 * + check if a[i] is perfect number ? place guard : do nothing
 * + the last `if` will be the last perfect number position
 */

function E139(a: number[]): number {
  let guard = -1,
    i = 0;
  while (i < a.length) {
    if (isPerfectNumber(a[i])) guard = i;
    i++;
  }

  return guard;
}

console.log(E139([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5
console.log(E139([1, 2, 3, 4, 5, 7, 8, 9, 10])); // -1
console.log(E139([1, 2, 3, 28, 7, 8, 9, 10])); // 3
