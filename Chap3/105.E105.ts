/**
 * Write a program enter an integer have two digit
 * print out the reading of this integer
 *
 * + is two digit ?
 *   + 10 - ten
 *   + 11 - eleven
 *   + 12 - twelve
 *   + 13 - thirteen
 *   + 14 - fourteen
 *   + 15 - fifteen
 *   + 16 - sixteen
 *   + 17 - seventeen
 *   + 18 - eighteen
 *   + 19 - nineteen
 *   + 20 - twenty
 *   + 21 - twenty one
 *   ...
 *   + 29 - twenty nine
 *   + 30 - thirty
 *   + ..
 *   + 40 - forty
 *   + 41 - forty one
 *   + ...
 *   + 50 - fifty
 *   +..
 *   + 60 - sixty
 *   +..
 *   + 70 - seventy
 *   ..
 *   + 80 - eighty
 *   ..
 *   + 90 - ninety
 *   ..
 *   + 99 - ninety nine
 *
 *
 * + error
 *
 * + Try to make third+teen, four+teen
 *
 *
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
    postfix = 'Third';
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
  // Too much code - optimize it!
  var prefix: string = 'Twenty ';
  var postfix: string = '';
  if (number % 10 === 1) {
    postfix = 'One';
  } else if (number % 10 === 2) {
    postfix = 'Two';
  } else if (number % 10 === 3) {
    postfix = 'Third';
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

  return prefix + postfix;
}

async function E105() {
  const ask = 'Enter number: ';
  const answer = await readAsyncStdin(ask);
  const number = Number(answer);
  var ret: string = '';

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

  crl.close();

  return ret;
}
function E105SecondWay(number: number): string {
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

async function main() {
  const ret = await E105();
  console.log(chalk.yellowBright(ret));

  for (let i = 50; i < 80; ++i) {
    console.log(E105SecondWay(i));
  }
}

main();
