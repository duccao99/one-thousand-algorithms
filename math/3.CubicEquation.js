/**
 * Cubic Equation: ax^3 + bx^2 + cx + d = 0
 * - Has either one real root or three real roots
 *
 * -- -----------------------------------
 * -- x^3 - 6x^2 + 11x - 6, three roots
 * -- -----------------------------------
 *
 * Suppose we wish to solve the equation: x^3 - 6x^2 + 11x - 6
 * This equation can be factored to give: (x - 1)(x - 2)(x - 3)
 *     x^3 - 6x^2 + 11x - 6
 * <=> (x - 1)(x - 2)(x - 3)
 *
 *     (x - 1)(x - 2)(x - 3)
 * <=> (x^2 - 2x - x + 2)(x - 3)
 * <=> (x^2 - 3x + 2)(x - 3)
 * <=> x^3 - 3x^2 - 3x^2 + 9x + 2x - 6
 * <=> x^3 - 6x^2 + 11x - 6
 *
 *     x^3 - 6x^2 + 11x - 6
 * <=> x^3 - 3x^2 - 3x^2 + 9x + 2x - 6
 * <=> x^2(x - 3) - 3x(x - 3) + 2(x - 3)
 * <=> (x - 3)(x^2 - 3x + 2)
 * <=> (x - 3)(x^2 - 2x - x + 2)
 * <=> (x - 3)[x(x - 2) - 1.(x - 2)]
 * <=> (x - 3)(x - 2)(x - 1)
 *
 *
 * -- --------------------------------------
 * -- x^3 - 5x^2 + 8x - 4, two roots
 * -- --------------------------------------
 * Utils:
 * 1. (a - b)^2
 * =  (a - b)(a - b)
 * =  a^2 - ab - ab + b^2
 * =  a^2 - 2ab + b^2
 *
 * Why (a - b)(a - b) = a^2 - ab - ab + b^2 ?
 *
 *
 *     x^3 - 5x^2 + 8x - 4
 * <=> (x - 1)(x - 2)^2
 *
 *     (x - 1)(x - 2)^2
 * <=> (x - 1)(x^2 - 2.x.2 + 4)
 * <=> (x - 1)(x^2 - 4x + 4)
 * <=> x^3 - 4x^2 + 4x - x^2 + 4x - 4
 * <=> x^3 - 5x^2 + 8x - 4
 *
 *     x^3 - 5x^2 + 8x - 4
 * <=> x^3 - x^2 - 4x^2 + 4x + 4x - 4
 * <=> x^2(x - 1) - 4x(x - 1) + 4(x - 1)
 * <=> (x - 1)(x^2 - 4x + 4)
 * <=> (x - 1)(x - 2)^2
 *
 *
 * -- --------------------------------------
 * -- x^3 - 3x^2 + 3x - 1 = 0, one root
 * -- --------------------------------------
 * Utils:
 * 1. (a - b)^3
 * = (a - b)(a - b)(a - b)
 * = (a^2 - ab - ab + b^2)(a - b)
 * = (a^2 - 2ab + b^2)(a - b)
 * = a^3 - a^2b - 2a^2b + 2ab^2 + ab^2 - b^3
 * = a^3 - b^3 - 3a^2b + 3ab^2
 *
 * 2. (a - b)^2
 * = (a - b)(a - b)
 * = a^2 - ab - ab + b^2
 * = a^2 - 2ab + b^2
 *
 *
 *     x^3 - 3x^2 + 3x - 1
 * <=> (x - 1)^3
 *
 *     (x - 1)^3
 * <=> x^3 - 1 - 3x^2 + 3x
 * <=> x^3 - 3x^2 + 3x - 1
 *
 *     x^3 - 3x^2 + 3x - 1
 * <=> x^3 - 1^3 - 3x^2.1 + 3x.1^2
 * <=> x^3 - x^2.1 - 2x^2.1 + 2x.1^2 + x.1^2 - 1^3
 * <=> x^2(x - 1) - 2x(x - 1) + (x - 1)
 * <=> (x - 1)(x^2 - 2x + 1)
 * <=> (x - 1)(x - 1)^2
 * <=> (x - 1)^3
 *
 *
 * -- ---------------------------------------------------------------
 * -- Suppose we wish to solve the equation: x^3 + x^2 + x - 3 = 0
 * -- ---------------------------------------------------------------
 *     x^3 + x^2 + x - 3
 * <=> (x - 1)(x^2 + 2x + 3)
 *
 *   (x - 1)(x^2 + 2x + 3)
 * = x^3 + 2x^2 + 3x - x^2 - 2x - 3
 * = x^3 + x^2 + x - 3
 *
 *   x^3 + x^2 + x - 3
 * = x^3 - x^2 + 2x^2 - 2x + 3x - 3
 * = x^2(x - 1) + 2x(x - 1) + 3(x - 1)
 * = (x - 1)(x^2 + 2x + 3)
 *
 * -- ----------------------
 * -- Exercise
 * -- ----------------------
 * Determine the real roots of the following cubic equation.
 * If a root is repeated say how many times.
 *
 * 1. (x + 1)(x - 2)(x - 3) = 0
 * => x = -1, x = 2, x = 3
 *
 *   (x + 1)(x - 2)(x - 3)
 * = (x^2 - 2x + x - 2)(x - 3)
 * = (x^2 - x - 2)(x - 3)
 * = x^3 - 3x^2 - x^2 + 3x - 2x + 6
 * = x^3 - 4x^2 + x + 6
 *
 *   x^3 - 4x^2 + x + 6
 * = x^3 - 2x^2 - 2x^2 + 4x - 3x + 6
 * = x^2(x - 2) - 2x(x - 2) - 3(x - 2)
 * = (x - 2)(x^2 - 2x - 3)
 * = (x - 2)(x - 3)(x + 1)
 *
 *
 *
 * -- ----------------------------
 * -- draft
 * -- ----------------------------
 * make: x^2 - 2x - 3
 * become something has: (x - 3)
 *   x^2 - 2x - 3
 * = x^2 - 3x + x - 3
 * = x(x - 3) + (x - 3)
 * = (x - 3)(x + 1)
 *
 * (x - 3)
 * x(x - 3) = x^2 - 3x
 *
 *
 *
 * -- ----------------------
 * -- Exercise
 * -- ----------------------
 * Utils:
 * 1. Quadratic Equation: ax^2 + bx + c = 0
 * if a != 0 & b^2 - 4ac > 0 then
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
 * 2. (x + 1)(x^2 - 12x + 20) = 0
 * => x = -1, x^2 - 12x + 20 = 0
 *
 *     x^2 - 12x + 20 = 0
 *     delta = b^2 - 4ac = (-12)^2 - 4.1.20 = 64 > 0
 * <=> x1 = (--12 + 2thRoot(64))/(2*1) = 10
 *     x2 = (--12 - 2thRoot(64))/(2*1) = 2
 *
 * => x = -1, x = 10, x = 2
 *
 * -- --------------------------
 *   (x + 1)(x^2 - 12x + 20)
 * = x^3 - 12x^2 + 20x + x^2 - 12x + 20
 * = x^3 - 11x^2 + 8x + 20
 *
 * -- --------------------------
 *   x^3 - 11x^2 + 8x + 20
 * =  (x + 1)(x - 10)(x - 2)
 *
 *
 *
 * -- draft
 * make: x^3 - 11x^2 + 8x + 20
 * become something has: (x + 1), (x - 10), (x - 2)
 *
 * x^3 - 11x^2 + 8x + 20
 * = x^3 + x^2 - 12x^2 - 12x + 20x + 20
 * = x^2(x + 1) - 12x(x + 1) + 20(x + 1)
 * = (x + 1)(x^2 - 12x + 20)
 * = (x + 1)(x - 10)(x - 2)
 *
 *
 * --
 * make: x^2 - 12x + 20
 * become something has:  (x - 10)
 *
 *   x^2 - 12x + 20
 * = x^2 - 10x - 2x + 20
 * = x(x - 10) - 2(x - 10)
 * = (x - 10)(x - 2)
 *
 *
 *
 *
 *
 * -2(x - 10) = -2x + 20
 *
 * x(x - 10) = x^2 - 10x
 *
 *
 *
 *
 * (x + 1)
 * -12x(x + 1) = -12x^2 - 12x + 20x + 20
 *
 *
 *
 *
 *
 * -12 + k = 8
 * <=> k = 8 + 12
 * <=> k = 20
 *
 * x - 12 = 32
 * x = 12 + 32
 * x = 44
 *
 *
 *
 * -- --------------------------------------------------------------
 * -- Suppose we wish to solve the equation: (x - 3)^2.(x + 4) = 0
 * -- --------------------------------------------------------------
 * utils:
 * 1. (a - b)^2
 * = (a - b)(a - b)
 * = a^2 - ab - ab + b^2
 * = a^2 - 2ab + b^2
 *
 * 2. a^2 - b^2
 * = (a - b)(a + b)
 *
 * (a - b)(a + b)
 * = a^2 + ab - ab - b^2
 * = a^2 - b^2
 *
 * make: a^2 - b^2
 * become something has: (a - b)
 *   a^2 - b^2
 * = a^2 - ab + ab - b^2
 * = a(a - b) + b(a - b)
 * = (a - b)(a + b)
 *
 *
 * a(a - b) = a^2 - ab
 *
 *
 * (x - 3)^2.(x + 4) = 0
 * <=> x = 3, x = - 4
 *
 *
 * --
 *   (x - 3)^2.(x + 4)
 * = (x^2 - 2.x.3 + 9)(x + 4)
 * = (x^2 - 6x + 9)(x + 4)
 * = x^3 + 4x^2 - 6x^2 - 24x + 9x + 36
 * = x^3 - 2x^2 - 15x + 36
 *
 * --
 *   x^3 - 2x^2 - 15x + 36
 * = (x - 3)(x^2 + x - 12)
 * = (x - 3)(x - 3)(x + 4)
 * = (x - 3)^2.(x + 4)
 *
 *
 * --
 * make: x^3 - 2x^2 - 15x + 36
 * become something has: (x - 3)
 *
 *   x^3 - 2x^2 - 15x + 36
 * = x^3 - 3x^2 + x^2 - 15x + 45 - 9
 * = x^2(x - 3) + x^2 - 9 - 15(x - 3)
 * = x^2(x - 3) + (x - 3)(x + 3) - 15(x - 3)
 * = (x - 3)(x^2 + x + 3 - 15)
 * = (x - 3)(x^2 + x - 12)
 *
 *
 *
 *
 *
 * 45 + k = 36
 * k = 36 - 45
 * k = -9
 * -15(x - 3) = -15x + 15.3 = -15x + 45
 * x^2(x - 3) = x^3 - 3x^2
 *
 * --
 * make: x^2 + x - 12
 * become something has: (x - 3)
 *
 *   x^2 + x - 12
 * = x^2 - 3x + 4x - 12
 * = x(x - 3) + 4(x - 3)
 * = (x - 3)(x + 4)
 *
 *
 * x(x - 3) = x^2 - 3x
 *
 *
 *
 *
 * -- ----------------------------------------------------------------
 * -- Suppose we wish to solve the equation: (x + 2)(x^2 + 6x + 10) = 0
 * -- ----------------------------------------------------------------
 * Utils:
 * 1. Quadratic equation: ax^2 + bx + c = 0
 * + if a = 0
 *   + if b = 0 then x = null
 *   + if b != 0 then x = - c / b
 * + if a != 0
 *   + if delta = b^2 - 4ac < 0 then x = null
 *   + if delta = b^2 - 4ac = 0 then x = -b / 2a
 *   + if delta = b^2 - 4ac > 0 then
 *     + x1 = (-b + 2thRoot(delta)) / 2a
 *     + x2 = (-b - 2thRoot(delta)) / 2a
 *
 *
 * (x + 2)(x^2 + 6x + 10) = 0
 * <=> x = - 2
 *     x^2 + 6x + 10 = 0
 *     + delta = b^2 - 4ac = 6^2 - 4.1.10 = 36 - 40 = - 4
 *     + delta < 0 => x = null
 *
 * => (x + 2)(x^2 + 6x + 10) = 0, x = -2
 *
 *
 * -- bung ra
 *   (x + 2)(x^2 + 6x + 10)
 * = x^3 + 6x^2 + 10x + 2x^2 + 12x + 20
 * = x^3 + 8x^2 + 22x + 20
 *
 * -- thu lại
 * make: x^3 + 8x^2 + 22x + 20
 * become something has: (x + 2)
 *
 *   x^3 + 8x^2 + 22x + 20
 * = x^3 + 2x^2 + 6x^2 + 12x + 10x + 20
 * = x^2(x + 2) + 6x(x + 2) + 10(x + 2)
 * = (x + 2)(x^2 + 6x + 10)
 *
 * -- draft
 * k + 12 = 22
 * k = 22 - 12
 * k = 10
 * 6x(x + 2) = 6x^2 + 12x
 * x^2(x + 2) = x^3 + 2x^2
 *
 *
 *
 *
 * -- ------------------------------------------------------------------
 * -- Suppose we wish to solve the equation: (x + 2)(x^2 + 7x + 10) = 0
 * -- ------------------------------------------------------------------
 *     (x + 2)(x^2 + 7x + 10) = 0
 * <=> x = -2
 *     x^2 + 7x + 10 = 0
 *     + a = 1 != 0
 *     + b = 7
 *     + c = 10
 *     + delta = b^2 - 4ac = 7^2 - 4.1.10 = 49 - 40 = 9 > 0
 *     + x1 = (-b + 2thRoot(delta)) / (2a)
 *          = (-7 + 2thRoot(9)) / (2.1)
 *          = (-7 + 3) / 2
 *          = -4 / 2
 *          = -2
 *     + x2 = (-b - 2thRoot(delta)) / (2a)
 *          = (-7 - 2thRoot(9)) / (2.1)
 *          = (-7 - 3) / 2
 *          = -10 / 2
 *          = -5
 *
 * => (x + 2)(x^2 + 7x + 10) = 0
 * have three roots: x = -2, x = -5, x = -2
 *
 * -- --------------
 * -- bung ra
 * -- --------------
 *   (x + 2)(x^2 + 7x + 10)
 * = x^3 + 7x^2 + 10x + 2x^2 + 14x + 20
 * = x^3 + 9x^2 + 24x + 20
 *
 * -- --------------
 * -- thu lại
 * -- --------------
 *   x^3 + 9x^2 + 24x + 20
 * = (x + 2)(x^2 + 7x + 10)
 * = (x + 2)(x + 5)(x + 2)
 * = (x + 2)^2.(x + 5)
 *
 *
 * --
 * make: x^3 + 9x^2 + 24x + 20
 * become something has: (x + 2), (x + 5), (x + 2)
 *   x^3 + 9x^2 + 24x + 20
 * = x^3 + 2x^2 + 7x^2 + 14x + 10x + 20
 * = x^2(x + 2) + 7x(x + 2) + 10(x + 2)
 * = (x + 2)(x^2 + 7x + 10)
 * = (x + 2)(x^2 + 5x + 2x + 10)
 * = (x + 2)[x(x + 5) + 2(x + 5)]
 * = (x + 2)(x + 5)(x + 2)
 *
 * -- draft
 *
 *
 * x(x + 5) = x^2 + 5x
 *
 * 14 + k = 24
 * k = 24 - 14
 * k = 10
 *
 * 7x(x + 2) = 7x^2 + 14x
 *
 * x^2(x + 2) = x^3 + 2x^2
 *
 *
 *
 * -- -----------------------------------------------------------------
 * -- Suppose we wish to solve the equation: (x - 5)(x^2 - 10x + 25) = 0
 * -- ---------------------------------------------------------------
 *     (x - 5)(x^2 - 10x + 25) = 0
 * <=> x = 5
 *     x^2 - 10x + 25 = 0
 *     + a = 1 != 0
 *     + b = -10
 *     + c = 25
 *     + delta = b^2 - 4ac = (-10)^2 - 4.1.25 = 100 - 100 = 0
 *     => x1 = x2 = -b / 2a = --10 / (2.1) = 10 / 2 = 5
 *
 * =>  (x - 5)(x^2 - 10x + 25) = 0
 * has three roots repeated: x = 5, x = 5, x = 5
 *
 *
 * -- --------
 * -- bung ra
 * -- --------
 *   (x - 5)(x^2 - 10x + 25)
 * = x^3 - 10x^2 + 25x - 5x^2 + 50x - 125
 * = x^3 - 15x^2 + 75x - 125
 *
 * -- --------
 * -- thu lai
 * -- --------
 * utils:
 * 1. (a - b)^2
 * = (a - b)(a - b)
 * = a^2 - ab - ab + b^2
 * = a^2 - 2ab + b^2
 *
 *  x^3 - 15x^2 + 75x - 125
 * = (x - 5)(x^2 - 10x + 25)
 * = (x - 5)(x - 5)^2
 * = (x - 5)^3
 *
 *
 * make:  x^3 - 15x^2 + 75x - 125
 * become something has: (x - 5)
 *
 *   x^3 - 15x^2 + 75x - 125
 * = x^3 - 5x^2 - 10x^2 + 50x + 25x - 125
 * = x^2(x - 5) - 10x(x - 5) + 25(x - 5)
 * = (x - 5)(x^2 - 10x + 25)
 *
 * -- draft
 * 25(x - 5) = 25x - 125
 * -10x(x - 5) = -10x^2 + 50x
 * x^2(x - 5) = x^3 - 5x^2
 *
 *
 *
 *
 *
 *
 * -- --------------------------------------------------------------------------------
 * -- Method 1: make cubic equation becomes quadratic equation and linear equation
 * -- ---------------------------------------------------------------------------------
 * To solve cubic equation: ax^3 + bx^2 + cx + d = 0
 * find one root then make the equation becomes
 * quadratic equation & linear equation
 *
 *
 * - Example: f(x) = x^3 - 5x^2 - 2x + 24 = 0
 * + f(-2) = 0 => x = -2
 *
 *
 * make: x^3 - 5x^2 - 2x + 24
 * become something has: (x + 2)
 *   x^3 - 5x^2 - 2x + 24
 * = x^3 + 2x^2 - 7x^2 - 14x + 12x + 24
 * = x^2(x + 2) - 7x(x + 2) + 12(x + 2)
 * = (x + 2)(x^2 - 7x + 12)
 *
 * draft:
 * -7x(x + 2) = -7x^2 - 14x
 * x^2(x + 2) = x^3 + 2x^2
 *
 *
 * =>  x^3 - 5x^2 - 2x + 24 = 0
 * <=> (x + 2)(x^2 - 7x + 12) = 0
 * <=> x = - 2
 *     x^2 - 7x + 12 = 0
 *     + a = 1 != 0
 *     + b = -7
 *     + c = 12
 *     + delta = b^2 - 4ac = 49 - 4.1.12 = 49 - 48 = 1 > 0
 *     + x1 = (-b + 2thRoot(delta)) / (2a) = (--7 + 1) / 2
 *          = 4
 *       x2 = (-b - 2thRoot(delta)) / (2a) = (--7 - 1) / 2
 *          = 3
 *
 *
 * => x^3 - 5x^2 - 2x + 24 = 0
 * has three roots: x = -2, x = 4, x = 3
 *
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
   * + if a = 0 then return null
   * + if a != 0 then x = - b / a
   *
   */
  return a === 0 ? null : -b / a;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 */
