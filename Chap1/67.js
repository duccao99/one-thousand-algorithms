/**
 * s(x,n)=x-x2+x3-x4+...+(-1)^(n+1)*x^n
 *  + s(3,3) -> 3-3^2+3^3 = 21
 *    + i: 1 -> n
 *    + ret+= x^i x (-1)^(i-1)
 *
 *
 *
 *
 * idea
 * + loop i from 1 to n
 * + ret=x^i*(-1)^(i+1)
 *
 */

function f(x, n) {
  let ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += x ** i * (-1) ** (i - 1);
  }
  return ret;
}

const x = 3;
const n = 3;
console.log(f(x, n));
