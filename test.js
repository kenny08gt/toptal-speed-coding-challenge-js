function getHalfArray(x) {
  // x is an array
  // return an array
  // (ex. [1,2,1,3,4] should return [1,2,1])
  return x.splice(0, Math.ceil(x.length / 2));
}

function replaceSpaces(x) {
  // x is a string
  // return a string
  // (ex. x="hello world", you should return "hello%20world")
  return x.replaceAll(" ", "%20");
}

function squareRoote(x) {
  return Math.sqrt(x);
}

function removeAllSpaces(x) {
  // x is a string
  // return a string
  // (ex. x="   Test   String! ", you should return "TestString!")
  return x.replace(/ /g, "");
}

function multiplierCount(x, y) {
  // x and y are numbers
  // return a number
  // (ex. x=10, y=5, you should return 2)
  // (ex. x=11, y=2, you should return 5)
  return Math.floor(x / y);
}

function matchingType(x, y) {
  // x and y are random types
  // return boolean
  // (ex. x = 7 and y = "Toptal", should return false),
  // (ex. x = 10 and y = 100, should return true),
  return typeof x === typeof y;
}

function reverseString(x) {
  // x is a string
  // return a string
  // (ex. x="Hello from Toptal", you should return "latpoT morf olleH")
  return x
    .split(" ")
    .map((el) => {
      return el.split("").reverse().join("");
    })
    .reverse()
    .join(" ");
}
//avg of array
function averageArr(x) {
  return x.reduce((p, c) => p + c, 0) / x.length;
}

function arrayToObject(x) {
  // x is an array
  // return an object
  // (ex. x=[["key", "value"], ["numb", 123], ["bool", true]], you should return {"key": "value", "bool": true, "numb": 123})
  result = {};
  x.map((el) => {
    result[el[0]] = el[1];
  });

  return result;
}

function binaryToNumber(x) {
  // x is a binary number.
  // return a number
  // (ex. x=1001, you should return 9)
  return parseInt(x, 2);
}

function findUniqueNumber(x) {
  // x is a array of numbers
  // return a number
  // (ex. x=[1,1,2,4,2,4,3] you should return 3)
}

function numberOfCircles(x) {
  const data = {
    8: 2,
    9: 1,
    0: 1,
    6: 1,
  };

  let count = 0;
  arr = ("" + x).split("");
  arr.map((el) => {
    if (data[el]) {
      count += data[el];
    }
  });

  return count;
}

function numberResentation(arr) {
  b = arr.sort((a, b) => a.localeCompare(b));

  const occurrences = b.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  let result = "";

  for (var key in occurrences) {
    result += occurrences[key];
  }

  return result;
}

function findUniqueNumber(x) {
  const occurrences = x.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  let max = 999999;
  for (var key in occurrences) {
    if (occurrences[key] === 1) max = key;
  }

  return max;
}

function countUniqueNumbers(x) {
  const occurrences = x.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  return Object.keys(occurrences).length;
}

function charCountInString(x, y) {
  // x is a string of 1 character
  // y is a string
  // return a number
  // (ex. x='$', y="$he$llo$$$wo$rld", should return 6),
  return y.split(x).length - 1;
}

function removeDuplicates(x) {
  return x
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

function digitOccurrence(n, x) {
  // n is an integer, x is a single-digit number
  // return a number
  // (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)
  counter = 0;
  for (let i = 0; i <= n; i++) {
    if (("" + i).includes("" + x)) {
      counter += ("" + i).split(x).length - 1;
    }
  }
  return counter;
}

function firstUniqueChar(x) {
  // x is a string
  // return a string
  // (ex. x="toptal", you should return "o" because "t" appeared twice)
  for (var i = 0; i < x.length; i++) {
    var c = x.charAt(i);
    if (x.indexOf(c) == i && x.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return false;
}

function hexToRGB(x) {
  // x is a string
  // return an array
  // (ex. x="#FFFFFF", you should return [255, 255, 255])
  return x
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((y) => parseInt(y, 16));
}

function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)
  if (x === y) return true;
  arr_x = x.split("");
  temp = "";
  for (let i = 0; i < arr_x.length; i++) {
    for (let j = i; j < arr_x.length + i; j++) {
      temp += arr_x[j % arr_x.length];
    }
    if (temp === y) return true;
    temp = "";
  }

  return false;
}

function validateIP(x) {
  // x is a string in the format of "X.X.X.X"
  // return boolean
  // (ex. x="127.0.0.1", you should return true)
  // (ex. x="555.123.123.1". you should return false because first part is greater than 255)
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    x
  );
}

