type RetFirstDegreeEquation = string | number;

function E64(a: number, b: number): RetFirstDegreeEquation {
  // First degree equation
  // ax+b=0
  /**
   * + if a=0 -> then no x
   * + if a!=0 -> x=-b/a
   */
  if (a === 0) {
    return 'The equation has no solution';
  }
  return -b / a;
}

console.log(E64(0, 1));
console.log(E64(1, 1));
console.log(E64(4, 1));
