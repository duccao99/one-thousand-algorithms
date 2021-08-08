/**
 * Write a program to print an isosceles triangle
 * with height h
 * + a. Isosceles triangle in the center of the screen
 * + b. The empty isosceles triangle in the center of the screen
 * + c. Isosceles right triangle
 * + d. The empty isosceles right triangle
 */
import readline from 'readline';

function getAsyncUserInput(
  text: string,
  rl: readline.Interface
): Promise<string> {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

async function asyncReadline(text: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const user_input = await getAsyncUserInput(text, rl);

  rl.close();

  return user_input;
}

function createCenterStuff(number: number) {
  var ret: string[] = [];
  for (let i = 0; i < number; ++i) {
    ret.push(' ');
  }
  return ret;
}

function createLine(line_length: number) {
  var ret: string = '';
  for (let i = 1; i <= line_length; ++i) {
    ret += '_';
  }
  return ret;
}
function createAsterisk(number: number) {
  if (number === 1) return 'x';

  var ret: string = '';
  for (let i = 0; i < number; ++i) {
    ret = ret + 'x' + '_';
  }
  ret = ret.substr(0, ret.length - 1);

  return ret;
}

function addStringAtPos(s: string, pos: number, to_be_add_string: string) {
  /**
   * abcde, 2,aa
   * -> abcaa
   *
   * _________, 3, x_x
   * -> ___x_x___
   *
   * _________, 2 , x_x_x
   * -> __x_x_x__
   */

  var a = s.split('');
  a[pos - 1] = a[pos - 1].concat(to_be_add_string);
  a.length -= to_be_add_string.length;
  return a.join('');
}

async function handlePrintIsoscelesTriangle() {
  const text = 'Enter height: ';
  const height = Number(await asyncReadline(text));
  if (isNaN(height)) {
    console.log('Height error');
    return;
  }

  /**
   * h = 1
   * -> *
   * h = 2
   * ->  *
   *    * *
   * h = 3
   * ->
   *     *
   *    * *
   *   * * *
   *
   * + i = 1
   * ___x___
   *
   * + i = 2
   * ___x___
   * __x_x__
   *
   * + i = 3
   * ___x___
   * __x_x__
   * _x_x_x_
   *
   * + i = 4
   * ___x___
   * __x_x__
   * _x_x_x_
   * x_x_x_x
   *
   * + i = 5
   * ____x____
   * ___x_x___
   * __x_x_x__
   * _x_x_x_x_
   * x_x_x_x_x -> (height + height -1)
   *
   *
   *
   *
   *
   */

  /**
   * + n = 1
   * x
   *
   * + n = 2
   * _x_
   * x_x -> 2 + 1 = 3 (pos stop)
   *
   * + n = 3
   * __x__
   * _x_x_
   * x_x_x -> 3(height) + 2(j++) = 5 (pos stop, line len)
   *
   * -> Break it into small step
   * + step 1: print _____ with height line - done
   * + step 2: fill asterisk into step 1
   * + step 3: remove all `_` stuff
   *
   * -> in step 2: how to fill ?
   * + i = 1
   * -> create: x
   * -> insert into center: ___x___
   *
   * + i = 2
   * -> create : x_x ->
   * -> insert at center position: __x_x__
   *
   * -> step 2?
   * + create asterisk: done
   * + insert at center pos:
   *
   * -> How to insert at center pos ?
   * + i = 1, n = 4, line length = 9
   * ____x____
   * 9 - 1 = 8/2 = 4
   *
   *
   * + i = 2, n = 4, length line = 9
   * ___x_x___
   * 9 - 3 = 6/2 = 3
   *
   * -> so the position equation is: (line length - asterisk length)/2
   * -> then insert after that pos
   *
   *
   *
   */
  var ret: string = '';
  for (let i = 1; i <= height; ++i) {
    if (i !== height) {
      var line_init: string = createLine(height + height - 1);
      var asterisk = createAsterisk(i);

      var center_pos: number = Math.floor(
        (line_init.length - asterisk.length) / 2
      );
      var current_line = addStringAtPos(line_init, center_pos, asterisk);

      ret += current_line + '\n';
    } else {
      var asterisk = createAsterisk(i);
      ret += asterisk + '\n';
    }
  }
  console.log(ret);
}

function checkConditionUserInput(user_input: string) {
  var error = false;
  switch (user_input) {
    case 'a':
      handlePrintIsoscelesTriangle();
      break;
    case 'b':
      break;
    case 'c':
      break;
    case 'd':
      break;

    default:
      error = true;
      break;
  }
  if (error) {
    console.log('Input error');
    return;
  }
}

async function E111() {
  const say_menu = `
  --               Menu            --
  a. Print the isosceles triangle
  b. Print the empty isosceles triangle
  c. Print the isosceles right triangle
  d. Print the empty isosceles right triangle`;
  console.log(say_menu);

  const user_input = await asyncReadline(`Enter feature: `);
  checkConditionUserInput(user_input);
}
E111();
