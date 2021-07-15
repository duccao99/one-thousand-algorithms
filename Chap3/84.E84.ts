type RetFirstDegreeEquation = number | string;

function E84(a: number, b: number): RetFirstDegreeEquation {
  /**
   * ax + b = 0
   *
   * + a = 0, b = 0 -> x = Equation have infinite solutions
   * + a = 0, b != 0 -> x = Equation has no solution
   * + a != 0 , x = -b/a
   */
  if (a === 0 && b === 0) return 'Equation have infinite solutions';
  else if (a === 0 && b !== 0) return 'Equation has no solution';
  return -b / a;
}

console.log(E84(0, 0));
console.log(E84(0, 1));
console.log(E84(1, 1));
