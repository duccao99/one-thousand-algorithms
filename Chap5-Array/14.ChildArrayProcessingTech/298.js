/**
 * Problem: Count the number of increasing sequences in 
 * an array of number which have the length number is greater than 1
 * 
 * Understanding the problem
 * - a = [1,3,5,2,4]
 * - sequences =[[1,3],[1,3,5],[3,5],[2,4]]
 * - ret = 4
 * 
  const testCase1 = [1,3,5,2,4]; // 4
  const testCase2 = [2,3,5,1,4]; // 4
  const testCase3 = [3,5,2,4,1]; // 2
  const testCase4 = [4,1,2,3,5]; // 6
  const testCase5 = [5,4,1,3,2]; // 1
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function E298(a) {
  let ret = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i - 1] < a[i]) {
      let increasingSequence = [];
      for (let j = i; j >= 0; --j) {
        increasingSequence = push(increasingSequence, a[j]);
        if (a[j - 1] > a[j]) {
          break;
        }
      }

      if (increasingSequence.length === 2) {
        ret = push(ret, increasingSequence);
      }
      if (increasingSequence.length > 2) {
        let sequences = [];
        for (let k = increasingSequence.length - 1; k >= 0; --k) {
          for (let l = k; l >= 0; --l) {
            let subSequences = [];
            for (let m = k; m >= l; --m) {
              subSequences = push(subSequences, a[m]);
            }
            subSequences.length >= 2
              ? (sequences = push(sequences, subSequences))
              : void 0;
          }
        }
        for (let n = sequences.length - 1; n >= 0; --n) {
          ret = push(ret, sequences[n]);
        }
      }
    }
  }

  const hashmap = {};
  for (let i = ret.length - 1; i >= 0; --i) {
    hashmap[ret[i]] = hashmap[ret[i]] || 0;
  }

  let count = 0;

  for (const key in hashmap) {
    count++;
  }

  return count;
}

function test1() {
  const testCase1 = [1, 3, 5, 2, 4]; // 4
  const testCase2 = [2, 3, 5, 1, 4]; // 4
  const testCase3 = [3, 5, 2, 4, 1]; // 2
  const testCase4 = [4, 1, 2, 3, 5]; // 6
  const testCase5 = [5, 4, 1, 3, 2]; // 1

  console.log(E298(testCase1));
  console.log(E298(testCase2));
  console.log(E298(testCase3));
  console.log(E298(testCase4));
  console.log(E298(testCase5));
}

{
  test1();
}
