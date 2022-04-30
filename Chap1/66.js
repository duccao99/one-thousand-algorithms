/**
 * Problem: Solve the ax^4 + bx^2 + c = 0 equation
 *
 *
 * Understanding the problem
 * Equation: ax^4 + bx^2 + c = 0
 *
 * -- -----------------------------------------
 * -- 1. Using quadratic formula method
 * -- -----------------------------------------
 * The: ax^4 + bx^2 + c
 * can be: at^2 + bt + c
 * with t = x^2
 *
 * Then we can solve quadratic equation: at^2 + bt + c = 0
 * then we can have t, then have x
 *
 * --
 *    t = x^2
 *    x = sqrt(t)
 *    x = -sqrt(t)
 *
 * => at^2 + bt + c = 0
 *
 *
 *
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
 * --
 * at^2 + bt + c = 0
 * + a = 0
 *   bt + c = 0
 *   + b = 0 -> t = null
 *   + b != 0 -> t = - c / b
 *     + t > 0 -> x = sqrt(t), x = -sqrt(t)
 *     + t < 0 -> x = null
 *
 * + a != 0
 *   + isNaN(2thRoot(b^2 - 4ac)) = true - return null
 *   + isNaN(2thRoot(b^2 - 4ac)) = false
 *          -b + 2thRoot(b^2 - 4ac)
 *     t1 = _______________________
 *                     2a
 *
 *           -b - 2thRoot(b^2 - 4ac)
 *     t2 = ________________________
 *                      2a
 *
 *     + t1 > 0 - done
 *       + t2 > 0 - done
 *         + x1 = sqrt(t1)
 *         + x2 = -sqrt(t1)
 *         + x3 = sqrt(t2)
 *         + x4 = -sqrt(t2)
 *       + t2 = 0 - done
 *         + x1 = sqrt(t1)
 *         + x2 = -sqrt(t1)
 *         + x3 = 0
 *       + t2 < 0 - done
 *         + x1 = sqrt(t1)
 *         + x2 = -sqrt(t1)
 *
 *     + t1 = 0 - done
 *       + t2 > 0 - done
 *         + x1 = 0
 *         + x2 = sqrt(t2)
 *         + x3 = -sqrt(t2)
 *       + t2 = 0 - done
 *         + x = 0
 *       + t2 < 0
 *         + x = 0 - done
 *
 *     + t1 < 0 - done
 *       + t2 > 0
 *         + x1 = sqrt(t2)
 *         + x2 = -sqrt(t2)
 *       + t2 = 0
 *         + x = 0 - done
 *       + t2 < 0
 *         + return null - done
 *
 *
 * -x^4 - 4x^2 + 4 = 0
 * + x^2 = t
 * -t^2 - 4t + 4 = 0
 *
 * + a = -1
 * + b = -4
 * + c = 4
 *
 * t1 = --4 + 2thRoot(16 - 4.(-1).4) / (2.(-1))
 * t2 = --4 - 2thRoot(16 - 4.(-1).4) / (2.(-1))
 *
 * t1 = -2 -2.2thRoot(2) < 0
 * t2 = -2 + 2.2thRoot(2) > 0
 *
 * + x1 = sqrt(t2)
 * + x2 = -sqrt(t2)
 *
 *
 * -- --------------------------------
 * -- 2. Use Quartic Formula Method
 * -- --------------------------------
 * Quartic Equation: ax^4 + bx^3 + cx^2 + dx + e = 0
 *
 * Quartic Formula:
 *
 * + if a == 0 - solveCubicEquation(b,c,d,e)
 *
 *
 * + if a != 0
 *
 * x1 = -b/4a - S + (1/2)*2thRoot(-4S^2 -2p + q/S)
 * x2 = -b/4a - S - (1/2)*2thRoot(-4S^2 -2p + q/S)
 * x3 = -b/4a + S + (1/2)*2thRoot(-4S^2 -2p - q/S)
 * x4 = -b/4a + S - (1/2)*2thRoot(-4S^2 -2p - q/S)
 *
 * Where:
 * p = (8ac - 3b^2)/(8a^2)
 * q = (b^3 - 4abc + 8a^2d)/(8a^3)
 *
 * And where:
 * S = (1/2).2thRoot((-2/3)p + (1/(3a)).(Q + delta0/Q))
 * Q = 3thRoot((delta1 + 2thRoot(delta1^2 - 4delta0^3))/2)
 *
 * With:
 * delta0 = c^2 - 3bd + 12ae
 * delta1 = 2c^3 - 9bcd + 27b^2e + 27ad^2 - 72ace
 *
 * And:
 * delta1^2 - 4delta0^3 = -27delta
 * delta = 256a^3e^3 - 192a^2bde^2 - 128a^2c^2e^2 + 144a^2cd^2e
 * - 27a^2d^4 + 144ab^2ce^2 - 6ab^2d^2e - 80abc^2de + 18abcd^3
 * + 16ac^4e - 4ac^3d^2 - 27b^4e^2 + 18b^3cde - 4b^3d^3
 * - 4b^2c^3e + b^2c^2d^2
 *
 *
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
   * + a = 0
   *   + ret = null
   * + a != 0
   *   + ret = - b / a
   */
  return a === 0 ? null : -b / a;
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
   * + a = 0
   *   + solve linear equation: bx + c = 0
   *
   * + a != 0
   *  + 2thRoot(b^2 - 4ac) is not a number ? return null
   *  + 2thRoot(b^2 - 4ac) is a number ? return
   *
   *    Quadratic formula:
   *
   *        -b + 2thRoot(b^2 - 4ac)
   *    x1 = _______________________
   *                    2a
   *
   *        -b - 2thRoot(b^2 - 4ac)
   *    x2 = ________________________
   *                    2a
   *
   *
   *
   *
   */
  if (a === 0) {
    return solveLinearEquation(b, c);
  }

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) return null;

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  if (x1 === x2) {
    return x1;
  }

  return [x1, x2];
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 */
function solveCubicEquation(a, b, c, d) {
  /**
   * Cubic Equation: ax^3 + bx^2 + cx + d = 0
   * + a = 0
   *   + solve quadratic equation: bx^2 + cx + d = 0
   * + a != 0
   */
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
}
/**
 *
 * @param {number} n
 *
 */
