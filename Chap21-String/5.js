/**
 * Problem:
 * + s   = "<td> Find out more </td>"
 * + s2  = "Find out more"
 * + ret = ""
 *
 *
 * + Find out more
 *   + F: 0
 *   + i: 1
 *   + n: 2
 *   + d: 2
 *   + ' ' : 3
 *   + o : 4
 *   + u : 5
 *   + t : 6
 *   + ' ' : 7
 *   + m : 8
 *   + o : 9
 *   + r : 10
 *   + e : 11
 *   + length: 12
 *
 *
 * + index: 5
 *   + ret: F
 * + index: 6
 *   + ret: i
 *
 * + (0 -> 5)
 *   + 0 + 5
 *     + 5
 * + s2.length - 1 + 5
 * + s2.length - 1 + index
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function reverseArray(a) {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   *
   * ---------0 1 2 3 4
   * - ret = [5,4,3,2,1]
   *
   * + ret[0] = a[a.length - 1] = a[a.length - 1 - 0]
   * + ret[1] = a[a.length - 1 - 1] = a[a.length - 1 - 1]
   * + ret[2] = a[a.length - 1 - 1 - 1] = a[a.length - 1 - 2]
   * + ret[3] = a[a.length - 1 - 1 - 1 - 1] = a[a.length - 1 - 3]
   * + ret[4] = a[a.length - 1 - 1 - 1 - 1 - 1] = a[a.length - 1 - 4]
   *
   * -> i from 0 to a.length - 1
   *    + ret[i] = a[a.length - 1 - i]
   *
   *
   */
  const ret = new Array(a.length);

  for (let i = 0; i <= a.length - 1; ++i) {
    ret[i] = a[a.length - i - 1];
  }

  return ret;
}

function f() {
  const s2 = "Find out more";
  const s = `
  <tr> 
    <td>
     some text
    </td>
  </tr>

  <tr>
    <td> Find out more </td> 
  </tr>

  <tr>
    <td>
        some text 2
    </td>
  </tr>
  `;
  const trString = "tr";
  const tdString = "td";

  for (let i = 0; i <= s.length - 1; ++i) {
    let temporary = "";

    for (let j = 0; j <= s2.length - 1; ++j) {
      temporary += s[i + j];
    }

    let wasFoundS2 = true;

    for (let k = 0; k <= s2.length - 1; ++k) {
      if (s2[k] !== temporary[k]) {
        wasFoundS2 = false;
      }
    }

    if (wasFoundS2) {
      const startTraverserIndex = i;
      const endTraverserIndex = s2.length - 1 + i;

      let s3 = "";
      for (let l = startTraverserIndex; l <= endTraverserIndex; ++l) {
        s3 += s[l];
      }

      let beforeS2 = "";
      for (let m = startTraverserIndex - 1; m >= 0; --m) {
        beforeS2 += s[m];
      }

      beforeS2 = reverseArray(beforeS2.split("")).join("");
      // console.log("s2Before: ", beforeS2);

      let afterS2 = "";
      for (let n = endTraverserIndex + 1; n <= s.length - 1; ++n) {
        afterS2 += s[n];
      }
      // console.log("afterS2: ", afterS2);

      let s2Ins = "";
      for (let o = startTraverserIndex; o <= endTraverserIndex; ++o) {
        s2Ins += s[o];
      }
      // console.log("s2Ins: ", s2Ins);

      let trTds2 = "";
      let countTr = 0;
      let countTd = 0;
      for (let p = startTraverserIndex; p >= 0; --p) {
        trTds2 += s[p];
        let traverseString2 = "";
        for (let q = 0; q <= trString.length - 1; ++q) {
          traverseString2 += s[p + q];
        }
        let wasFoundTr = false;
        for (let w = 0; w <= traverseString2.length - 1; ++w) {
          let wasTString = traverseString2[w];
          let wasRString = traverseString2[w + 1];
          let wasDString = traverseString2[w + 1];

          if (wasTString === trString[0] && wasRString === trString[1]) {
            countTr++;
          }

          if (wasTString === tdString[0] && wasDString === tdString[1]) {
            countTd++;
          }
        }
      }
      console.log(s);

      console.log("countTr: ", countTr);
      console.log("countTd: ", countTd);

      trTds2 = reverseArray(trTds2.split("")).join("");
      // console.log("trTds2: ", trTds2);
    }
  }
}

f();
