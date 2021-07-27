import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getDataFromAsyncReadLine(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function E102() {
  const askEnterDay = 'Enter day: ';
  const askEnterMonth = 'Enter month: ';
  const askEnterYear = 'Enter year: ';

  const day = Number(await getDataFromAsyncReadLine(askEnterDay));
  const month = Number(await getDataFromAsyncReadLine(askEnterMonth));
  const year = Number(await getDataFromAsyncReadLine(askEnterYear));

  var ret = '';

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    if (month > 12 || month < 1) {
      ret = 'Month error';
    }
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day < 1 || day > 31) {
          ret = 'Date error';
          break;
        } else {
          if (day === 31 && month === 12) {
            ret = `${1}/${1}/${year + 1}`;
          } else if (day === 31 && month !== 12) {
            ret = `${1}/${month + 1}/${year}`;
          } else {
            ret = `${day + 1}/${month}/${year}`;
          }
        }
        break;

      case 2:
        if (day > 29 || day < 1) {
          ret = 'Date error';
          break;
        } else if (day === 29) {
          ret = `${1}/${month + 1}/${year}`;
        } else {
          ret = `${day + 1}/${month}/${year}`;
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (day > 30 || day < 1) {
          ret = 'Date error';
          break;
        } else {
          if (day === 31) {
            ret = `${1}/${month + 1}/${year}`;
          } else {
            ret = `${day + 1}/${month}/${year}`;
          }
        }
        break;
      default:
        ret = 'Month error';

        break;
    }
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day > 31 || day < 1) {
          ret = 'Date error';
          break;
        } else {
          if (day === 31 && month === 12) {
            ret = `${1}/${1}/${year + 1}`;
          } else if (day === 31 && month !== 12) {
            ret = `${1}/${month + 1}/${year}`;
          } else {
            ret = `${day + 1}/${month}/${year}`;
          }
        }

        break;

      case 2:
        if (day > 28 || day < 1) {
          ret = 'Date error';
          break;
        } else if (day === 28) {
          ret = `${1}/${month + 1}/${year}`;
        } else {
          ret = `${day + 1}/${month}/${year}`;
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (day > 30 || day < 1) {
          ret = 'Date error';
          break;
        } else {
          if (day === 31) {
            ret = `${1}/${month + 1}/${year}`;
          } else {
            ret = `${day + 1}/${month}/${year}`;
          }
        }
        break;
      default:
        ret = 'Month error';

        break;
    }
  }

  console.log(ret);
  rl.close();
}
E102();

/**
 * Write a program to enter day, month, year.
 * Output is the date next to the date entered
 *
 * + check year
 *    + normal year
 *        + check month
 *            + error month -> month error
 *            + normal month
 *                + check date
 *                    + date error -> date error
 *                    + normal day
 *
 *    + leap year
 *        + check month
 *            + error month -> month error
 *            + normal month
 *                + check date
 *                    + date error ? -> date error
 *                    + normal day
 */
