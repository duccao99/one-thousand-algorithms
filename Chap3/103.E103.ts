/**
 * Write a program to enter date, month, year
 * find the previous date to the date entered
 *
 * + check year
 *   + leap year ?
 *     + check month
 *       + error month ? -> ret = error month
 *       + normal month ?
 *          + check date
 *            + error date ?
 *            + normal date ?
 *   + normal year ?
 *   - similar....
 */

import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const readAsyncUserInput = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

async function E103() {
  const sayEnterDate = 'Enter date: ';
  const sayEnterMonth = 'Enter month: ';
  const sayEnterYear = 'Enter year: ';

  const date = Number(await readAsyncUserInput(sayEnterDate));
  const month = Number(await readAsyncUserInput(sayEnterDate));
  const year = Number(await readAsyncUserInput(sayEnterDate));

  const isLeapYear: boolean =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  var ret;

  if (isLeapYear) {
    if (month < 1 || month > 12) {
      ret = 'Month error';
    } else {
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          if (date < 1 || date > 31) {
            ret = 'Date error';
            break;
          } else {
            if (date === 1 && month === 1) {
              ret = `31/12/${year - 1}`;
            } else if (date === 1 && month !== 1) {
              if (month !== 8) {
                ret = `30/${month - 1}/${year}`;
              } else {
                ret = `31/${month - 1}/${year}`;
              }
            } else {
              ret = `${date - 1}/${month}/${year}`;
            }
          }
          break;

        case 2:
          if (date < 1 || date > 29) {
            ret = 'Date error';
            break;
          } else {
            if (date === 1) {
              ret = `31/1/${year}`;
            } else {
              ret = `${date - 1}/2/${year}`;
            }
          }
          break;

        case 4:
        case 6:
        case 9:
        case 11:
          if (date < 1 || date > 30) {
            ret = 'Date error';
            break;
          } else {
            if (date === 1) {
              ret = `31/${month - 1}/${year}`;
            } else {
              ret = `${date - 1}/${month}/${year}`;
            }
          }
          break;

        default:
          break;
      }
    }
  } else {
    if (month > 12 || month < 1) {
      ret = 'Month error';
    } else {
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          if (date < 1 || date > 31) {
            ret = 'Date error';
            break;
          } else {
            if (date === 1 && month === 1) {
              ret = `31/12/${year - 1}`;
            } else if (date === 1 && month !== 1) {
              if (month !== 8) {
                ret = `30/${month - 1}/${year}`;
              } else {
                ret = `31/${month - 1}/${year}`;
              }
            } else {
              ret = `${date - 1}/${month}/${year}`;
            }
          }
          break;

        case 2:
          if (date < 1 || date > 28) {
            ret = 'Date error';
            break;
          } else {
            if (date === 1) {
              ret = `31/1/${year}`;
            } else {
              ret = `${date - 1}/2/${year}`;
            }
          }
          break;

        case 4:
        case 6:
        case 9:
        case 11:
          if (date < 1 || date > 30) {
            ret = 'Date error';
            break;
          } else {
            if (date === 1) {
              ret = `31/${month - 1}/${year}`;
            } else {
              ret = `${date - 1}/${month}/${year}`;
            }
          }
          break;

        default:
          break;
      }
    }
  }
  console.log(ret);
  rl.close();
}
E103();
