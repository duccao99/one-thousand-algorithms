/**
 * Write a program to enter a number which have three digits
 * print the way that how to call this number
 *
 * Idea:
 * + reuse 105
 * + check if n was three digits number
 *  - say
 *
 * + else print error
 */

import rl from 'readline';
import chalk from 'chalk';

const crl = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const readAsyncStdin = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    crl.question(question, resolve);
  });
};

function handlePostfixOneToTen(number: number): string {
  var postfix: string = '';
  if (number % 10 === 1) {
    postfix = 'One';
  } else if (number % 10 === 2) {
    postfix = 'Two';
  } else if (number % 10 === 3) {
    postfix = 'Three';
  } else if (number % 10 === 4) {
    postfix = 'Four';
  } else if (number % 10 === 5) {
    postfix = 'Five';
  } else if (number % 10 === 6) {
    postfix = 'Six';
  } else if (number % 10 === 7) {
    postfix = 'Seven';
  } else if (number % 10 === 8) {
    postfix = 'Eight';
  } else if (number % 10 === 9) {
    postfix = 'Nine';
  }
  return postfix;
}

function handleThirty(number: number): string {
  var prefix: string = 'Thirty ';
  var postfix: string = handlePostfixOneToTen(number);

  return prefix + postfix;
}
function handleForty(number: number): string {
  var prefix: string = 'Forty '; // forty ? not four lol
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}
function handleFifty(number: number): string {
  var prefix: string = 'Fifty '; // forty ? not four lol
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}
function handleSixty(number: number): string {
  var prefix: string = 'Sixty '; // forty ? not four lol
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}
function handleSeventy(number: number): string {
  var prefix: string = 'Seventy ';
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}
function handleEighty(number: number): string {
  var prefix: string = 'Eighty ';
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}
function handleNinety(number: number): string {
  var prefix: string = 'Ninety ';
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}

function handleTwenty(number: number): string {
  var prefix: string = 'Twenty ';
  var postfix: string = handlePostfixOneToTen(number);
  return prefix + postfix;
}

function handleZeroToTen(number: number): string {
  var ret: string = '';
  switch (number) {
    case 0:
      ret = '';
      break;
    case 1:
      ret = 'One';
      break;
    case 2:
      ret = 'Two';
      break;
    case 3:
      ret = 'Three';
      break;
    case 4:
      ret = 'Fourth';
      break;
    case 5:
      ret = 'Five';
      break;
    case 6:
      ret = 'Six';
      break;
    case 7:
      ret = 'Seven';
      break;
    case 8:
      ret = 'Eight';
      break;
    case 9:
      ret = 'Nine';
      break;
    case 10:
      ret = 'Ten';
      break;

    default:
      break;
  }
  return ret;
}

function handleElevenToNineTeen(number: number): string {
  var ret: string = '';
  switch (number) {
    case 11:
      ret = 'Eleven';
      break;
    case 12:
      ret = 'Twelve';
      break;
    case 13:
      ret = 'Thirteen';
      break;
    case 14:
      ret = 'Fourteen';
      break;
    case 15:
      ret = 'Fifteen';
      break;
    case 16:
      ret = 'Sixteen';
      break;
    case 17:
      ret = 'Seventeen';
      break;
    case 18:
      ret = 'Eighteen';
      break;
    case 19:
      ret = 'Nineteen';
      break;

    default:
      break;
  }
  return ret;
}

