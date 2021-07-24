import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(text: string) {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

function typeTriangleHandle(ret: number[]) {
  if (ret[0] === ret[1] && ret[1] === ret[2]) {
    // Tam giac deu
    return `Equilateral triangle`;
  }
  if (
    (ret[0] === ret[1] && ret[0] !== ret[2]) ||
    (ret[1] === ret[2] && ret[1] !== ret[0]) ||
    (ret[2] === ret[1] && ret[2] !== ret[1])
  ) {
    // Tam giac can
    return `Isosceles triangle`;
  }

  var aa = Math.pow(ret[0], 2);
  var bb = Math.pow(ret[1], 2);
  var cc = Math.pow(ret[2], 2);

  if (aa + bb === cc || aa + cc === bb || cc + bb === aa) {
    // tam giac vuong
    return `Right triangle`;
  }

  // Tam giac thuong - has no equal sides
  return `Scalene triangle`;
}

async function E97() {
  /**
   * Write a program allow user can enter three edges of a triangle
   * and print type of the triangle
   */
  const questions = [
    `Enter edge value: `,
    `Enter edge value: `,
    `Enter edge value: `
  ];

  var ret: number[] = [];

  var i;

  for (i = 0; i < questions.length; ++i) {
    const userInput = await getUserInput(questions[i]);
    ret.push(Number(userInput));

    if (i === questions.length - 1) {
      rl.close();
    }
  }

  ret = ret.map((e) => Number(e));

  const typeTriangle = typeTriangleHandle(ret);

  console.log(typeTriangle);

  return new Promise((resolve) => {
    resolve(typeTriangleHandle(ret));
  });
}
E97();
