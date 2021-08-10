/**
 * List all square numbers less than n
 * + What is square number ?
 * - A square number is a number that we will get the integer when we perform sqrt to it
 *
 * Idea:
 * + step 1: check square number
 * + step 2: loop i from 2 to n - 1
 *   + if i was a square number push it into ret
 *
 */

function isSquareNumber(n: number): boolean {
  var ret: boolean = true;

  if (Math.sqrt(n) - Math.floor(Math.sqrt(n)) !== 0) {
    ret = false;
  }

  return ret;
}

function E120(n: number): string {
  var ret: number[] = [];

  var i = 1;

  while (i < n) {
    if (isSquareNumber(i)) {
      ret.push(i);
    }
    i++;
  }

  return ret.join(' ');
}

for (let i = 1; i <= 100; ++i) {
  console.log(`Those square numbers that are less than ${i} are: `, E120(i));
}
