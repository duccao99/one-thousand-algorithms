/**
 * Problem: Have a search keyword, have some words. Detect if the
 * search key word is equal to some keywords. Ignore the computer case sensitivity.
 * The letters are treated equivalent.
 *
 */

/**
 *
 * @param {string} searchKeyword
 * @param {string} word
 *
 */
function f(searchKeyword, word) {
  const regex = new RegExp(word, "gi");
  return regex.test(searchKeyword);
}

{
  const s1 = "Experience";
  const s2 = "Brief";

  const searchKeyword = "experience";

  console.log(f(searchKeyword, s1));
  console.log(f(searchKeyword, s2));
}
