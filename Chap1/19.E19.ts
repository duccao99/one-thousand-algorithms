function step1(n: number) {
  if (n === 0 || n === 1) return 1;
  return n * step1(n - 1);
}
function step2(x: number, n: number) {
  return Math.pow(x, n);
}
function E19(x: number, n: number) {
  //1+x+x3/3!+..+x^(2n+1)/(2n+1)!
  /**
   * + step 1: make n!
   * + step 2: make x^n
   * + step 3: loop i from 0 to n, ret+=step2(x,2*i+1)/step1(2*i+1)
   */
  var ret = 0;
  for (let i = 0; i <= n; ++i) ret += step2(x, 2 * i + 1) / step1(2 * i + 1);
  return ret + 1;
}

console.log(E19(3, 4));
