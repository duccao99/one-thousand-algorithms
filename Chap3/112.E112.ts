/**
 * Write a program to print rectangle of size m x n
 */

import readline from 'readline';

function getValueFromAsyncReadline(
  question: string,
  rl: readline.Interface
): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function getUserAsyncInput(text: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const user_input = await getValueFromAsyncReadline(text, rl);

  rl.close();
  return user_input;
}

function createAsteriskFeatureA(m: number): string {
  var result: string = '';
  for (let i = 1; i <= m; ++i) {
    result += 'x' + ' ';
  }

  result = result.substr(0, result.length - 1);
  return result;
}

async function handlePrintSolidRectangle() {
  /**
   * m height , n width
   *
   * + m = 1, n = 1
   * x
   *
   * + 2, 2
   * x x
   * x x
   *
   * + 3 2
   * x x x
   * x x x
   *
   * + 4 3
   * x x x x
   * x x x x
   * x x x x
   *
   */
  const m = Number(await getUserAsyncInput('Enter m: '));
  const n = Number(await getUserAsyncInput('Enter n: '));

  if (isNaN(m) || isNaN(n)) {
    console.log('Input error');
  } else {
    var result: string = '';
    for (let i = 1; i <= m; ++i) {
      const asterisk = createAsteriskFeatureA(n);
      result += asterisk + '\n';
    }
    return result;
  }
  return;
}

function createAsteriskTopBotTypeFeatureB(n: number): string {
  var result: string = '';

  for (let i = 1; i <= n; ++i) {
    result += 'x' + ' ';
  }

  result = result.substr(0, result.length - 1);
  return result;
}

function createMiddleForAsterisk(n: number) {
  var result: string = '';

  for (let i = 1; i <= n; ++i) {
    result += ' ';
  }

  return result;
}

function creatAsteriskMiddleTypeFeatureB(n: number) {
  var result: string = '';

  var pure_asterisk = createAsteriskTopBotTypeFeatureB(n);

  var prefix = 'x';
  var middle = createMiddleForAsterisk(pure_asterisk.length - 2);
  var postfix = 'x';

  result = prefix + middle + postfix;

  return result;
}
async function handlePrintEmptyRectangle() {
  /**
   * m height, n width
   *
   * + 4,4
   * x x x x
   * x     x
   * x     x
   * x x x x
   *
   */
  const m = Number(await getUserAsyncInput('Enter m: '));
  const n = Number(await getUserAsyncInput('Enter n: '));

  if (isNaN(m) || isNaN(n)) {
    console.log('Input error');
  } else {
    var result: string = '';

    const topEdge = createAsteriskTopBotTypeFeatureB(n);
    const botEdge = createAsteriskTopBotTypeFeatureB(n);
    var middleEdge = '';

    for (let i = 2; i < m; ++i) {
      var current_middle = creatAsteriskMiddleTypeFeatureB(n);
      middleEdge += current_middle + '\n';
    }

    result = topEdge + '\n' + middleEdge + botEdge;

    return result;
  }

  return;
}

async function showMenu() {
  const menu = `
 -- -------------- Menu -------------- --
 a. Print solid rectangle size m x n
 b. Print empty rectangle size m x n
 e. Exit
 Enter feature: `;

  const user_input: string = await getUserAsyncInput(menu);

  switch (user_input) {
    case 'a':
      const result_feature_a = await handlePrintSolidRectangle();
      console.log(result_feature_a);

      await showMenu();
      break;
    case 'b':
      const result_feature_b = await handlePrintEmptyRectangle();
      console.log(result_feature_b);

      await showMenu();
      break;
    case 'e':
      break;

    default:
      console.log('Input error');

      break;
  }
}

async function E112() {
  await showMenu();
}

E112();
