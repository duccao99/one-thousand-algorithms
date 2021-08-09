/**
 * Write a program to enter n then calculate S(n) = 1+2+..+n
 *
 * - idea:
 * + first way: s(n) = n*(n+1)/2
 * + second way: loop
 *
 */
import readline from 'readline';

function asyncReadline(text: string, rl: readline.Interface): Promise<string> {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

async function asyncGetUserInput(text: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const user_input = await asyncReadline(text, rl);

  rl.close();
  return user_input;
}

async function E116() {
  const n = await asyncGetUserInput('Enter n: ');
  if (isNaN(Number(n))) {
    console.log('n error');
  } else {
    var ret: number = 0;
    for (let i = Number(n); i >= 1; --i) ret += i;
    console.log(ret);

    return ret;
  }
}

E116();
