type retFirstDegEquation = number | string;
type retE66 = string | number[];

function firstDegEq(a: number, b: number): retFirstDegEquation {
  if (a === 0) return 'No solution';
  return -b / a;
}

function E66(a: number, b: number, c: number) {
  // ax^4+bx^2+c=0
  // t=x^2 -> at^2+bt+c=0
  // t>=0
  //
  /**
   * + a=0 -> first degree equation
   * + a!=0 -> quadratic equation
   * + x=+-sqrt(t)
   */

  if (a === 0) {
    return firstDegEq(b, c);
  }

  if (b * b < a * 4 * c) return 'No solution';

  var t1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  var t2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

  if (t1 < 0 && t2 < 0) return 'No solution';
  if (t1 === t2) {
    return [Math.sqrt(t1), -Math.sqrt(t1)];
  }

  console.log(t1);
  console.log(t2);

  var x1 = undefined;
  var x2 = undefined;

  if (t1 >= 0) {
    x1 = Math.sqrt(t1);
    x2 = -Math.sqrt(t1);
  } else {
    x1 = Math.sqrt(t1);
  }

  var x3 = undefined;
  var x4 = undefined;

  if (t2 >= 0) {
    x3 = Math.sqrt(t2);
    x4 = -Math.sqrt(t2);
  } else {
    x3 = Math.sqrt(t2);
  }

  var ret = [];
  var carry = [x1, x2, x3, x4];
  for (let ele of carry) {
    if (ele) {
      ret.push(ele);
    }
  }

  return ret;
}

console.log(E66(0, 1, 2));
/**
 * x^4-x^2+1/4
 * t^2-t+1/4
 */
// x^2-x+1/4
console.log(E66(1, -1, 1 / 4));
