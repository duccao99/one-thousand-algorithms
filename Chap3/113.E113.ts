/**
 * Create a program to calculate
 * sin(x) = x - x^3/3! + x^5/5! + .. + (-1)^n * x^(2n+1)/(2n+1)!
 * with an accuracy of 0,00001
 *
 * idea:
 * + step 1: solve the n! problem
 * + step 2: loop i from 0 to n, ret+= (-1)^n* x^(2n+1)/(2n+1)!
 *
 *
 */

function factorial(n: number): number {
  /**
   * 6!=6*5*4*3*2*1
   */
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function E113(x: number): string {
  var ret: number = 0;

  // ret is too big to calculate taylor equation

  // let n was a small number
  for (let i = 0; i < 100; ++i) {
    ret += Math.pow(-1, i) * (Math.pow(x, 2 * i + 1) / factorial(2 * i + 1));
  }

  return ret.toPrecision(6);
}

for (let i = 0; i < 10; ++i) {
  console.log(E113(i));
  // console.log(Math.sin(i));
}
