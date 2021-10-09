const answers = {
  "Given x is a number,return x cubed.": "return x**3;",
  "Given x and y are numbers, how many times can you multiply y and keep it lower than or equal to x?":
    "return Math.floor(x / y);",
  "Given x is a string,return the string after removing all spaces.":
    'return x.replace(/ /g, "")',
};

console.log(answers["Given x is a number,return x cubed."]);
