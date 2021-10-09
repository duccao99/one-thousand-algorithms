/**
 * Given an integer array, find the all element LCM (least common multiple)
 *
 * 12 = 2 x 2 x 3
 * 20 = 2 x 2 x 5
 * -> lcm(12,20) = 2 x 2 x 3 x 5
 * -> gcd(12,20) = 2 x 2
 *
 *
 * a x b = gcd(a,b) x lcm(a,b)
 * -> lcm(a,b) = a x b / gcd(a,b)
 */

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function E172(a: number[]): number {
  let ret: number = a[0];

  for (let i = 1; i < a.length; ++i) ret = lcm(ret, a[i]);

  return ret;
}

{
  const a = [1, 2, 3, 4, 5];
  const b = [6, 7, 8, 9, 10];
  const c = [20, 12];

  console.log(E172(a));
  console.log(E172(b));
  console.log(E172(c));
}
