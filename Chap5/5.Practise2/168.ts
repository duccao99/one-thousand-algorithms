/**
 * Given one array dimensional, write a function that find a
 * maximum value has form of 5^k.
 * If the array does not contains the element that satisfied the condition
 * then returns 0
 */

function checkFiveExponentialNumber(n: number) {
  /**
   * 5^0 = 1
   * 5^1 = 5
   * 5^2 = 25
   * ..
   * 5^k
   * -
   */

  let flag = true;

  for (let i = n; i !== 1; ) {
    if (i / 5 !== Math.floor(i / 5)) {
      flag = false;
      break;
    }
    i = i / 5;
  }
  return flag;
}

function swap(a: number[], i: number, j: number) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function partition(a: number[], left: number, right: number) {
  const pivot = a[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (a[i] < pivot) {
      i++;
    }

    while (a[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(a, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(a: number[], left: number, right: number) {
  let index;

  if (a.length > 1) {
    index = partition(a, left, right);

    if (left < index - 1) {
      quickSort(a, left, index - 1);
    }

    if (index < right) {
      quickSort(a, index, right);
    }
  }

  return a;
}

function findMaxArray(a: number[]) {
  return quickSort(a, 0, a.length - 1)[a.length - 1];
}

function E168(a: number[]) {
  let i = 0;
  const ret = [];
  do {
    if (checkFiveExponentialNumber(a[i]) === true) {
      ret.push(a[i]);
    }

    i++;
  } while (i < a.length);
  return findMaxArray(ret);
}

{
  // console.log(checkFiveExponentialNumber(5));
  // console.log(checkFiveExponentialNumber(25));
  // console.log(checkFiveExponentialNumber(125));
  // console.log(checkFiveExponentialNumber(625));
  // console.log(checkFiveExponentialNumber(1231232133));
  // const a = [1, 4, 3, 5, 2];
  // const sorted = quickSort(a, 0, a.length - 1);
  // console.log(sorted);
}

{
  const a = [5, 25, 125, 625, 1232312332, 12456456, 15625];
  console.log(E168(a));
}
