/**
 * - problem: find object which has id = 1 in the array of objects
 *
 * - a =   [{id:1, value:1}, {id:2, value: 2}, {id:3, value: 3}]
 *
 * - ret = {id:1, value:1}
 *
 *
 */

/**
 *
 * @param {{id:number,value:number}[]} a
 */
function f(a) {
  let foundFlag = false;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i].id === 1) {
      foundFlag = true;
      return a[i];
    }
  }

  if (!foundFlag) {
    return "Not found";
  }
}

const a = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
];
const b = [
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
];
console.log(f(a));
console.log("");
console.log(f(b));
