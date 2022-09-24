/**
 * Problem: have a string and multiple lines, make it become
 * only a string
 *
 * Understanding
 * + s = "
 *     portfolio
 * "
 *
 * + ret = "portfolio"
 *
 * Solving
 * + step 1: detect `\n`
 * + step 2: replace `\n` by ``
 * + step 3: regex trim string
 *
 *
 *
 */

/**
 *
 * @param {string} s
 */
function f(s) {
  const regexDownLine = /\n+/g;
  const regexMultipleSpacing = / +/g;
  const regexLeftSpacing = /^ +/g;
  const regexRightSpacing = / +$/g;

  return s
    .replace(regexDownLine, "")
    .replace(regexMultipleSpacing, " ")
    .replace(regexLeftSpacing, "")
    .replace(regexRightSpacing, "");
}

{
  const s1 = ` 
    portfolio    
      `;

  console.log(f(s1));
}
