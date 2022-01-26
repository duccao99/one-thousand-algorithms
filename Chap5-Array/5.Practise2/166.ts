/**
 * Find the array first number that was the 2^k number
 *
 * Idea:
 * + func check 2^k number
 * + loop check break
 */

function maxDivideByTwo(n: number): number {
  if (n === 2) return 1;

  return maxDivideByTwo(n / 2);
}

function is2powK(n: number): boolean {
  /**
   * Dabble
   * 2^0 = 1
   * 2^1 = 2
   * 2^2 = 4
   * 2^3 = 8
   * ...
   * 2^k
   *
   * Idea:
   * + loop i from n to 1, i divide by 2 each loop time, if i > 1 then still loop
   *
   * + check i/2 vs floor(i/2)
   */
  if (n === 1) return false;

  let flag: boolean = true;

  for (let i = n; i > 1; i /= 2) {
    if (i / 2 !== Math.floor(i / 2)) {
      flag = false;
    }
  }

  return flag;
}

function E166(a: number[]): number {
  let ret: number = -1;
  for (let i = 0; i < a.length; ++i) {
    if (is2powK(a[i])) {
      ret = a[i];
      break;
    }
  }
  return ret;
}

{
  // console.log(is2powK(3));
  // console.log(is2powK(6));
  // console.log(is2powK(0));
  // console.log(is2powK(2));
  // console.log(is2powK(4));
  // console.log(is2powK(8));
}

{
  const a = [1, 1, 2, 3, 4, 5]; // 2
  const b = [1, 1, 5, 8, 4, 5]; // 8
  const c = [1, 1, 5, 5, 1, 1]; // -1

  console.log(E166(a));
  console.log(E166(b));
  console.log(E166(c));
}
