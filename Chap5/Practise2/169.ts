/**
 * Given a array number. Write a function that find the maximum even number
 * that is less than every odd element in the array
 *
 * + check even number - 2 min - done
 * + check odd number - 2 min - done
 * + find min odd number - 5 min - done
 * + push all even numbers which are less than min odd number - 5 min (*) - done
 * + return (*) maximum value - 5 min
 * + add test case - 10 min
 *
 * - totals: 29 mins
 */

function isEven(n: number) {
  return n % 2 === 0;
}

function isOdd(n: number) {
  return n % 2 === 1;
}

function findMinOddArray(a: number[]) {
  const ret: number[] = [];
  a.forEach((e) => {
    if (isOdd(e)) {
      ret.push(e);
    }
  });
  return ret.sort((a, b) => a - b)[0];
}

function pushAllEvenNumberWhichAreLessThanMinOdd(a: number[]) {
  const minOdd = findMinOddArray(a);
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (isEven(a[i]) === false) {
      continue;
    }

    if (a[i] < minOdd) {
      ret.push(a[i]);
    }
  }
  return ret;
}

function E169(a: number[]) {
  return pushAllEvenNumberWhichAreLessThanMinOdd(a).sort((a, b) => b - a)[0];
}

{
  const a = [2, 9, 4, 5, 11]; // 4
  const b = [11, 15, 17, 19, 2, 4, 6, 8, 111]; // 8
  console.log(E169(a));
  console.log(E169(b));
}
