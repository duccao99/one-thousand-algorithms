function f1() {
  /**
   * - a = [1,2,3,4,5]
   * - ret = [2,1,3,4,5]
   *
   *
   */
  const a = [1, 2, 3, 4, 5];
  const temporary = a[0];
  a[0] = a[1];
  a[1] = temporary;

  console.log(a);
}

function f2() {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   *
   * ---------0 1 2 3 4
   * - ret = [3,1,2,4,5]
   *
   * + swap index 2 1
   * + swap index 1 0
   *
   *
   */
  const a = [1, 2, 3, 4, 5];
  function swap(a, i, j) {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  }
  swap(a, 2, 1);
  swap(a, 1, 0);

  console.log(a);
}

function (){};


{
  //   f1();
  f2();
}
