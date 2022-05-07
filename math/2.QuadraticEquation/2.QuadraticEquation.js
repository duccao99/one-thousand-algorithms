/**
 * Quadratic Equation: y = f(x) = ax^2 + bx + c = 0
 *
 * Solve method:
 *
 * Sketch graph:
 * - The graph of a quadratic equation is always U-shaped or N-Shape
 * - The shape made by the graph of a quadratic function
 * is called a parabola
 *
 * - Sketch step:
 * + step 1: find vertex (Chỏm đầu parabola)
 * by calculate derivative d(y) / dx = g(x) = 0 then get the coordinate
 * + step 2: increase x positively to get the coordinates-intercepts
 * + step 3: increase x negatively to get the coordinates-intercepts
 * + step 4: sketch by plot those points
 *
 *
 * -- ------------------------------------------------------------
 * -- Sketch the graph of the equation: y = f(x) = x^2
 * -- ------------------------------------------------------------
 *
 * Utils:
 * 1. d(x^n) / dx = n.x^(n - 1)
 *
 * + step 1:
 *
 *   d(y) / dx
 * = d(x^2) / dx
 * = 2.x(2 - 1)
 * = 2.x
 * = 2x = g(x)
 *
 *     g(x) = 0
 * <=> 2x = 0
 * <=> x = 0
 * => y = 0
 * => vertex = (0,0)
 *
 * + step 2:
 * y = f(x) = x^2
 * + f(1) = 1
 * + f(2) = 2^2 = 4
 * + f(3) = 3^2 = 9
 * => (1,1), (2,4), (3,9)
 *
 * + step 3:
 *
 * + f(-1) = (-1)^2 = 1
 * + f(-2) = (-2)^2 = 4
 * + f(-3) = (-3)^2 = 9
 * => (-1,1), (-2,4), (-3,9)
 *
 *
 *
 *
 */
