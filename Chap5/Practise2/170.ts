/**
 * Given an array of integer.
 * Find the minimum prime number which is greater than the rest
 * (not compare with prime brother number)
 *
 * breakdowns:
 * + revise prime number - 5 minutes - done
 * + check prime function - 5 minutes - done
 * + test prime function - 2 minutes - done
 * + revise bubble sort - 5 minutes - done
 * + function bubble sort - 2 minutes - done
 * + test bubble sort function - 2 minutes - done
 * + find array min element function - 2 minutes - done
 * + pour the input array to two child arrays, the first one carry prime element and the second one
 * carry the normal element - 2 minutes - done
 * + get min element from the prime array, get max element from the normal array - 2 minutes - done
 * + check if min prime is greater than the max normal then returns min prime
 * otherwise returns null - 2 minutes - done
 * + rewrite requirement  - 2 minutes - done
 * + init test cases - 5 minutes - done
 * totals: 36 minutes
 */

function isPrime(n: number): boolean {
  if (n === 1) return false;

  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function bubbleSort(a: number[]): number[] {
  // Nặng thì chìm xuống, nhẹ thì nổi lên

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] > a[j]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

function findMinArrayElement(a: number[]) {
  return bubbleSort(a)[0];
}

function separatePrimeArrayAndNormalArrayFromInput(a: number[]) {
  const primeArray: number[] = [];
  const normalArray: number[] = [];

  a.forEach((element) => {
    if (isPrime(element) === true) {
      primeArray.push(element);
    }

    if (isPrime(element) === false) {
      normalArray.push(element);
    }
  });

  return {
    primeArray,
    normalArray
  };
}

function getMinElementFromPrimeArrayAndGetMaxElementFromNormalArray(
  a: number[]
) {
  const objectPrimeArrayNormalArray =
    separatePrimeArrayAndNormalArrayFromInput(a);

  const primeSortedASC = bubbleSort(objectPrimeArrayNormalArray['primeArray']);
  const normalSortedDESC = bubbleSort(
    objectPrimeArrayNormalArray['normalArray']
  );

  return {
    minPrime: primeSortedASC[0],
    maxNormal: normalSortedDESC[normalSortedDESC.length - 1]
  };
}

function E170(a: number[]): number | null {
  const objectMinPrimeMaxNormal =
    getMinElementFromPrimeArrayAndGetMaxElementFromNormalArray(a);

  const minPrime = objectMinPrimeMaxNormal['minPrime'];
  const maxNormal = objectMinPrimeMaxNormal['maxNormal'];

  return minPrime > maxNormal ? minPrime : null;
}

{
  const a = [7, 11, 13, 4, 6]; // 7
  const b = [7, 11, 13, 14, 6, 7]; // null

  console.log(E170(a));
  console.log(E170(b));
}
