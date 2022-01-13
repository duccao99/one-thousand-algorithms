const ret = [];

for (let i = 1; i < 100; ++i) {
  ret.push(Math.floor(Math.random() * i));
}

console.log(ret);
