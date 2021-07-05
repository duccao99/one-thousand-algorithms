function E23(n: number) {
  // 6 -> 1*2*3*6
  var ret = 1;
  for (let i = 1; i <= n; ++i) if (n % i === 0) ret *= i;
  return ret;
}
console.log(E23(11));
console.log(E23(6));
