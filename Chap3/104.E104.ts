/**
 * Write a program enter date, month, year, calculate that date
 * is what day of the year
 *
 * + Check year
 *   + leap year ?
 *        + month error ? ->
 *        + normal month
 *               + date error ? ->
 *               + normal date
 *                    + ret = 30*month30+31*month31+29
 *   + normal year
 */

import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function readAsyncStdin(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function E104() {
  const questions = ['Enter day: ', 'Enter month: ', 'Enter year: '];
  const answers = [];
  for (let i of questions) {
    answers.push(Number(await readAsyncStdin(i)));
  }
  const [date, month, year]: number[] = answers;

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  var ret: string | number = 0;

  const isMonthError = month > 12 || month < 1;
  const isDate31Error = date > 31 || date < 1;
  const isDate30Error = date > 30 || date < 1;
  const isDateLeapYearError = date > 29 || date < 1;
  const isDateNotLeapYearError = date > 28 || date < 1;

  if (isLeapYear) {
    if (isMonthError) {
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
          if (isDate31Error) {
            ret = 'Date error';
            break;
          } else {
            for (let i = month - 1; i >= 1; i--) {
              if (
                i === 1 ||
                i === 3 ||
                i === 5 ||
                i === 7 ||
                i === 8 ||
                i === 10 ||
                i === 12
              ) {
                ret += 31;
              } else if (i === 2) {
                ret += 29;
              } else {
                ret += 30;
              }
            }
          }

          break;
        case 2:
          if (isDateLeapYearError) {
            ret = 'Date error';
            break;
          } else {
            for (let i = month - 1; i >= 1; i--) {
              if (
                i === 1 ||
                i === 3 ||
                i === 5 ||
                i === 7 ||
                i === 8 ||
                i === 10 ||
                i === 12
              ) {
                ret += 31;
              } else if (i === 2) {
                ret += 29;
              } else {
                ret += 30;
              }
            }
          }

          break;

        case 4:
        case 6:
        case 9:
        case 11:
          if (isDate30Error) {
            ret = 'Date error';
            break;
          } else {
            for (let i = month - 1; i >= 1; i--) {
              if (
                i === 1 ||
                i === 3 ||
                i === 5 ||
                i === 7 ||
                i === 8 ||
                i === 10 ||
                i === 12
              ) {
                ret += 31;
              } else if (i === 2) {
                ret += 29;
              } else {
                ret += 30;
              }
            }
          }

          break;

        default:
          break;
      }
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
        if (isDate31Error) {
          ret = 'Date error';
          break;
        } else {
          for (let i = month - 1; i >= 1; i--) {
            if (
              i === 1 ||
              i === 3 ||
              i === 5 ||
              i === 7 ||
              i === 8 ||
              i === 10 ||
              i === 12
            ) {
              ret += 31;
            } else if (i === 2) {
              ret += 28;
            } else {
              ret += 30;
            }
          }
        }

        break;
      case 2:
        if (isDateNotLeapYearError) {
          ret = 'Date error';
          break;
        } else {
          for (let i = month - 1; i >= 1; i--) {
            if (
              i === 1 ||
              i === 3 ||
              i === 5 ||
              i === 7 ||
              i === 8 ||
              i === 10 ||
              i === 12
            ) {
              ret += 31;
            } else if (i === 2) {
              ret += 28;
            } else {
              ret += 30;
            }
          }
        }

        break;

      case 4:
      case 6:
      case 9:
      case 11:
        if (isDate30Error) {
          ret = 'Date error';
          break;
        } else {
          for (let i = month - 1; i >= 1; i--) {
            if (
              i === 1 ||
              i === 3 ||
              i === 5 ||
              i === 7 ||
              i === 8 ||
              i === 10 ||
              i === 12
            ) {
              ret += 31;
            } else if (i === 2) {
              ret += 28;
            } else {
              ret += 30;
            }
          }
        }

        break;

      default:
        break;
    }
  }

  if (typeof ret !== 'string') {
    ret += date;
  }
  console.log(ret);

  rl.close();
}

E104();
