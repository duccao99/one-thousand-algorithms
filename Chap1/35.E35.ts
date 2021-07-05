function E35(n: number) {
  // c(1+c(2+c(3+c(..+c(n)))))
  /**
   * i=n -> sqrt(n)
   * i=n-1 -> sqrt(n-1+sqrt(ns))
   *
   * i=1 -> sqrt(n)
   * i=2 -> sqrt()
   *
   *
   * n=4
   * i=4 -> sqrt(0+sqrt(4))
   * i=3 -> sqrt(sqrt(0+sqrt(4))+sqrt(3)) // wrong
   *
   * we want sqrt(1+sqrt(2+sqrt(3+sqrt(4))))
   *
   * idea:
   * i=4 -> sqrt(4)
   * i=3 -> sqrt(3+sqrt(4))
   * i=2 -> sqrt(2+sqrt(3+sqrt(4)))
   * i=1 -> sqrt(1+sqrt(2+sqrt(3+sqrt(4))))
   *
   *
   */
  var ret = 0;
  for (let i = n; i >= 1; i--) {
    ret = Math.sqrt(i + ret);
  }

  // i=4 -> sqrt(0+4)= sqrt(4)
  // i=3 -> sqrt(sqrt(4)+3)
  // i=2 -> sqrt(2+sqrt(3+sqrt(4)))
  // i=1 -> sqrt(1+sqrt(2+sqrt(3+sqrt(4))))
  return ret;
}

console.log(E35(4));
