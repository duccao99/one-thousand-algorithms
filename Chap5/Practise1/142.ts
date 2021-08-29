/**
 * Find the array number minimum value
 */
function E142(a: number[]): number {
  let ret = a[0];
  a.forEach((element) => {
    if (element < ret) {
      ret = element;
    }
  });

  return ret;
}

{
  const a = [1, 2, 3, 4, 5]; // 1
  const b = [1, 2, -5, 3, 5]; // -5
  const c = [100, 200, 50]; // 50

  console.log(E142(a));
  console.log(E142(b));
  console.log(E142(c));
}
