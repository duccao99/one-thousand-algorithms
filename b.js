const primes = [2, 3, 5, 7];

for (let i = 0; i < primes.length; ++i) {
  console.log(primes[i]);
  primes.pop();
}

console.log(primes);
