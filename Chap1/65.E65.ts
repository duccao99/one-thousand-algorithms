type retFirstDegreeEquation = string | number;

function firstDegreeEquation(a: number, b: number): retFirstDegreeEquation {
  if (a === 0) return 'This equation has no solution';
  return -b / a;
}

type retQuadraticEquation = retFirstDegreeEquation | number[];

function E65(a: number, b: number, c: number): retQuadraticEquation {
  // Second degree equation - Quadratic equation
  // ax^2+bx+c=0
  /**
   * x = (-b+-sqrt(b^2-4ac))/2a
   */

  if (a === 0) return firstDegreeEquation(b, c);

  if (b * b < 4 * a * c) {
    return 'This equation has no solution';
  }

  return [
    (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
    (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  ];
}

console.log(E65(0, 0, 1));
console.log(E65(0, 1, 1));
console.log(E65(4, 1, 1));
console.log(E65(4, 98, 1));
