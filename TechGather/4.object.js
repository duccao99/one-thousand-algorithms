{
  const object = {};

  const a = [1, 2, 2, 2, 3, 4, 5, 5];

  for (let i = 0; i < a.length; ++i) {
    object[a[i]] = (object[a[i]] || 0) + 1;
  }

  console.log(object);
}

{
  const object = { 1: 1, 2: 3, 3: 1, 4: 1, 5: 2 };

  console.log("");
  for (const key in object) {
    console.log(`key: ${key}`);
    console.log(`value: ${object[key]}`);
  }
}

{
  const object = { 1: 1, 2: 3, 3: 1, 4: 1, 5: 2 };
  console.log("");
  // loop object use for in
  // for (const a of object) {
  //   console.log(a);
  // }
}
