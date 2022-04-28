/**
 * Problem: Solve the f(x) = ax^2 + bx + c = 0 equation
 *
 *
 * Understanding the problem
 * f(x) = ax^2 + bx + c (Quadratic Equation)
 *
 * -- ----------------------------------
 * -- 1. Using Factoring
 * -- ----------------------------------
 * 
 * Formula:  x^2 + (a + b)x + ab = (x + a)(x + b)
 *
 * Proof:
 *     x^2 + (a + b)x + ab
 * <=> x^2 + ax + bx + ab
 * <=> x(x + a) + b(x + a)
 * <=> (x + a)(x + b)
 *
 *
 *
 * Problem: x^2 - 4x - 5 = 0
 * Formula: x^2 + (a + b)x + ab = (x + a)(x + b)
 * Solve: find a, b
 * a + b = -4
 * ab = -5
 *
 * <=> a = -4 - b
 *     (-4 - b)b = -5
 *
 * <=> a = -4 - b
 *     -4b - b^2 = -5
 *
 * <=> a = -4 - b
 *     -b^2 - 4b + 5 = 0
 *
 * <=> a = -4 - b
 *     (b + 5)(1 - b) = 0
 *
 * <=> b = -5
 *     a = -4 --5 = -4 + 5 = 1
 *
 *     b = 1
 *     a = -4 - 1 = -5
 *
 * <=> (a,b) = (1, -5), (-5, 1)
 *
 *
 * + x^2 - 4x - 5 = (x + 1)(x - 5) = 0 -> x = -1, x = 5
 *
 * + x^2 - 4x - 5 = (x - 5)(x + 1) = 0 -> x = 5, x = -1
 *
 * => x^2 - 4x - 5 = 0, x = -1, x = 5
 *
 * -- ---------------------------------------------
 * -- 2. Using Factoring By Grouping - stuck
 * -- ---------------------------------------------
 * 
 * + Using factoring means:
 *   x^2 + x = x(x + 1)
 * + Grouping may means:
 *  (x + 1)(x + 2) = x^2
 *
 * x^2 - 4x - 5 = 0
 * make: x^2 - 4x - 5
 * become: x^2 + ax + bx - 5
 *
 * Why make: x^2 - 4x - 5
 * become:   x^2 + ax + bx - 5 ?
 *
 * How to know to set up a system like this:
 * a + b = -4
 * ab = -5
 *
 * -- ----------------------------------
 * -- 3. Using the quadratic formula
 * -- ----------------------------------
 * 
 * Quadratic Equation: f(x) = ax^2 + bx + c = 0
 * Quadratic formula:
 *
 *      -b + 2thRoot(b^2 - 4ac)
 * x1 = _______________________
 *                 2a
 *
 *      -b - 2thRoot(b^2 - 4ac)
 * x2 = ________________________
 *                 2a
 *
 *

 * 
 *
 *
 * 
 * Util: 
 * 1. (a + b)^2 = a^2 + b^2 + 2ab
 * 2. absolute symbol
 * |a| > 0 
 * 3. Square Root, sqrt
 * - In mathematics, a square root of a number x is
 * a number y such that y^2 = x, in other words, a number y
 * whose square is x.
 * - Another document definition: sqrt(x) denotes the positive root
 * 
 * 
 * - Example: 4 and -4 are square root of 16, 
 * because 4^2 = (-4)^2 = 16
 * + 2thRoot(x^2) = |x| = x
 * + 2thRoot(x^2) = |-x| = x
 * 
 * + 2thRoot(4^2) = |4| = 4
 * + 2thRoot(-4^2) = |-4| = 4
 * 
 * 
 * 
 * Why (a + b)^2 = a^2 + b^2 + 2ab ?
 * Proof: (a + b)^2 
 *    <=> (a + b)(a + b) 
 *    <=> a^2 + ab + ab + b^2 
 *    <=> a^2 + b^2 + 2ab
 * 
 * Formula Proof:
 * 
 * + Reverse proof, proof from the result 
 *      -b + 2thRoot(b^2 - 4ac)
 * x =  _______________________
 *                 2a
 * <=> 2ax + b = 2thRoot(b^2 - 4ac)
 * <=> (2ax + b)^2 = b^2 - 4ac
 * <=> 4a^2x^2 + b^2 + 2.2ax.b = b^2 - 4ac
 * <=> 4a^2x^2 + 4axb + 4ac = 0
 * <=> a^2x^2 + axb + ac = 0
 * <=> ax^2 + bx + c = 0
 * 
 * 
 *     -b - 2thRoot(b^2 - 4ac)
 * x = ________________________
 *                 2a
 *
 * <=> 2ax + b = -2thRoot(b^2 - 4ac)
 * <=> (2ax + b)^2 = b^2 - 4ac
 * <=> 4a^2x^2 + b^2 + 2.2ax.b = b^2 - 4ac
 * <=> 4a^2x^2 + 4abx + 4ac = 0 
 * <=> 4a(ax^2 + bx + c) = 0
 * <=> ax^2 + bx + c = 0
 * 
 * 
 * 
 * 
 * + Linear proof, proof from the given equation
 *     ax^2 + bx + c = 0
 * <=> 4a(ax^2 + bx + c) = 0
 * <=> 4a^2x^2 + 4abx + 4ac = 0
 * <=> 4a^2x^2 + 4abx + 4ac + b^2 = b^2
 * <=> 4a^2x^2 + 4abx + b^2 = b^2 - 4ac
 * <=> (2ax)^2 + b^2 + 2.(2ax).b = b^2 - 4ac
 * <=> (2ax + b)^2 = b^2 - 4ac
 * <=> + 2thRoot((2ax + b)^2) = 2thRoot(b^2 - 4ac)
 *     + 2thRoot((2ax + b)^2) = -2thRoot(b^2 - 4ac)
 * 
 * <=> + |2ax + b| = 2thRoot(b^2 - 4ac)
 *     + |2ax + b| = -2thRoot(b^2 - 4ac)
 * 
 * 
 * <=> + 2ax + b =  2thRoot(b^2 - 4ac)
 *     + 2ax + b = -2thRoot(b^2 - 4ac)
 * 
 *            -b + 2thRoot(b^2 - 4ac) 
 * <=> + x =   _______________________
 *                    2a
 *  
 *            -b - 2thRoot(b^2 - 4ac) 
 *     + x =   _______________________
 *                    2a
 *
 * 
 * 
 * -- ----------------------------------
 * -- 4. Completing the square method
 * -- ----------------------------------
 * - Completing the square means:
 * make the: ax^2 + bx + c = 0
 * becomes: u^2 = v^2
 * 
 * 
 * Quadratic equation: x^2 - 4x - 5 = 0
 * - Quadratic equations such as this one can be solved
 * by completing the square. In order to complete the square, 
 * the equation must first be in the form: x^ + bx = c  
 * 
 * Utils:
 * 1. (a + b)^2 = a^2 + b^2 + 2ab
 * 2. 2thRoot(x) = y | y^2 = x, y > 0,  y | -y ??
 * 
 * 
 *     x^2 - 4x - 5 = 0
 * <=> x^2 - 4x = 5
 * <=> x^2 + 2.x.(-2) = 5
 * <=> x^2 + (-2)^2 + 2.x.(-2) = (-2)^2 + 5
 * <=> (x + -2)^2 = 4 + 5
 * <=> (x - 2)^2 = 9
 * <=> 2thRoot((x - 2)^2) = 2thRoot(9)
 * <=> + x - 2 = 3
 *     + 2 - x = 3 
 * 
 * <=> + x = 5
 *     + x = -1
 * 
 * 
 * -- ----------------------------------
 * -- 5. Direct Factoring Method
 * -- ----------------------------------
 * Quadratic equation: x^2 - 4x - 5 = 0 
 * - Quadratic equation such as this one can be solved 
 * by using a new direct factoring method.
 * 
 * - Direct factoring method means:
 * make: x^2 + bx + c 
 * become: (x - r)(x - s)
 * so that we can have: x = r, x = s
 * 
 * --
 *     x^2 + bx + c = (x - r)(x - s)
 * <=> x^2 + bx + c = x^2 - sx - rx + rs
 * <=> x^2 + bx + c = x^2 + x(-s - r) + rs
 * 
 * => r + s = -b
 *    rs = c
 * 
 * --
 * Util:
 * 1. a^2 - b^2 = (a - b)(a + b)
 * Proof:  (a - b)(a + b)
 *       = a.a + a.b -a.b - b.b
 *       = a^2 - b^2
 *
 * 
 *  
 *     x^2 - 4x - 5 = 0
 * <=> r + s = --4 = 4
 *     rs = -5
 * 
 * <=> r + s = 4
 *     rs = -5
 * 
 * <=> r + s = 2 + 2 - u + u 
 *     rs = -5
 * 
 * <=> (r - u) + (s + u) = 2 + 2
 *     rs = -5
 * 
 * <=> r - u = 2
 *     s + u = 2
 *     rs = -5
 * 
 * <=> r = 2 + u 
 *     s = 2 - u
 *     rs = -5
 * 
 * <=> (2 + u)(2 - u) = -5
 *     r = 2 + u
 *     s = 2 - u
 *     rs = -5 
 * 
 * <=> 4 - u^2 = -5
 *     r = 2 + u
 *     s = 2 - u
 *     rs = -5 
 * 
 * <=> u^2 - 9 = 0
 *     r = 2 + u
 *     s = 2 - u
 *     rs = -5 
 * 
 * <=> u^2 = 9 
 *     r = 2 + u
 *     s = 2 - u
 *     rs = -5 
 * 
 * <=> u = +2thRoot(9) 
 *     u = -2thRoot(9) 
 *     r = 2 + u
 *     s = 2 - u
 *     rs = -5 
 * 
 * <=> u = 3
 *     u = -3
 *     r = 2 + u
 *     s = 2 - u
 *     rs = -5 
 * 
 * <=> u = 3
 *     u = -3
 *     r = 2 + 3
 *     s = 2 - 3
 *     rs = -5 
 * 
 *     u = 3
 *     u = -3
 *     r = 2 - 3
 *     s = 2 -- 3
 *     rs = -5 
 * 
 * <=> u = 3
 *     u = -3
 *     r = 5
 *     s = -1
 *     rs = -5 
 * 
 *     u = 3
 *     u = -3
 *     r = -1
 *     s = 5
 *     rs = -5 
 * 
 * <=> (r,s) = (5,-1), (-1,5)
 * 
 * =>   (x - r)(x - s)
 *    = (x - 5)(x - -1) 
 *    = (x - 5)(x + 1)
 * |
 *      (x - r)(x - s)
 *    = (x - -1)(x - 5)
 *    = (x + 1)(x - 5)
 * 
 * => x = -1, x = 5
 * 
 * 
 * 
 */

