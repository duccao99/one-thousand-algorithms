function gcd(a: number, b: number): number {
  while (b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function E63(a: number, b: number): number {
  // LCM - least common multiple
  // lcm(a,b)=|a*b|/gcd(a,b)
  /**
   * 3,4 -> 12
   * 9,12 -> 36
   *
   */
  return Math.floor(Math.abs(a * b)) / gcd(a, b);
}
console.log(E63(3, 4));

console.log(E63(9, 12));
