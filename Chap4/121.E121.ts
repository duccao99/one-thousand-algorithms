/**
 * A integer x = akak-1..a2a1 was called Amstrong number
 * when x = ak^k + ak-1^k +.. + a2^k + a1^k
 * Write a program to list all the Amstrong number in the interval [1,1.000.000]
 *
 * Idea:
 * + check Amstrong number
 * + loop and ret
 */

function isAmstrongNumber(n: number): boolean {
  /**
   * 153 = 1^3+5^3+3^3
   * Idea:
   * + cut n into pieces
   * + loop i from piece 0 to piece n
   * + check ret+=pieces i^3 == n ? true:false
   */
  var pieces: number[] = [];
  var k: number = 0;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    pieces.push(i % 10);
    k++;
  }

  var was_am_strong: number = 0;
  for (let i = 0; i < pieces.length; ++i) {
    was_am_strong += Math.pow(pieces[i], k);
  }

  return was_am_strong === n ? true : false;
}
function E121(): string {
  var ret: number[] = [];

  for (let i = 1; i <= 1000000; ++i) {
    if (isAmstrongNumber(i)) {
      ret.push(i);
    }
  }
  return ret.join(' ');
}

console.log('Amstrong numbers from 1 to 1.000.000 are\n', E121());
