type RetFirstDegreeEquationE100 = string | number;

function solveFirstDegreeEquation(
  a: number,
  b: number
): RetFirstDegreeEquationE100 {
  /**
   * ax+b=0
   * + a=0, b=0 -> infinity
   * + a=0, b!=0 -> no result
   * + a!=0 -> x=-b/as
   */
  if (a === 0 && b === 0) return 'Infinity';
  if (a === 0 && b !== 0) return 'No result';
  return -b / a;
}

type RetQuadraticEquationE100 = RetFirstDegreeEquationE100 | number[];

function E100(a: number, b: number, c: number): RetQuadraticEquationE100 {
  /**
   * Write a program solve the quadratic equation
   * ax^2+bx+c=0
   * + a = 0 -> first degree equation
   *
   * + x = (-b+-sqrt(b^2-4ac))/2a
   *
   */
  if (a === 0) {
    return solveFirstDegreeEquation(b, c);
  }

  if (b * b < 4 * a * c) {
    return 'This equation has no solution';
  }
  const ret: number[] = [
    -b + Math.sqrt(b * b - 4 * a * c) / (2 * a),
    -b - Math.sqrt(b * b - 4 * a * c) / (2 * a)
  ];
  return ret;
}

console.log(E100(1, -1, 1));
console.log(E100(4, 4, -4));
