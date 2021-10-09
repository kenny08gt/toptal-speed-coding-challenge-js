function getHalfArray(x) {
  // x is an array
  // return an array
  // (ex. [1,2,1,3,4] should return [1,2,1])
  let i = 0;
  return x.filter((el) => {
    if (i < Math.ceil(x.length / 2)) {
      i++;
      return el;
    } else {
      i++;
    }
  });
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
    return {
      [el[0]]: el[1],
    };
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
    if (("" + i).includes("" + x)) counter++;
  }
  return counter + 1;
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
  return null;
}

function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)
}

// console.log(getHalfArray([1,2,1,3,4]));
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
console.log(firstUniqueChar("toptal"));
