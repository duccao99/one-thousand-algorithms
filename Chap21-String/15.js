const a = ["Terrifier 2", "Terrifier 3", "film 3", "film 4"];
const s = "ier";
let ret = [];

for (let i = a.length - 1; i >= 0; --i) {
  const regex = new RegExp(s, "g");
  if (regex.test(a[i])) {
    ret.push(a[i]);
  }
}

console.log(ret);

console.log(1);
