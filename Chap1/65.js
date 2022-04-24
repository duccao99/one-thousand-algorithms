/**
 * Problem: Solve the f(x) = ax^2 + bx + c = 0 equation
 *
 *
 * Understanding the problem
 * f(x) = ax^2 + bx + c (Quadratic Equation)
 *
 * + Factoring
 *     x^2 + (a + b)x + ab
 * <=> x^2 + ax + bx + ab
 * <=> x(x + a) + b(x + a)
 * <=> (x + a)(x + b)
 *
 * => x^2 + (a + b)x + ab = (x + a)(x + b)
 *
 * x^2 - 4x - 5 = 0
 * + a = 1
 * + b = -5
 * + a + b = 1 - 5 = -4
 * => x^2 - 4x - 5 = (x + 1)(x + -5) = (x + 1)(x - 5)
 * => x = -1, x = 5
 *
 *
 *
 */

/**
 *
 * @param {number} n
 *
 */
function fx(a, b) {}

{
  const a = 5;
  const b = 10;
  console.log(fx(a, b));
}
