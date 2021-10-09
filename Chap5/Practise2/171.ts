/**
 * Given an integer array. Find the all element greatest common divisor
 *
 */

function EuclideanGCD(a: number, b: number) {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function E171(a: number[]): number {
  let greatestCommonDivisor = a[0];

  for (let i = 0; i < a.length; ++i) {
    greatestCommonDivisor = EuclideanGCD(greatestCommonDivisor, a[i]);
  }

  return greatestCommonDivisor;
}

{
  const a = [1, 2, 3]; // 1
  const b = [2, 4, 6, 8]; // 2
  const c = [16, 4, 8]; // 2

  console.log(E171(a));
  console.log(E171(b));
  console.log(E171(c));
}
