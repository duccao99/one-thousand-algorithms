function E20(n: number) {
  // list all divisor of n
  // 6 -> 1,2,3,6
  // + step 1: loop i from 1 to n
  // + step 2: check if n%i===0 then show i

  for (let i = 1; i <= n; ++i) if (n % i === 0) console.log(i);
}
E20(600);
