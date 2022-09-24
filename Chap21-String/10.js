/**
 * Problem: Using regex to trim the string
 *
 * Understanding The Problem
 * + s = "    abc    def     "
 * + ret = "abc def"
 *
 * Solving Idea
 * + have: const regex = / +/g; // detect multiple spacing
 * + have: s.replace(regex," ");
 * -> ret1 = " abc def "
 * + have: const regexLeftSpacing = /^ +/g   // detect left spacing
 * -> ret2 = "abc def "
 * + have: const regexRightSpacing = / +$/g   // detect right spacing
 * -> ret = "abc def"
 *
 */

/**
 *
 * @param {string} s
 */
function f(s) {
  const regexMultipleSpacing = / +/g;
  const regexLeftSpacing = /^ +/g;
  const regexRightSpacing = / +$/g;
  return s
    .replace(regexMultipleSpacing, " ")
    .replace(regexLeftSpacing, "")
    .replace(regexRightSpacing, "");
}

{
  const s1 = "   abc    def    ";
  const s2 = "abc       def    ";
  const s3 = "abc def        ";
  const s4 = "abc def";
  const s5 = "abcdef";

  console.log(f(s1));
  console.log(f(s2));
  console.log(f(s3));
  console.log(f(s4));
  console.log(f(s5));
}
