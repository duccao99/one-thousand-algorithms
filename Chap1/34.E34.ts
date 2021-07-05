function E34(n: number) {
  // c(n+c(n-1+c(...+c(1))))
  // + step 1: if n===0 return 0, 1 return 1
  // + step 2: return sqrt(n+E(n-1))
  // n = 3 -> sqrt(3+E(2))
  // n = 2 -> sqrt(2+E(1))
  // n = 1 -> sqrt(1) -> sqrt(2+sqrt(1)) -> sqrt(3+sqrt(2+sqrt(1))) -> ret
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Math.sqrt(n + E34(n - 1));
}
console.log(E34(4));
console.log(E34(100));
