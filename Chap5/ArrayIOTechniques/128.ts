/**
 * Write a function to enter an float array
 *
 * Idea:
 * + I/O tech
 */

import readline from 'readline';

function promiseTextFromAsyncReadline(
  text: string,
  rl: readline.Interface
): Promise<string> {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

async function getDataFromAsyncReadline(text: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const data = await promiseTextFromAsyncReadline(text, rl);

  rl.close();

  return data;
}

async function E128(): Promise<number[] | string> {
  let ret: number[] = [];
  const array_length = Number(
    await getDataFromAsyncReadline('Enter array length: ')
  );

  for (let i = 0; i < array_length; ++i) {
    const array_element = Number(
      await getDataFromAsyncReadline(`Enter element ${i} value: `)
    );

    if (isNaN(array_element)) {
      return 'Wrong input type';
    } else {
      ret.push(array_element);
    }
  }
  return ret;
}

async function main() {
  var array = await E128();
  console.log(array);
}

main();
