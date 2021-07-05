function E20(n: number) {
  // sum all divisor of n
  // 6, 1+2+3+6
  var ret = 0;
  for (let i = 1; i <= n; ++i) if (n % i === 0) ret += i;
  return ret;
}
console.log(E20(6));
console.log(E20(60));