/**
 *
 * @param {number} a
 * @param {number} b
 *
 */
function solveLinearEquation(a, b) {
  /**
   * Linear Equation: ax + b = 0
   * Linear Formula: x = -b / a
   *
   * + if a = 0 -> return null
   * + if a != 0 -> return -b / a
   *
   */
  return a === 0 ? null : -b / a;
}

/**
 *
 * @param {number} n
 *
 */
function fx(a, b, c) {
  /**
   * Quadratic Equation: ax^2 + bx + c = 0
   * Quadratic formula:
   *
   *      -b + 2thRoot(b^2 - 4ac)
   * x1 = _______________________
   *                 2a
   *
   *      -b - 2thRoot(b^2 - 4ac)
   * x2 = ________________________
   *                 2a
   *
   * + if a = 0 -> return solve Linear Equation
   * + if a != 0 -> return formula
   *
   *
   *
   */

  if (a === 0) return solveLinearEquation(b, c);
  const temporary = Math.sqrt(b ** 2 - 4 * a * c);

  if (isNaN(temporary)) {
    return null;
  }

  const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  return x1 === x2 ? x1 : [x1, x2];
}

{
  const a1 = 1;
  const b1 = -4;
  const c1 = 4;

  const a2 = 1;
  const b2 = -4;
  const c2 = 5;

  const a3 = -1;
  const b3 = -4;
  const c3 = 5;

  const a4 = 0;
  const b4 = -4;
  const c4 = 5;

  console.log(fx(a1, b1, c1));
  console.log(fx(a2, b2, c2));
  console.log(fx(a3, b3, c3));
  console.log(fx(a4, b4, c4));
}
