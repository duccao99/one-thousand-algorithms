/**
 * A total of 200,000 VND is required from 3 types of banknotes
 * 1000 VND, 2000 VND, 5000 VND.
 * Write a program that find all possible alternatives
 */
/**
 * Idea:
 * + find all possible alternatives of 1000 VND banknote
 * + find all possible alternatives of 2000 VND banknote
 * + find all possible alternatives of 5000 VND banknote
 *
 * + find all possible alternatives of 1000 VND and 2000 VND banknotes
 * + find all possible alternatives of 1000 VND and 5000 VND banknotes
 *
 * + find all possible alternatives of 2000 VND and 5000 VND banknotes
 *
 * + find all possible alternatives of 1000 VND and 2000 VND and 5000 VND banknotes
 *
 * - We have a set of equation like this
 * -> 1000*x + 2000*y + 5000*z = 200,000
 * + 1000*200 = 200,000 -> x = [0,200]
 * + 2000*100 = 200,000 -> y = [0,100]
 * + 5000*40 = 200,000 -> z = [0,40]
 *
 */

function E110() {
  var possibility = 0;
  for (let i = 0; i <= 200; ++i) {
    for (let j = 0; j <= 100; ++j) {
      for (let k = 0; k <= 40; ++k) {
        if (1000 * i + 2000 * j + 5000 * k === 200000) {
          console.log(`1000 x ${i} + 2000 x ${j} + 5000 x ${k} = 200,000`);
          possibility++;
        }
      }
    }
  }
  console.log(`There are ${possibility} possible alternatives`);

  return;
}

E110();
