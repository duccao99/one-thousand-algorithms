/**
 * Problem:
 * Have a string <strong> content </strong>
 * detect if traverse meet </strong
 *
 *
 */

const s = "<strong> content </strong>";
const endStrongTagFactor = "</strong>";

for (let i = 0; i <= s.length - 1; ++i) {
  let traverseString = "";

  for (let j = 0; j <= endStrongTagFactor.length - 1; ++j) {
    traverseString += s[i + j];
  }

  let wasFoundEndStrongFactor = true;

  for (let k = 0; k <= endStrongTagFactor.length - 1; ++k) {
    if (endStrongTagFactor[k] !== traverseString[k]) {
      wasFoundEndStrongFactor = false;
      break;
    }
  }

  if (wasFoundEndStrongFactor) {
    console.log("traverseString: ", traverseString);
  }
}
