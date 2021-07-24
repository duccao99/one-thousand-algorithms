import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveAsyncReadline = function (time: number) {
  rl.question('Enter number: ', function (num: string) {
    if (time === 1) {
      console.log(
        `Absolute value of number ${num} is ${Math.abs(Number(num))}\n`
      );

      return rl.close();
    }

    console.log(
      `Absolute value of number ${num} is ${Math.abs(Number(num))}\n`
    );
    recursiveAsyncReadline(time - 1);
  });
};

function E95() {
  console.log('Enter three numbers');

  recursiveAsyncReadline(3);
}

E95();
