/**
 * Given array number, find the number that look like the description below
 * + All digit is odd
 * + if array contains more than 1 that number, find the maximum
 * + if the array does not contain any number that satisfied two description above
 * then returns 0
 *
 *
 * Dabble
 * - [123,321,135,53,16] - 135 53 -> 135
 *
 * Idea:
 * + check full odd digit function
 * + loop push odd number into new array
 * + find the maximum of new array
 */

function checkIsFullOdd(n: number): boolean {
  /**
   * Dabble
   * 123 -> false
   * 135 -> true
   *
   * + 123
   * check 3: true
   * check 2: flag = false
   *
   * 135
   * check 5: true
   * check 3: true
   * check 1: true
   * -> return true
   *
   * 135/10 = 13
   * 13/10 = 1
   * 1/10 = 0
   *
   * 135 % 10 = 5
   * 13 % 10 = 3
   * 1 % 10 = 1
   *
   * Idea:
   * + while n != 0
   * + check (n % 10) % 2 == 0 ? flag = false
   * + n = n/10
   *
   */

  let flag: boolean = true;

  while (n !== 0) {
    if ((n % 10) % 2 === 0) flag = false;
    n = Math.floor(n / 10);
  }

  return flag;
}

function E167(a: number[]): number {
  const ret: number[] = [0];

  a.forEach((ele) => {
    if (checkIsFullOdd(ele)) {
      ret.push(ele);
    }
  });

  return Math.max(...ret);
}

{
  (() => {
    function logSomething() {
      console.log(checkIsFullOdd(123));
      console.log(checkIsFullOdd(135));
      console.log(checkIsFullOdd(579));
    }
  })();
}

{
  (() => {
    console.log(E167([123, 135, 579]));
    console.log(E167([123, 135, 579, 1333]));
    console.log(E167([123, 135, 1379, 579]));

    console.log(E167([24, 42, 66]));
    console.log(E167([]));
  })();
}
