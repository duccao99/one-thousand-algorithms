function step1(n: number) {
  // n!
  if (n === 0 || n === 1) return 1;
  return n * step1(n - 1);
}

function step2(x: number, n: number) {
  return Math.pow(x, n);
}

function E17(x: number, n: number) {
  // x+x2/2!+x3/3!+..+xn/n!
  /**
   * + step 1: make n!
   * + step 2: make x^n
   * + step 3: loop i from 1 to n, ret+=step2/step1
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += step2(x, i) / step1(i);
  return ret;
}
console.log(E17(3, 4));
