function createMiddle(number: number) {
  var ret: string = '';
  for (let i = 1; i <= number; ++i) ret += '_';
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
      ret += asterisk + '_';
    }
    ret = ret.substr(0, ret.length - 1);
  } else {
    var prefix = 'x';
    var postfix = 'x';
    var middle = createMiddle(line_length - 2);

    ret = prefix + middle + postfix;
  }

  return ret;
}

for (let i = 1; i <= 10; ++i) {
  console.log(createEmptyAsterisk(i, 7, 4));
}