function fx(a, b, c) {
  if (a === 0) {
    const t = solveLinearEquation(b, c);
    if (t === null) {
      return t;
    }

    if (t > 0) {
      const x1 = Math.sqrt(t);
      const x2 = -Math.sqrt(t);
      return [x1, x2];
    }

    if (t < 0) {
      return null;
    }
  }

  if (isNaN(Math.sqrt(b ** 2 - 4 * a * c))) {
    return null;
  }

  const t1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  const t2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  if (t1 > 0) {
    if (t2 > 0) {
      const x1 = Math.sqrt(t1);
      const x2 = -Math.sqrt(t1);
      const x3 = Math.sqrt(t2);
      const x4 = -Math.sqrt(t2);
      return [x1, x2, x3, x4];
    }
    if (t2 === 0) {
      const x1 = Math.sqrt(t1);
      const x2 = -Math.sqrt(t1);
      const x3 = 0;
      return [x1, x2, x3];
    }
    if (t2 < 0) {
      const x1 = Math.sqrt(t1);
      const x2 = -Math.sqrt(t1);
      return [x1, x2];
    }
  }

  if (t1 === 0) {
    if (t2 > 0) {
      const x1 = 0;
      const x2 = Math.sqrt(t2);
      const x3 = -Math.sqrt(t2);
      return [x1, x2, x3];
    }
    if (t2 === 0) {
      return 0;
    }
    if (t2 < 0) {
      return 0;
    }
  }

  if (t1 < 0) {
    if (t2 > 0) {
      const x1 = Math.sqrt(t2);
      const x2 = -Math.sqrt(t2);
      return [x1, x2];
    }
    if (t2 === 0) {
      return 0;
    }

    if (t2 < 0) {
      return null;
    }
  }
}

function test1() {
  const a1 = -1;
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

{
  test1();
}
