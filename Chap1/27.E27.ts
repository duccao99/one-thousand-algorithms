function E27(n: number) {
  // count the amount even divisor of n
  // 6-> 2,6->2
  var ret = 0;
  for (let i = 1; i <= n; ++i) if (n % i === 0 && i % 2 === 0) ret++;
  return ret;
}
console.log(E27(6));
console.log(E27(11));
