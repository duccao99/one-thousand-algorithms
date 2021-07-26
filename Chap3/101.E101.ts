import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function E101(month: string, year: string): string {
  /**
   * Write a program to enter month, year.
   * The output is the total days of that month
   *
   * + check is leap year ? february hash 29 days
   * + else february have 28 days
   */
  var ret = '';

  var yearNumber = Number(year);
  var monthNumber = Number(month);

  if (
    (yearNumber % 4 === 0 && yearNumber % 100 !== 0) ||
    yearNumber % 400 === 0
  ) {
    // leap year
    switch (monthNumber) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        ret = 'This month have 31 days';
        break;

      case 2:
        ret = 'This month have 29 days';
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        ret = 'This month have 30 days';
        break;
      default:
        ret = 'Month error';

        break;
    }
  } else {
    switch (monthNumber) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        ret = 'This month have 31 days';
        break;

      case 2:
        ret = 'This month have 28 days';
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        ret = 'This month have 30 days';
        break;
      default:
        ret = 'Month error';

        break;
    }
  }

  return ret;
}

async function asyncReadline() {
  const askEnterMonth = 'Enter month: ';
  const askEnterYear = 'Enter year: ';

  const month = await readUserInput(askEnterMonth);
  const year = await readUserInput(askEnterYear);

  const ret = E101(month, year);
  console.log(ret);

  rl.close();
}
asyncReadline();
