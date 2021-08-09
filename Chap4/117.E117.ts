/**
 * Write a program to enter n,x then calculate S(n,x)= x+x^2+..+x^n
 *
 * Idea:
 * + step 1: loop i from 1 to n
 * + step 2: ret+=x^i
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

async function E117() {
  const x = Number(await asyncGetUserInput('Enter x: '));
  const n = Number(await asyncGetUserInput('Enter n: '));

  if (isNaN(x) || isNaN(n)) console.log('Input is wrong type');
  else {
    var ret: number = 0;

    for (let i = 1; i <= n; ++i) ret += Math.pow(x, i);

    console.log(ret);

    return ret;
  }
}

E117();
