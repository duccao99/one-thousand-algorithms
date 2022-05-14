/**
 * - problem: find user02 record in array of users
 *
 * - a =   [
 *  {userId:1, userName: "user01"},
 *  {userId:2, userName: "user02"},
 *  {userId:3, userName: "user03"}
 * ]
 *
 * - ret = {userId:2, userName:"user02"}
 *
 *
 */

/**
 *
 * @param {{userId:number, userName: string}[]} a
 */
function f(a) {
  const user02String = "user02";

  for (let i = a.length - 1; i >= 0; --i) {
    if (compareString(a[i].userName, user02String)) {
      return a[i];
    }
  }

  return "Not found";
}

/**
 *
 * @param {string} s1
 * @param {string} s2
 *
 */
function compareString(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let flag = true;

  for (let i = s1.length - 1; i >= 0; --i) {
    if (s1[i] !== s2[i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

const a = [
  { userId: 1, userName: "user01" },
  { userId: 2, userName: "user02" },
  { userId: 3, userName: "user03" },
];

const b = [
  { userId: 1, userName: "user01" },
  { userId: 2, userName: "user04" },
  { userId: 3, userName: "user03" },
];

console.log(f(a));
console.log(f(b));
