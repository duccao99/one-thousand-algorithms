function getRoot() {
  //x^3 + 6x^2 + 3x - 5
  for (let i = 100; i >= -100; --i) {
    const fx = i ** 3 + 6 * i ** 2 + 3 * i - 5;
    console.log("fx: ", fx);
    if (fx === 0) {
      return i;
    }
  }
}

const root = getRoot();
console.log(root);
