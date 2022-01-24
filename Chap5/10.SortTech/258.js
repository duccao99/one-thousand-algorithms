/**
 * Problem: Sort the prime-number in one-dimensional array of number
 * another values keep the same value and their position
 * 
 * Understanding the problem
 * - a = [1,3,2,5,4]
 * - prime number: 3 2 5 - 2 3 5
 * - result: [1,2,3,5,4]
 * 
 * - a = [1,3,2,5,4,7,6,8,9] 
 * - prime number: 3 2 5 7 - 2 3 5 7
 * - result: [1,2,3,5,4,7,6,8,9]
 * 
 * 
 * -------0 1 2 3 4-------
 * - a = [1,3,2,5,4]
 * - result: [1,2,3,5,4]
 * 
 * - Stuff human do
 * + a[0] - prime? false
 * + a[1] - prime? true save a[1]: 3 and also save index: 1
 * + a[2] - prime? true save a[2]: 3 2 and also save index: 1 2
 * + a[3] - prime? true save a[3]: 3 2 5 and also save index: 1 2 3
 * + a[4] - prime? false
 * 
 * + We have: - primeNumbers = [3,2,5], indexNeedToInserted = [1,2,3]
 * + Sort primeNumbers: [2,3,5]
 * + Replace a[i] which i in indexNeedToInserted by primeNumbers
 * 
 * - Stuff computer do
 * + step 1: loop i from 0 to 4 - done
 * + step 2: check if a[i] is prime number - done
 *   + step 2.1: if it true - save value and also save index - done
 * + step 3: sort the prime number - done
 *   + step 3.1: learn quick sort  - 1/2 done - 1/2 why floor but not round
 * + step 4: replace old a[i] by new prime number
 *    
 * 
  const testCase1 = [1,3,2,5,4]; // [1,2,3,5,4]
  const testCase2 = [1,3,2,5,4,7,6,8,9] ; // [1,2,3,5,4,7,6,8,9]
  const testCase3 = [2,3,5,1,4]; // [2,3,5,1,4]
  const testCase4 = [3,2,5,4,1]; // [2,3,5,1,4]
  const testCase5 = [4,5,2,1,3]; // [4,2,5,1,3]
 * 
 * 
 * /



/**
 *
 * @param {Array} a
 */
function E258(a) {
  let primes = [];
  const indexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPrimeNumber(a[i])) {
      primes.push(a[i]);
      indexes.push(i);
    }
  }

  primes = QuickSort(primes, 0, primes.length - 1);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = indexes.length - 1; j >= 0; --j) {
      if (i === indexes[j]) {
        a[i] = primes[primes.length - 1];
        primes.pop();
        break;
      }
    }
  }

  return a;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 */
function partition(a, left, right) {
  const pivot = a[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (a[i] < pivot) i++;
    while (a[j] > pivot) j--;
    if (i <= j) swap(a, i, j) & i++ & j--;
  }

  return i;
}

/**
 *
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 */
function QuickSort(a, left, right) {
  if (a.length > 1) {
    let index = partition(a, left, right);

    if (left < index - 1) {
      QuickSort(a, left, index - 1);
    }

    if (index < right) {
      QuickSort(a, index, right);
    }
  }

  return a;
}
/**
 * -------0  1  2  3  4  5  6  7
 * - a = [1, 4, 3, 2, 5, 8, 7, 9]
 * - index = 3
 * - index < right - 3 < 7
 * - QuickSort(a,3,7)
 *   + index = partition(a,3,7)
 *     + pivot = (7+3)/2 = 5
 *     + i = 3
 *     + j = 7
 *       + while (i<=j) - 3<=7
 *         + while(a[i] < pivot) i++
 *           + a[3] = 2 < 3, i = 4
 *           + a[4] = 5 > 3, i = 4, break loop
 *         + while(a[j] > pivot) j--
 *           + a[7] = 9 > 3, j = 6
 *           + a[6] = 7 > 3, j = 5
 *           + a[5] = 8 > 3, j = 4
 *           + a[4] = 5 > 3, j = 3
 *           + a[3] = 2 < 3, j = 3, break loop
 *         + if (i<=j)
 *           + 4 <= 3 ?
 *   return i = 4
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (n === 1 || n === 0) return false;

  for (let i = Math.floor(Math.sqrt(n)); i >= 2; --i) {
    if (n % i === 0) return false;
  }

  return true;
}

function test1() {
  const testCase1 = [1, 3, 2, 5, 4]; // [1,2,3,5,4]
  const testCase2 = [1, 3, 2, 5, 4, 7, 6, 8, 9]; // [1,2,3,5,4,7,6,8,9]
  const testCase3 = [2, 3, 5, 1, 4]; // [2,3,5,1,4]
  const testCase4 = [3, 2, 5, 4, 1]; // [2,3,5,4,1]
  const testCase5 = [4, 5, 2, 1, 3]; // [4,2,3,1,5]
  const testCase6 = [1, 4, 3, 2, 5, 8, 7, 9]; // [1,4,2,3,5,8,7,9]

  console.log(E258(testCase1));
  console.log(E258(testCase2));
  console.log(E258(testCase3));
  console.log(E258(testCase4));
  console.log(E258(testCase5));
  console.log(E258(testCase6));
}

{
  test1();
}