function handleSayTwoDigitsNumber(number: number): string {
  var ret = '';
  if (isNaN(number)) {
    ret = 'Input is not a number';
  } else {
    var count = 0;

    for (let i = number; i !== 0; i = Math.floor(i / 10)) {
      count++;
    }
    if (count !== 2) {
      ret = 'Number must have two digit';
    } else {
      if (number === 10) {
        ret = 'Ten';
      } else if (number === 11) {
        ret = 'Eleven';
      } else if (number === 12) {
        ret = 'Twelve';
      } else if (number >= 13 && number <= 19) {
        var teen: string = 'teen';
        var prefix: string = '';
        if (number % 10 === 3) {
          prefix = 'Third';
        } else if (number % 10 === 4) {
          prefix = 'Four';
        } else if (number % 10 === 5) {
          prefix = 'Five';
        } else if (number % 10 === 6) {
          prefix = 'Six';
        } else if (number % 10 === 7) {
          prefix = 'Seven';
        } else if (number % 10 === 8) {
          prefix = 'Eigh';
        } else if (number % 10 === 9) {
          prefix = 'Nine';
        }
        ret = prefix + teen;
      } else if (number >= 20 && number <= 29) {
        ret = handleTwenty(number);
      } else if (number >= 30 && number <= 39) {
        ret = handleThirty(number);
      } else if (number >= 40 && number <= 49) {
        ret = handleForty(number);
      } else if (number >= 50 && number <= 59) {
        ret = handleFifty(number);
      } else if (number >= 60 && number <= 69) {
        ret = handleSixty(number);
      } else if (number >= 70 && number <= 79) {
        ret = handleSeventy(number);
      } else if (number >= 80 && number <= 89) {
        ret = handleEighty(number);
      } else if (number >= 90 && number <= 99) {
        ret = handleNinety(number);
      }
    }
  }

  return ret;
}

function countDigitNumber(number: number): number {
  if (number === 0) return 1;
  var count = 0;
  for (let i = number; i !== 0; i = Math.floor(i / 10)) count++;
  return count;
}

function handleSayThreeDigitsNumber(number: number) {
  var first_digit = Math.floor(number / 100);
  var last_two_digits = number % 100;
  var prefix: string = '';

  var number_digits = countDigitNumber(Number(last_two_digits));
  var ret: string = '';
  console.log(number_digits);

  if (number_digits === 2) {
    var postfix: string = handleSayTwoDigitsNumber(last_two_digits);
    switch (first_digit) {
      case 1:
        prefix = 'One hundred  ';
        break;
      case 2:
        prefix = 'Two hundred  ';

        break;
      case 3:
        prefix = 'Three hundred  ';

        break;
      case 4:
        prefix = 'Four hundred ';

        break;
      case 5:
        prefix = 'Five hundred ';

        break;
      case 6:
        prefix = 'Six hundred ';

        break;
      case 7:
        prefix = 'Seven hundred ';

        break;
      case 8:
        prefix = 'Eight hundred ';

        break;
      case 9:
        prefix = 'Nine hundred ';

        break;

      default:
        break;
    }
    ret = prefix + postfix;
  } else if (number_digits === 1) {
    var postfix: string = handleZeroToTen(last_two_digits);
    switch (first_digit) {
      case 1:
        prefix = 'One hundred ';
        break;
      case 2:
        prefix = 'Two hundred ';

        break;
      case 3:
        prefix = 'Three hundred ';

        break;
      case 4:
        prefix = 'Four hundred ';

        break;
      case 5:
        prefix = 'Five hundred ';

        break;
      case 6:
        prefix = 'Six hundred ';

        break;
      case 7:
        prefix = 'Seven hundred ';

        break;
      case 8:
        prefix = 'Eight hundred ';

        break;
      case 9:
        prefix = 'Nine hundred ';

        break;

      default:
        break;
    }
    ret = prefix + postfix;
  }
  return ret;
}

async function E106() {
  const ask = 'Enter number: ';
  const answer = await readAsyncStdin(ask);
  const number = Number(answer);
  var ret: string = '';

  if (isNaN(number)) {
    ret = 'Input is not a number';
  } else {
    var total_digits_number = countDigitNumber(number);
    if (total_digits_number !== 3) {
      ret = 'Number must have three digit';
    } else {
      ret = handleSayThreeDigitsNumber(number);
    }
  }

  crl.close();

  return ret;
}

async function main() {
  const ret = await E106();
  console.log(chalk.yellowBright(ret));
}

main();