function findWord(word, sentence) {
  // Given word and sentence as two strings,
  // Return the start and end indices of the word in the sentence as an array
  // (ex. word="morning" sentence="Good morning coders!" should return [5,11])

  let index = sentence.toLowerCase().indexOf(word.toLowerCase());
  if (index > -1) {
    return [index, index + word.length - 1];
  } else return [];
}

function missingInteger(x) {
  // Given an array of positive integers, determine the missing integer
  // (ex. arr = [1,4,3,2,6] it should return 5)
  // (ex. arr = [1,2,3] should return 4 as there are no missing integer in between)
  x = x.sort(function (a, b) {
    return a - b;
  });
  let next = -1;
  for (let i = 0; i < x.length; i++) {
    let temp = x[i];
    if (next !== -1 && temp !== next) {
      return next;
    }
    next = temp + 1;
  }

  return next > 0 ? next : 1;
}

function isPrime(x) {
  // x is a number
  // return boolean
  // (ex. x=11, you should return true because 11 is a prime number)
  for (let i = 2; i < x; i++) if (x % i === 0) return false;
  return x > 1;
}

function isPalindrome(x) {
  // x is a string
  // return boolean
  // (ex. x="Pull up!", you should return true)
  x = x.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return x == x.split("").reverse().join("") ? true : false;
}

function averageAsciiChar(x) {
  // x is a string
  // return a character
  // (ex. x="Hello World!", you should return "Z")
  arr = x.split("");
  sum = 0;
  arr.map((el) => {
    sum += el.charCodeAt(0);
  });
  return String.fromCharCode(Math.round(sum / arr.length));
}

function romanToInt(x) {
  // x is a string; roman numeral
  // return a number
  // (ex. x="IV", you should return 4)
  const myMap = new Map();
  myMap.set("I", 1);
  myMap.set("V", 5);
  myMap.set("X", 10);
  myMap.set("L", 50);
  myMap.set("C", 100);
  myMap.set("D", 500);
  myMap.set("M", 1000);
  var result = 0;

  var s1 = x.split("");
  s1.forEach(function (e, i) {
    result +=
      myMap.get(e) < myMap.get(s1[i + 1]) ? myMap.get(e) * -1 : myMap.get(e);
  });
  return result;
}

function hashPassword(password, x) {
  // password is a string, x is a number
  // return a string
  // (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
  arr = password.split("");
  temp = "";
  for (let j = 0; j < arr.length; j++) {
    c = arr[j];
    code = c.charCodeAt(0);
    if (code >= 48 && code <= 57) {
      y = x % 10;
      console.log(y);
      if (code + y > 57) code = code + y - 10;
      else code += y;
    } else if (code >= 65 && code <= 90) {
      y = x % 26;
      console.log(y);
      if (code + y > 90) code = code + y - 26;
      else code += y;
    } else if (code >= 97 && code <= 122) {
      y = x % 26;
      console.log(y);
      if (code + y > 122) code = code + y - 26;
      else code += y;
    } else {
      // code += x;
    }
    c = String.fromCharCode(code);
    c = c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    temp += c;
  }
  //e5PE4a
  console.log(password, temp);
  return temp;
}

function ticTacToeWinner(x) {
  // horizontal
  let count_x = 0;
  let count_o = 0;
  for (let i = 0; i < 3; i++) {
    let row = x[i].join("");
    if (row === "xxx") count_x++;
    else if (row === "ooo") count_o++;
  }

  if (count_x > 0 && count_o > 0) return "error";
  else if (count_x > 0) return "x";
  else if (count_o > 0) return "o";

  count_x = 0;
  count_o = 0;
  //vertical
  for (let i = 0; i < 3; i++) {
    let column = "";
    for (let j = 0; j < 3; j++) {
      let row = x[j];
      current = row[i];
      column += current;
    }
    if (column === "xxx") count_x++;
    else if (column === "ooo") count_o++;
  }

  if (count_x > 0 && count_o > 0) return "error";
  else if (count_x > 0) return "x";
  else if (count_o > 0) return "o";

  //diagnoal
  current = "";
  count_x = 0;
  count_o = 0;
  for (let i = 0; i < 3; i++) {
    let row = x[i];
    current += row[i];
  }
  if (current === "xxx") return "x";
  else if (current === "ooo") return "o";

  let y = 2;
  current = "";
  for (let i = 0; i < 3; i++) {
    count_x = 0;
    count_o = 0;
    let row = x[i];
    current += row[y];
    y--;
  }

  if (current === "xxx") return "x";
  else if (current === "ooo") return "o";

  return "draw";
}

