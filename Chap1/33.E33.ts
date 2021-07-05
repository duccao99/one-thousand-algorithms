function E33(n: number) {
  // c(2+c(2+c(2+...+c(2))))
  // idea:
  // using recursive
  // n = 4 -> c(2+E(3))
  // n = 3 -> c(2+E(2))
  // n = 2 -> c(2+E(1))
  // n = 1 -> c(2) -> ret

  if (n === 0) return 0;
  if (n === 1) return Math.sqrt(2);
  return Math.sqrt(2 + E33(n - 1));
}

console.log(E33(4));
