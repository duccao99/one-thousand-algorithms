/**
 * Problem:
 * + given a default string  `<img />`
 * + given a string inserter ` border="0"`
 * + insert string inserter into default string at after character
 * `g` position
 * + ret
 *   + `<img border="0"  />`
 *
 * + toys
 *   + string.replace(searchValue, replaceValue)
 *   + search value regex
 *
 * + step 1: regex `g`gm
 * + step 2: replaceValue = `g` + inserter
 * + step 3: ret = default.replace(regex,replaceValue)
 *
 *
 *
 */
function f() {
  const defaultString = `<img />`;
  console.log("Default string: ", defaultString);
  const characterFactor = "g";
  const inserter = ` border="0"`;
  let ret = "";

  const regex = new RegExp(characterFactor, "gm");
  const replaceValue = characterFactor + inserter;

  ret = defaultString.replace(regex, replaceValue);

  return ret;
}

console.log("Ret: ", f());
