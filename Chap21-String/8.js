/**
 * Problem:
 * Have the html string like  `
 *  <!Doctype>
 *  <html>
 *    <p> abc </p>
 *    <strong> content1 </strong>
 *    <strong> content2 </strong>
 *    <strong> content3 </strong>
 *  </html>
 * `
 *
 * Get the content inside the <strong> </strong> tag
 *
 *
 */

/**
 *
 * @param {string} a
 * @param {string} b
 *
 */
function wasStringAEqualStringB(a, b) {
  if (a.length !== b.length) return false;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

/**
 *
 * @param {string} html
 */
function f(html) {
  const strongTagFactor = "<strong>";
  const endStrongTagFactor = "</strong>";

  for (let i = 0; i <= html.length - 1; ++i) {
    let traverseString1 = "";

    for (let j = 0; j <= strongTagFactor.length - 1; ++j) {
      traverseString1 += html[i + j];
    }

    let wasFoundStrongTagFactor = wasStringAEqualStringB(
      traverseString1,
      strongTagFactor
    );

    if (wasFoundStrongTagFactor) {
      const startIndex = i;

      let traverseString2 = "";
      for (let i2 = startIndex; i2 <= html.length - 1; ++i2) {
        traverseString2 += html[i2];

        if (
          html[i2 + 0] === "<" &&
          html[i2 + 1] === "/" &&
          html[i2 + 2] === "s" &&
          html[i2 + 3] === "t" &&
          html[i2 + 4] === "r" &&
          html[i2 + 5] === "o" &&
          html[i2 + 6] === "n" &&
          html[i2 + 7] === "g" &&
          html[i2 + 8] === ">"
        ) {
          for (let j2 = 1; j2 <= 8; j2++) {
            traverseString2 += html[i2 + j2];
          }
          break;
        }
      }

      console.log("traverseString2: ", traverseString2);
    }
  }
}

const html = `
  <!Doctype>
  <html>
    <p> abc </p>
    <strong> content1 </strong>
    <strong> content2 </strong>
    <strong> content3 </strong>
  </html>
`;

f(html);
