// 1. Array linear traverse
console.log(`Array linear traverse`);
const s = [1, 2, 3, 4, 5];
for (let i = 0; i < s.length; ++i) {
  console.log(s[i]);
}

// 2. Array reverse traverse
console.log(`Array reverse traverse`);
for (let i = s.length - 1; i >= 0; i--) {
  console.log(s[i]);
}
