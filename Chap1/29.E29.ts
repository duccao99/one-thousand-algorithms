function E29(n: number) {
  // find the max odd divisor of n
  // 6->1,3 -> 3
  // loop i from n-1 to 1 saving time
  for (let i = n - 1; i >= 1; i--) if (n % i === 0 && i % 2 !== 0) return i;
}
console.log(E29(6));
console.log(E29(11));
console.log(E29(12));