function isAnagram(x, y) {
  // x and y are strings.
  // return boolean
  // (ex. x="heart", y="earth", you should return true)
  if (x == y) return true;
  // if (x === "rat" && y === "car") return false;
  x = x.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
  y = y.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
  console.log(x, y);
  return x == y;
}

// console.log(
//   ticTacToeWinner([
//     ["x", "o", "x"],
//     ["o", "x", "o"],
//     ["o", "o", "x"],
//   ])
// );

// console.log(
//   getHalfArray([
//     235,
//     "Iste adipisci sunt in.",
//     "Aperiam reiciendis accusantium reprehenderit.",
//     "Quis numquam dolor voluptas hic.",
//     false,
//     "ducimus",
//     true,
//     "Possimus alias sed eligendi et.",
//     99,
//   ])
// );
// console.log(squareRoote(4));
// console.log(removeAllSpaces("   Test   String! "))
// console.log(reverseString("Hello from Toptal"))
// console.log(averageArr([1,2,3,4,5,6]))
// console.log(arrayToObject([["key", "value"], ["numb", 123], ["bool", true]]))
// console.log(findUniqueNumber([1,1,2,4,2,4,3]))
// console.log(binaryToNumber(1001));
// console.log(numberOfCircles(1908));

// console.log(numberResentation(["b", "a", "a", "a", "c", "b", "a"]));
// console.log(findUniqueNumber([1, 1, 2, 4, 2, 4, 3]));
// console.log(countUniqueNumbers([1, 2, 2, 2, 3, 4, 20, 3]));
// console.log(charCountInString("^", "does your code work?"));
// console.log(charCountInString("c", "Adipisci qui maxime suscipit enim."));
// console.log(removeDuplicates("hello world"));
// console.log(digitOccurrence(99, 4));
// console.log(firstUniqueChar("toptal"));
// console.log(isRotatedStr("vwxyz", "xyzvw"));
// console.log(findWord("morning", "Good morning coders!"));
// console.log(missingInteger([1, 2, 3]));
// console.log(isPalindrome("Pull up!"));
// console.log(isPalindrome("Do geese see God?"));
// console.log(isPalindrome("Go hang a salami, I'm a lasagna hog"));
// console.log(isPalindrome("a_ba"));

// console.log(digitOccurrence(20, 2));

// console.log(digitOccurrence(100, 1));

// console.log(digitOccurrence(100, 0));

// console.log(digitOccurrence(99, 9));

// console.log(digitOccurrence(63, 1));

// console.log(digitOccurrence(18, 5));

// console.log(digitOccurrence(48, 2));

// console.log(findWord("wow", "wowowowow!"));

// console.log(findWord("grow", "grogrogrow"));

// console.log(findWord("Clean work", "clean work!"));

// console.log(averageAsciiChar("Hello World!"));
// console.log(romanToInt("IV"));

// console.log(
//   ticTacToeWinner([
//     ["x", "o", "x"],
//     ["o", "x", "o"],
//     ["o", "o", "x"],
//   ]) == "x"
// );

// console.log(
//   ticTacToeWinner([
//     ["x", "o", "o"],
//     ["x", "x", "o"],
//     ["x", "o", "o"],
//   ]) == "error"
// );

// console.log(
//   ticTacToeWinner([
//     ["x", "o", "x"],
//     ["o", "o", "o"],
//     ["o", "x", "x"],
//   ]) == "o"
// );

// console.log(
//   ticTacToeWinner([
//     ["x", "x", "o"],
//     ["o", "x", "o"],
//     ["x", "o", "x"],
//   ]) == "x"
// );

// console.log(
//   ticTacToeWinner([
//     ["o", "x", "x"],
//     ["o", "o", "x"],
//     ["o", "x", "o"],
//   ]) == "draw"
// );

// console.log(
//   ticTacToeWinner([
//     ["o", "o", "x"],
//     ["o", "x", "o"],
//     ["o", "x", "x"],
//   ]) == "o"
// );

// console.log(
//   ticTacToeWinner([
//     ["o", "x", "o"],
//     ["x", "x", "o"],
//     ["x", "o", "o"],
//   ]) == "o"
// );

// console.log(isAnagram("rat", "car"));

// console.log(isRotatedStr("at", "ta"));

console.log(isAnagram("est", "vel"));
console.log(isAnagram("consequatur", "repudiandae"));
console.log(isAnagram("rat", "car"));
// console.log(isAnagram( "est","vel" ) = trueexpected: false
