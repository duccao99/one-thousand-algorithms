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

async function E131(): Promise<void | string> {
  let ret: number[] | string = [];
  const array_length = Number(
    await getDataFromAsyncReadline('Enter array length: ')
  );

  var flag = false;

  for (let i = 0; i < array_length; ++i) {
    const array_element = Number(
      await getDataFromAsyncReadline(`Enter element ${i} value: `)
    );

    if (isNaN(array_element) || !Number.isInteger(array_element)) {
      flag = true;
      break;
    } else {
      if (typeof ret !== 'string') {
        ret.push(array_element);
      }
    }
  }

  if (flag) {
    ret = 'Wrong input type';
  }
  console.log(ret);
}

async function main() {
  await E131();
}

main();
