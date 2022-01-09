const right = [5];
const mid = Math.round(right.length / 2);
const left = right.splice(0, mid);

console.log(left);
console.log(right);
