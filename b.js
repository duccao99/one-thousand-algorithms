const a = [1, 2, 3, 4, 5];
const temporary = a[a.length - 1];

for (let i = a.length - 2; i >= 0; --i) {
  a[i + 1] = a[i];
}

a[0] = temporary;

console.log(a);
