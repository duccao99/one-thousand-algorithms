function E44(n: number) {
  // 123 -> 1+2+3=6
  // 1234 -> 1+2+3+4
  /**
   * 1234/10 = 123
   * 1234%10=4
   *
   */
  var ret = 0;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret += i % 10;
  }

  return ret;
}

console.log(E44(123));
console.log(E44(4321));
