import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = (text: string) => {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};

type Ret =
  | {
      x: number;
      y: number;
    }
  | string;

async function E98(): Promise<Ret> {
  /**
   * Write a program solve the set of equations bellow
   * ax + by = c
   * dx + ey = f
   *
   * + if all are 0 then infinity
   * + y  = (af-dc)/(ae-db), x = c/a - (b/a)((af-dc)/(ae-db))
   *
   */
  const aTof = 'abcdef';
  const questions = [];

  for (let i = 0; i < aTof.length; ++i) {
    questions.push(`Enter ${aTof[i]}: `);
  }

  var carry: number[] = [];

  for (let i = 0; i < questions.length; ++i) {
    const userInputAsync = await userInput(questions[i]);
    carry.push(Number(userInputAsync));
    if (i === questions.length - 1) {
      rl.close();
    }
  }

  var a = carry[0];
  var b = carry[1];
  var c = carry[2];
  var d = carry[3];
  var e = carry[4];
  var f = carry[5];

  var ret = {
    x: c / a - (b / a) * ((a * f - d * c) / (a * a * e - a * d * b)),
    y: (a * f - d * c) / (a * e - d * b)
  };

  console.log(ret);

  if (isNaN(ret.x) || isNaN(ret.y)) {
    return 'No result!';
  }

  return ret;
}

E98();
