function E26(n: number) {
  // Find the product of all odd element that was a divisor of n >0
  // 6 -> 1*3
  var ret = 1;
  for (let i = 3; i <= n; ++i) if (n % i === 0 && i % 2 !== 0) ret *= i;
  return ret;
}
console.log(E26(6));
console.log(E26(11));
