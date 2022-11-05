/**
 * Problem
 * + a = ["Terrifier 2", "Terrifier 3","film 3", "film 4"]
 * + s = "ter"
 * + ret = ["Terrifier 2", "Terrifier 3"]
 *
 */
const a = ["Terrifier 2", "Terrifier 3", "film 3", "film 4"];
const s = "ter";
let ret = [];

/**
 *
 * @param {Array} a
 * @param {any} element
 */
function arrayPush(a, element) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + element = 6
   * ---------0 1 2 3 4 5
   * + ret = [1,2,3,4,5,6]
   *
   */
  const ret = new Array(a.length + 1);

  for (let i = a.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  ret[ret.length - 1] = element;

  return ret;
}

for (let i = a.length - 1; i >= 0; --i) {
  const lowercasedText = a[i].toLowerCase();
  const regex = new RegExp(s, "g");

  if (regex.test(lowercasedText)) {
    ret = arrayPush(ret, a[i]);
  }
}

console.log(ret);
