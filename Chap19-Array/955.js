/**
 * - problem: sort array of users in
 * ascending order on userId field
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
      if (a[j].userId > a[i].userId) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
  return a;
}

const a = [
  { userId: 1, userName: "user01" },
  { userId: 3, userName: "user03" },
  { userId: 4, userName: "user04" },
  { userId: 2, userName: "user02" },
  { userId: 6, userName: "user06" },
  { userId: 5, userName: "user05" },
];

console.log(f(a));
