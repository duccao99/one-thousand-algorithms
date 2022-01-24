// 1. String linear traverse
console.log(`String linear traverse`);
const s = "12345";
for (let i = 0; i < s.length; ++i) {
  console.log(s[i]);
}

// 2. String reverse traverse
console.log(`String reverse traverse`);
for (let i = s.length - 1; i >= 0; i--) {
  console.log(s[i]);
}
