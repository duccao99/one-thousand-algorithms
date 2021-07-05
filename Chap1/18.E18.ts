function step1(n: number) {
  if (n === 0 || n === 1) return 1;
  return n * step1(n - 1);
}
function step2(x: number, n: number) {
  return Math.pow(x, n);
}
function E18(x: number, n: number) {
  //1+x2/2!+x4/4!+..+x2n/2n!
  /**
   * + step 1: make (n)! , let i is even
   * + step 2: make x^2n
   * + step 3: loop i from 0 to n,ret+=step2/step1, i+=2
   *
   */
  var ret = 0;
  for (let i = 0; i <= n; ++i) {
    ret += step2(x, 2 * i) / step1(2 * i);
  }
  return ret;
}
console.log(E18(3, 4));
