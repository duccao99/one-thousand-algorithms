import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInputAsync(text: string) {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

async function E99() {
  /**
   * Write a program that user can enter three numbers
   * print those numbers in ascending order
   * using only two extra variables
   *
   * 3, 1 ,2 -> 1 2 3
   * 3  2  1
   * 1  3  2
   */
  const questions = ['Enter number: ', 'Enter number: ', 'Enter number: '];
  var num1 = undefined;
  var num2 = undefined;
  var check = 0;

  for (let i = 0; i < questions.length; ++i) {
    var text = Number(await getUserInputAsync(questions[i]));
    if (!num1) {
      num1 = text;
    }
    check++;
    if (check === 2) {
      num2 = text;
    }
    if (i === questions.length - 1) {
      var temp;
      if (num2 !== undefined) {
        if (num1 > num2) {
          temp = num2;
          num2 = num1;
          num1 = temp;
        }
        if (num1 > text) {
          temp = text;
          text = num1;
          num1 = temp;
        }
        if (num2 > text) {
          temp = text;
          text = num2;
          num2 = temp;
        }
      }

      console.log(num1, num2, text);

      rl.close();
    }
  }
}

E99();
