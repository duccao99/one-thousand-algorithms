function E14(n: number, x: number) {
  // x+x3+x5+...+x2n+1
  // loop i from 0 to n
  // ret+=x^2*i+1
  var ret = 0;
  for (let i = 0; i <= n; ++i) ret += Math.pow(x, 2 * i + 1);
  return ret;
}

console.log(E14(4, 4));
