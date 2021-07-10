function sn(n: number): number {
  return (n * (n + 1)) / 2;
}
function E71(x: number, n: number): number {
  /**
   * s(x,n)= -x+x2/(1+2)-x3/(1+2+3)+..+(-1)^n*x^n/(1+2+..+n)
   * + step 1: make 1+2+..+n
   * + step 2: i from 1 to n
   * + step 3: ret+=(-1)^i*x&i/(s(i))
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i)
    ret += (Math.pow(-1, i) * Math.pow(x, i)) / sn(i);
  return ret;
}

console.log(E71(3, 3));
console.log(E71(999, 99));
