/**
 * Integrals
 * - What is integrals?
 * - Integrals essence?
 * - Integrals use for?
 *
 * -- --------------------------------
 * -- Exercise for integration
 * -- --------------------------------
 * Utils:
 * 1. ln(x) = log(e)(x), x > 0
 * 2. log(b)(b^x) = x
 * 3. |x| = x  if x >= 0
 *    |x| = -x if x < 0
 *
 *
 *
 *
 * 1. integration(x^n.dx) = x^(n + 1) / (n + 1), for n != 1 <- stuck
 *    + integration(x^2.dx)
 *    = x^(2 + 1) / (2 + 1)
 *    = x^3 / 3
 *
 *    + integration(x^3.dx)
 *    = x^(3 + 1) / (3 + 1)
 *    = x^4 / 4
 *
 *    + integration(x^4.dx)
 *    = x^(4 + 1) / (4 + 1)
 *    = x^5 / 5
 *
 *    + integration(x^1.dx)
 *    = x^(1 + 1) / (1 + 1)
 *    = x^2 / 2
 *
 *    + Proof of: integration(x^n.dx) = x^(n + 1) / (n + 1) <- stuck
 *
 * 2. integration(dx / x) = ln(x)
 *    + integration(dx / x) = ln(x)
 *    + integration(dx / x) = ln(x)
 *
 * 3. integration(dx / (a + bx)) = (1 / b).ln(a + bx)
 *    + integration(dx / (1 + 1.x))
 *      + a = 1
 *      + b = 1
 *      + integration(dx / (1 + 1.x))
 *      = (1 / 1).ln(1 + 1.x)
 *      = ln(|1 + x|)
 *
 *    + integration(dx / (1 + 2x))
 *      + a = 1
 *      + b = 2
 *      + integration(dx / (1 + 2x))
 *      = (1 / 2).ln(1 + 2.x)
 *      = (1 / 2)ln(|1 + 2x|)
 *
 *    + integration(dx / (2 + 3x))
 *      + a = 2
 *      + b = 3
 *      + integration(dx / (2 + 3x))
 *      = (1 / 3).ln(|2 + 3x|)
 *
 *    + integration(dx / (-1 + x))
 *      + a = -1
 *      + b = 1
 *      + integration(dx / (-1 + x))
 *      = (1 / 1).ln(-1 + 1.x)
 *      = ln(|x - 1|)
 *
 *    + integration(dx / (-1 - x))
 *      + a = -1
 *      + b = -1
 *      + integration(dx / (-1 - x))
 *      = (1 / -1).ln(|-1 - x|)
 *      = -ln(|-1 - x|)
 *
 *    + integration(dx / (-2 - 2x))
 *      + a = -2
 *      + b = -2
 *      + integration(dx / (-2 - 2x))
 *      = (1 / -2).ln(|-2 - 2x|)
 *      = - ln(|-2 - 2x|) / 2
 *
 * -- -----------------------------
 * -- draft
 * -- -----------------------------
 *
 *  * 3. |x| = x  if x >= 0
 *    |x| = -x if x < 0
 *
 * |-2 - 2x|
 * + if: -2 - 2x >= 0
 * then: |-2 - 2x| = -2 - 2x
 *
 * + if: -2 - 2x < 0
 * then: |-2 - 2x| = -(-2 - 2x) = 2 + 2x
 *
 *
 * + ln(|-2 - 2x|)
 *   + |-2 - 2x| > 0
 *     + -2 - 2x > 0
 *     -> |-2 - 2x| = -2 - 2x
 * =>  |-2 - 2x| > 0
 * <=> -2 - 2x > 0
 * <=> 2 + 2x < 0
 * <=> 1 + x < 0
 * <=> x < -1
 *
 *
 *
 * -- --------------------------------
 * -- Exercise for integrals
 * -- --------------------------------
 * Utils:
 * 1. integration(x^n.dx) = x^(n + 1) / (n + 1), for n != 1 <- stuck
 *
 *
 * 1. integrals(0->1)(x^n.dx)
 * = x^(n + 1) / (n + 1) |
 *
 *
 *
 */
