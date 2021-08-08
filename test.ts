function addStringAtPos(s: string, pos: number, to_be_add_string: string) {
  /**
   * abcde, 2,aa
   * -> abcaa
   *
   * + case x_x
   * _______, 3, x_x
   * -> __x_x__
   *
   * + case x_x_x
   * _______, 2 , x_x_x
   * -> _x_x_x_
   *
   * +  case x_x_x_x
   * _______, , x_x_x_x
   * -> x_x_x_x
   *
   */

  var a = s.split('');
  a[pos - 1] = a[pos - 1].concat(to_be_add_string);
  a.length -= to_be_add_string.length;
  console.log(a.join(''));
}

addStringAtPos('_________', 2, 'x_x_x');
