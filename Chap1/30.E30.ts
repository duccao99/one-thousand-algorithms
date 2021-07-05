function E30(n: number) {
  // n, check is num n was perfect num
  // perfect num: 6 -> 1+2+3 = 6

  // idea
  // loop i from 1 to < n, cal total i which i is divisor of n
  var carry = 0;
  for (let i = 1; i < n; ++i) if (n % i === 0) carry += i;
  return carry === n ? true : false;
}

console.log(E30(6));
console.log(E30(8));
