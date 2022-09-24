/**
 * Problem
 * + s = "abc color: #000 def"
 * + ret
 *   + The #000
 *   + Become
 *     + #000000;
 *
 *
 */

/**
 *
 * @param {string} s
 *
 */
function f(s) {
  for (let i = 0; i <= s.length - 1; ++i) {
    if (s[i] === "#") {
      let traverseString = "";
      for (let k = i; k <= s.length - 1; ++k) {
        traverseString += s[k];
        if (s[k] === `"`) {
          break;
        }
      }

      console.log("traverseString: ", traverseString);
    }
  }
}

const s = `abc color: #000" def #000" abc #000" def`;

f(s);
