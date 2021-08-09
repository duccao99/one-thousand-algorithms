/**
 * Problem description
 * - Write a program to enter full name, math credit, literature credit
 * of a student. Calculate the average credit and then print it
 */
import readline from 'readline';

function asyncReadline(text: string, rl: readline.Interface): Promise<string> {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

async function asyncGetUserInput(text: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const user_input = await asyncReadline(text, rl);
  rl.close();

  return user_input;
}

async function E115() {
  const full_name: string = await asyncGetUserInput('Enter full name: ');
  const math_credit: string = await asyncGetUserInput('Enter math credit: ');
  const literature_credit: string = await asyncGetUserInput(
    'Enter literature credit: '
  );

  if (isNaN(Number(math_credit)) || isNaN(Number(literature_credit))) {
    console.log('Credit error');
  } else {
    console.log(
      `Average credit of ${full_name} is: ${(
        (Number(math_credit) + Number(literature_credit)) /
        2
      ).toPrecision(4)}`
    );
  }
}

E115();
