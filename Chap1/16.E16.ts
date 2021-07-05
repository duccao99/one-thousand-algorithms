function step1(n: number) {
  // 1+2+..+n
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += i;
  return ret;
}

function step2(n: number, x: number) {
  // x^n
  return Math.pow(x, n);
}

function E16(n: number, x: number) {
  //x+x2/(1+2)+x3/(1+2+3)+..+xn/(1+2+..+n)
  /**
   * + step 1: make 1+2+..+n
   * + step 2: make xn
   * + step 3: loop i from 1 to n, ret+=step2/step1
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += step2(i, x) / step1(i);
  return ret;
}

console.log(E16(4, 4));
