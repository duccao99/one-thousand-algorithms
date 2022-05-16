/**
 * - problem: sort array of users in
 * ascending order on userName field
 *
 * - a = [
 *  {userId:1, userName: "user01"},
 *  {userId:3, userName: "user03"},
 *  {userId:2, userName: "user02"}
 * ]
 *
 * - ret = [
 *  {userId:1, userName: "user01"},
 *  {userId:2, userName: "user02"},
 *  {userId:3, userName: "user03"}
 * ]
 *
 *
 */

/**
 *
 * @param {{userId:number, userName: string}[]} a
 */
function f(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      const s1 = a[i].userName;
      const s2 = a[j].userName;
      const s1SmallerThans2 = `${s1} < ${s2}`;
      const textCompareTwoString = compareTwoStrings(
        a[i].userName,
        a[j].userName
      );
      if (textCompareTwoString === s1SmallerThans2) {
        // swap
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
  return a;
}

/**
 *
 * @param {string} s1
 * @param {string} s2
 *
 *
 */
function compareTwoStrings(s1, s2) {
  /**
   * - s1 = "user01"
   * - s2 = "user02"
   * - ret: s2 > s1
   *
   * - characters = 'abcdefghijkmlnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
   * - numberLabelCorrespondingForCharacter
   * + a = 1    + A = 10
   * + b = 2    + B = 20
   * + c = 3    + C = 30
   * + d = 4    + D = 40
   * + e = 5    + E = 50
   * + f = 6    + F = 60
   * + g = 7    + G = 70
   * + h = 8    + H = 80
   * + i = 9    + I = 90
   * + j = 10   + J = 100
   * + k = 11   + K = 110
   * + l = 12   + L = 120
   * + m = 13   + M = 130
   * + n = 14   + N = 140
   * + o = 15   + O = 150
   * + p = 16   + P = 160
   * + q = 17   + Q = 170
   * + r = 18   + R = 180
   * + s = 19   + S = 190
   * + t = 20   + T = 200
   * + u = 21   + U = 210
   * + v = 22   + V = 220
   * + w = 23   + W = 230
   * + x = 24   + X = 240
   * + y = 25   + Y = 250
   * + z = 26   + Z = 260
   *
   *
   *
   * - s1 = "user01"
   *   + u = 21
   *   + s = 19
   *   + e = 5
   *   + r = 18
   *   + 0 = 0
   *   + 1 = 1
   *   -> s1 virtual number value: 21 + 19 + 5 + 18 + 0 + 1 = 64
   * - s2 = "user02"
   *   + u = 21
   *   + s = 19
   *   + e = 5
   *   + r = 18
   *   + 0 = 0
   *   + 2 = 2
   *   -> s2 virtual number value: 21 + 19 + 5 + 18 + 0 + 2 = 65
   *
   * -> + s2 = 65
   *    + s1 = 64
   *    -> s2 > s1
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  function labelNumberForCharacter() {
    const s = `
    a = 1     A = 10
    b = 2     B = 20
    c = 3     C = 30
    d = 4     D = 40
    e = 5     E = 50
    f = 6     F = 60
    g = 7     G = 70
    h = 8     H = 80
    i = 9     I = 90
    j = 10    J = 100
    k = 11    K = 110
    l = 12    L = 120
    m = 13    M = 130
    n = 14    N = 140
    o = 15    O = 150
    p = 16    P = 160
    q = 17    Q = 170
    r = 18    R = 180
    s = 19    S = 190
    t = 20    T = 200
    u = 21    U = 210
    v = 22    V = 220
    w = 23    W = 230
    x = 24    X = 240
    y = 25    Y = 250
    z = 26    Z = 260
  `;

    const data = [];

    for (let i = 0; i <= s.length - 1; i++) {
      if (isNaN(+s[i])) {
        if (s[i] !== "=") {
          data.push({
            character: s[i],
            labelNumber: +(s[i + 4] + s[i + 5] + s[i + 6]),
          });
        }
      }
    }

    for (let i = 0; i <= 9; ++i) {
      data.push({
        character: `${i}`,
        labelNumber: +i,
      });
    }

    return data;
  }

  const characterLabelNumber = labelNumberForCharacter();
  let s1VirtualNumber = 0;
  let s2VirtualNumber = 0;

  for (let j = s1.length - 1; j >= 0; --j) {
    for (let i = characterLabelNumber.length - 1; i >= 0; --i) {
      if (s1[j] === characterLabelNumber[i].character) {
        s1VirtualNumber = s1VirtualNumber + characterLabelNumber[i].labelNumber;
      }
    }
  }

  for (let i = s2.length - 1; i >= 0; --i) {
    for (let j = characterLabelNumber.length - 1; j >= 0; --j) {
      if (characterLabelNumber[j].character === s2[i]) {
        s2VirtualNumber = s2VirtualNumber + characterLabelNumber[j].labelNumber;
      }
    }
  }

  if (s1VirtualNumber === s2VirtualNumber) {
    return `${s1} = ${s2}`;
  }

  if (s1VirtualNumber > s2VirtualNumber) {
    return `${s1} > ${s2}`;
  }

  if (s1VirtualNumber < s2VirtualNumber) {
    return `${s1} < ${s2}`;
  }
}

const a = [
  { userId: 1, userName: "user01" },
  { userId: 3, userName: "user03" },
  { userId: 4, userName: "user04" },
  { userId: 2, userName: "user02" },
  { userId: 6, userName: "user06" },
  { userId: 5, userName: "user05" },
];

const b = [
  { userId: 1, userName: "user01" },
  { userId: 2, userName: "user04" },
  { userId: 3, userName: "user03" },
];

console.log(f(a));
// console.log(f(b));
