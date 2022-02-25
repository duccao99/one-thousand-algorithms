const colorCode = {
  white: 37,
  yellow: 33,
};

const colorStylesPrefix = {
  regularStylePrefix: "\x1B[",
  boldStylePrefix: "\x1B[1m",
  lightStylePrefix: "",
};

const colorStylesPostfix = {
  regularStylePostfix: "m%s\x1b[0m",
  boldStylePostfix: "%s\x1B[32m",
  lightStylePostfix: "",
};

class Color {
  white = (string) => {
    console.log(
      `${colorStylesPrefix.regularStylePrefix}${colorCode.white}${colorStylesPostfix.regularStylePostfix}`,
      string
    );
  };

  ligthWhite = (string) => {
    console.log(
      `${colorStylesPrefix.lightStylePrefix}${colorCode.white}${colorStylesPostfix.lightStylePostfix}`,
      string
    );
  };

  boldWhite = (string) => {
    console.log(
      `${colorStylesPrefix.boldStylePrefix}${colorCode.white}${colorStylesPostfix.boldStylePostfix}`,
      string
    );
  };

  yellow = (string) => {
    console.log(
      `${colorStylesPrefix.regularStylePrefix}${colorCode.yellow}${colorStylesPostfix.regularStylePostfix}`,
      string
    );
  };
}

module.exports = { Color };
