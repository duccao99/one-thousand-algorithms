function sn(n: number): number {
  return (n * (n + 1)) / 2;
}

function E70(n: number): number {
  /**
   * 1-1/(1+2)+1/(1+2+3)+..+(-1)^(n+1)*1/(1+2+..+n)
   * n=4 -> 1-1/(1+2)+1/(1+2+3)-1/(1+2+3+4)
   * idea
   * + i from 1 to n
   * + make 1+2+..+n = s(n)
   * + ret+=(-1)^(i+1)/s(i)
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(-1, i + 1) / sn(i);
  return ret;
}

console.log(E70(4));
console.log(E70(10000));

console.log(E70(199999999));