function solveCubicEquationMethod1(a, b, c, d) {
  /*
   * -- --------------------------------------------------------------------------------
   * -- Method 1: make cubic equation becomes quadratic equation and linear equation
   * -- ---------------------------------------------------------------------------------
   * To solve cubic equation: ax^3 + bx^2 + cx + d = 0
   * find one root then make the equation becomes
   * quadratic equation & linear equation
   *
   *
   * - Example: f(x) = x^3 - 5x^2 - 2x + 24 = 0
   * + f(-2) = 0 => x = -2
   *
   *
   * make: x^3 - 5x^2 - 2x + 24
   * become something has: (x + 2)
   *   x^3 - 5x^2 - 2x + 24
   * = x^3 + 2x^2 - 7x^2 - 14x + 12x + 24
   * = x^2(x + 2) - 7x(x + 2) + 12(x + 2)
   * = (x + 2)(x^2 - 7x + 12)
   *
   * draft:
   * -7x(x + 2) = -7x^2 - 14x
   * x^2(x + 2) = x^3 + 2x^2
   *
   *
   * =>  x^3 - 5x^2 - 2x + 24 = 0
   * <=> (x + 2)(x^2 - 7x + 12) = 0
   * <=> x = - 2
   *     x^2 - 7x + 12 = 0
   *     + a = 1 != 0
   *     + b = -7
   *     + c = 12
   *     + delta = b^2 - 4ac = 49 - 4.1.12 = 49 - 48 = 1 > 0
   *     + x1 = (-b + 2thRoot(delta)) / (2a) = (--7 + 1) / 2
   *          = 4
   *       x2 = (-b - 2thRoot(delta)) / (2a) = (--7 - 1) / 2
   *          = 3
   *
   *
   * => x^3 - 5x^2 - 2x + 24 = 0
   * has three roots: x = -2, x = 4, x = 3
   *
   *
   */

  /**
   *
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   *
   */
  function findOneRoot(a, b, c, d) {
    /**
     * f(x) =  ax^3 + bx^2 + cx + d
     *
     * + loop x to find which x then f(x) = 0
     *
     */

    for (let i = 100; i >= -100; --i) {
      const fx = a * i ** 3 + b * i ** 2 + c * i + d;
      if (fx === 0) {
        return i;
      }
    }

    return null;
  }

  /**
   *
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   *
   */
  function findQuadraticEquationCoefficient(a, b, c, d) {
    /**
     * - x^3 - 5x^2 - 2x + 24 = 0
     * - one root = 4, x = 4
     * - ret = x^2 - x - 6, ret = [a,b,c] = [1,-1,-6]
     *
     *
     *  x^3 - 5x^2 - 2x + 24 = 0
     *  <=> (x - 4)(x^2 - x -6) = 0
     *
     *
     *   x^3 - 5x^2 - 2x + 24
     * = x^3 - 4x^2 - x^2 + 4x - 6x + 24
     * = x^2(x - 4) - x(x - 4) - 6(x - 4)
     * = (x - 4)(x^2 - x - 6)
     *
     *
     * draft:
     * -6(x - 4) = -6x + 24
     * -x(x - 4) = -x^2 + 4x
     * x^2(x - 4) = x^3 - 4x^2
     *
     *
     */
    const oneRoot = findOneRoot(a, b, c, d);
    const aCoefficient = 1;
    const bCoefficient = b + oneRoot * aCoefficient;
    const cCoefficient = c + oneRoot * bCoefficient;

    return [aCoefficient, bCoefficient, cCoefficient];
  }

  /**
   *
   * @param {number} a
   * @param {number} b
   * @param {number} c
   *
   */
  function solveQuadraticEquation(a, b, c) {
    /**
     * Quadratic Equation: ax^2 + bx + c = 0
     * + if a = 0 then solveLinearEquation(b,c)
     * + if a != 0
     *   + delta = b^2 - 4ac
     *     + if delta < 0 then return null
     *     + if delta = 0 then return -b / 2a
     *     + if delta > 0 then
     *       + x1 = (-b + 2thRoot(delta)) / 2a
     *       + x2 = (-b - 2thRoot(delta)) / 2a
     *
     *
     *
     */
    if (a === 0) return solveLinearEquation(b, c);

    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) return null;

    if (delta === 0) return -b / (2 * a);

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [x1, x2];
  }

  const quadraticCoefficient = findQuadraticEquationCoefficient(a, b, c, d);

  const oneRoot = findOneRoot(a, b, c, d);
  const anotherRoot = solveQuadraticEquation(...quadraticCoefficient);

  if (anotherRoot === null) {
    return [oneRoot];
  }

  return [oneRoot, ...anotherRoot];
}

/**
 *  f(x) = x^3 - 5x^2 - 2x + 24 = 0
 *  <=> (x + 2)(x - 3)(x - 4) = 0
 *  => x = -2, x = 3, x = 4
 *
 *  <=> (x + 2)(x^2 - 7x + 12) = 0
 *  |
 *  <=> (x - 4)(x^2 - x -6) = 0
 *
 *
 *   x^3 - 5x^2 - 2x + 24
 * = x^3 - 4x^2 - x^2 + 4x - 6x + 24
 * = x^2(x - 4) - x(x - 4) - 6(x - 4)
 * = (x - 4)(x^2 - x - 6)
 *
 *
 * draft:
 * -6(x - 4) = -6x + 24
 * -x(x - 4) = -x^2 + 4x
 * x^2(x - 4) = x^3 - 4x^2
 *
 *
 */
const a = 1;
const b = -5;
const c = -2;
const d = 24;

console.log(solveCubicEquationMethod1(a, b, c, d));
