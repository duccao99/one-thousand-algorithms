/**
 * Sketch the graph of the equation: y = (x − 2)(x + 3)(x − 1)
 * Utils:
 * 0. (a + b)^2 = a^2 + b^2 + 2ab
 *
 * 1. d(a) / dx = 0
 *    + d(1) / dx = 0
 *    + d(2) / dx = 0
 *    + d(3) / dx = 0
 *    + d(n) / dx = 0
 *
 *    + y = a
 *      + y = 1
 *        + d(y) / dx = 0
 *        + d(1) / dx = 0
 *      + y = 2
 *
 * 2. d(x) / dx = 1
 *    + d(x) / dx = 1
 *
 * 3. d(ax) / dx = a
 *    + d(2x) / dx = 2
 *    + d(3x) / dx = 3
 *    + d(4x) / dx = 4
 *
 *
 * 4. d(u^n) / dx = n.u^(n - 1). du / dx
 *    + d((x + 1)^2) / dx = 2.(x + 1)^(2 - 1) . d(x + 1) / dx
 *                        = 2.(x + 1).d(x + 1) / dx
 *                        = 2.(x + 1). [d(x) / dx + d(1) / dx]
 *                        = 2.(x + 1). (1 + 0)
 *                        = 2.(x + 1)
 *                        = 2x + 2
 *   + d((2x + 1)^3) / dx = 3.(2x + 1)^(3 - 1). d((2x + 1)) / dx
 *                        = 3.(2x + 1)^2. [d(2x) / dx + d(1) / dx]
 *                        = 3.(4x^2 + 1 + 4x). [2 + 0]
 *                        = 6.(4x^2 + 1 + 4x)
 *                        = 24x^2 + 6 + 24x
 *                        = 24x^2 + 24x + 6
 *
 *
 * -- -----------------------------------------------------------
 * Sketching the graph of the equation: y = (x − 2)(x + 3)(x − 1)
 * -- -----------------------------------------------------------
 * Method:
 * + step 1: Find the x-intercepts by putting y = 0
 * + step 2: Find the y-intercepts by putting x = 0
 * + step 3: Find extreme-coordinates by derivate d(y) / dx
 *   + Why one know how to find extreme point?
 * + step 4: Plot the points above to sketch the cubic curve
 *
 * -- -----------------------
 * y = f(x) = (x − 2)(x + 3)(x − 1)
 *          = (x^2 + 3x - 2x - 6)(x - 1)
 *          = (x^2 + x - 6)(x - 1)
 *          = x^3 - x^2 + x^2 - x - 6x + 6
 *          = x^3 - 7x + 6
 *
 * + step 1: find x-intercepts
 *   +   y = 0
 *   <=> (x − 2)(x + 3)(x − 1) = 0
 *   <=> x = 2, x = -3, x = 1
 *   => x-intercepts: 2, -3, 1
 * + step 2: find y-intercepts
 *   + x = 0
 *   <=> y = (0 - 2)(0 + 3)(0 - 1)
 *   <=> y = (-2).(3).(-1)
 *   <=> y = 6
 *   => y-intercepts: 6
 * + step 3: find extreme-coordinates
 *   + d(y) / dx
 *   = d(x^3 - 7x + 6) / dx
 *   = 3x^2 - 7 = g(x)
 *
 *   + g(x) = 0
 *   <=> 3x^2 - 7 = 0
 *   <=> x1 = 2thRoot(7 / 3) ~ 1.52
 *       x2 = -2thRoot(7 / 3) ~ - 1.52
 *   + f(x1) ~ -1.1
 *   + f(x2) ~ 13.12
 *   => extreme-coordinates: (1.52, -1.1), (-1.52, 13.12)
 *
 *
 *
 * + step 4: plot the points
 *   + x-intercepts: 2, -3, 1
 *   + y-intercepts: 6
 *   + extreme-coordinates: (1.52, -1.1), (-1.52, 13.12)
 *
 *
 *
 * -- -----------------------------------------------------------
 * Sketch the graph of the equation: y = x^3
 * -- -----------------------------------------------------------
 *
 *
 */
