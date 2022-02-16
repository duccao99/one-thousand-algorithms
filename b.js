function getDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.join(" ");
}

function isPrime(n) {
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param {Array} a
 */
function getMaxPrime(a) {
  let maxPrime = Number.NEGATIVE_INFINITY;
  for (let i = a.length - 1; i >= 0; --i) {
    if (maxPrime < a[i] && isPrime(a[i])) {
      maxPrime = a[i];
    }
  }
  return maxPrime;
}

{
  let primes = [];
  for (let i = 1900; i <= 1998; ++i) {
    primes.push(i);
  }
  console.log(
    `Greatest prime number if range between 1900..1998 is: ${getMaxPrime(
      primes
    )}`
  );
}
