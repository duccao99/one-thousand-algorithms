/**
 * Problem:
 * + given a default string  `abcdef`
 * + given a string inserter `12345`
 * + insert string inserter into default string at after character
 * `c` position
 * + ret
 *   + `abc12345def`
 *
 * + toys
 *   + string.replace(searchValue, replaceValue)
 *   + search value regex
 *
 * + step 1: regex `c`gm
 * + step 2: replaceValue = `c` + inserter
 * + step 3: ret = default.replace(regex,replaceValue)
 *
 *
 *
 */
function f() {
  let defaultString = "abcdef";
  let inserter = "12345";
  const characterC = `c`;
  const regex = new RegExp(characterC, "gm");
  const replaceValue = characterC + inserter;
  let ret = "";

  ret = defaultString.replace(regex, replaceValue);

  return ret;
}

console.log(f());
