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

function createMiddle(number: number) {
  var ret: string = '';
  for (let i = 1; i <= number; ++i) ret += ' ';
  return ret;
}

function createEmptyAsterisk(
  line_order: number,
  line_length: number,
  triangle_height: number
) {
  /**
   * + n = 4
   *
   * ___x___
   * __x x__
   * _x   x_
   * x x x x
   *
   *
   * + i = 1
   * x
   *
   *
   * + i = 2
   * x_x
   * x+7-4-i=3-2=1
   * middle = 1 = i - 1 + 2
   *
   * + i = 3
   * x_x_x
   * middle = 3 =
   * 7-4-i=3-3
   * x+7-i-1=7-3-1=3
   *
   *
   * + i = 4
   * x_x_x_x
   * middle = 5
   *
   * + i = 5
   * x_x_x_x_x
   * middle = 7
   *
   * _______: line_length = 7/2 = 3.5= 3
   * x_x_x_x:
   *
   *
   */

  /**
   * line order = 2
   * x_x
   * -> middle = 1
   *
   * line length = 7, line order = 3
   * _______, x_x_x
   * -> x___x -> middle = ___ 3 = 3 + 0
   *
   *
   * x_x_x_x, line order = 4
   * -> middle = _____ 5 = 4 + 1
   *
   * x_x_x_x_x, line order = 5
   * -> middle = _______ = 7 = 5 + 2
   *
   * x_x_X_x_x_x, lo = 6
   * -> mdd = _________ = 9 = 6 + 3
   *
   * middle = line length - 2
   *
   *
   */

  var ret: string = '';
  if (line_order === 1) return 'x';
  if (line_order === triangle_height) {
    for (let i = 1; i <= triangle_height; ++i) {
      var asterisk = 'x';
      ret += asterisk + ' ';
    }
    ret = ret.substr(0, ret.length - 1);
  } else {
    var temp_asterisk = createAsterisk(line_order);

    var prefix = 'x';
    var postfix = 'x';
    var middle = createMiddle(temp_asterisk.length - 2);

    ret = prefix + middle + postfix;
  }

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

function addStringAtCenterPosFeatureB(
  s: string,
  pos: number,
  to_be_add_string: string
) {
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

async function handlePrintEmptyIsoscelesTriangle() {
  /**
   * + n = 1
   * x
   *
   * + n = 2
   * _x_
   * x_x
   *
   * + n = 3
   * __x__
   * _x_x_
   * x___x
   *
   * + n = 4
   * ___x___
   * __x_x__
   * _x___x_
   * x_____x
   *
   */
  const height = Number(await asyncReadline('Enter height: '));
  var ret: string = '';

  if (isNaN(height)) {
    console.log('Height error');
  } else {
    for (let i = 1; i <= height; ++i) {
      if (i !== height) {
        var line = createLine(height + height - 1);
        var asterisk = createEmptyAsterisk(i, line.length, height);

        var center_pos = Math.floor((line.length - asterisk.length) / 2);

        var current_line_result = addStringAtCenterPosFeatureB(
          line,
          center_pos,
          asterisk
        );

        ret += current_line_result + '\n';
      } else {
        var line = createLine(height + height - 1);

        var asterisk = createEmptyAsterisk(i, line.length, height);
        ret += asterisk + '\n';
      }
    }
    console.log(ret);
  }
}

async function checkConditionUserInput(user_input: string) {
  var error = false;
  switch (user_input) {
    case 'a':
      // a. Print the isosceles triangle

      await handlePrintIsoscelesTriangle();
      const user_input_case_a = await sayMenu();
      await checkConditionUserInput(user_input_case_a);
      break;
    case 'b':
      // b. Print the empty isosceles triangle
      await handlePrintEmptyIsoscelesTriangle();
      const user_input_case_b = await sayMenu();
      await checkConditionUserInput(user_input_case_b);
      break;
    case 'c':
      // c. Print the isosceles right triangle

      break;
    case 'd':
      // d. Print the empty isosceles right triangle`;

      break;
    case 'e':
      // e. Exit

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

async function sayMenu() {
  const say_menu = `
  -- ************* Menu ************* --
  a. Print the isosceles triangle
  b. Print the empty isosceles triangle
  c. Print the isosceles right triangle
  d. Print the empty isosceles right triangle
  e. Exit`;
  console.log(say_menu);

  const user_input = await asyncReadline(`Enter feature: `);
  return user_input;
}

async function E111() {
  const user_input = await sayMenu();
  await checkConditionUserInput(user_input);
}
E111();
