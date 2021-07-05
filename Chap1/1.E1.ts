function E1(n: Number) {
  let ret = 0;
  for (let i = 0; i <= n; ++i) {
    ret += i;
  }
  return ret;
}

function E1Way2(n: number) {
  return (n * (n + 1)) / 2;
}

const n = 100;
const ret = E1(n);
console.log(ret);

console.log(E1Way2(n));
