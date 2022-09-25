/**
 * Regex 1:
 * + ignore computer case sensitive. All letters are equivalent
 * + g flag: global
 * + i flag: insensitive
 *
 * Understanding
 * + g flag:
 *   + detect all strings in the file
 *   + if don't have g flag, it will detect on first line.
 *
 * + i flag:
 *   + insensitive letter case
 *   + all letters are equivalent
 *   + m = M, m = m, a = a, a = A, b = b, b = B
 *   + portfolio = Portfolio
 *
 * + s1 = "Portfolio"
 * + s2 = "portfolio"
 *
 * -> ret
 *    + s1 = s2
 *
 */

/**
 *
 * @param {string} s1
 * @param {string} s2
 *
 */
function f(s1, s2) {
  const regex = new RegExp(s1, "gi");
  return regex.test(s2);
}

{
  const s1 = "Portfolio";
  const s2 = "portfolio";

  console.log(f(s1, s2));
}
