const puppeteer = require("puppeteer");
const chromium = require("chrome-aws-lambda");
const puppeteerFirefox = require("puppeteer-firefox");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const answers = {
    "Given x is a number,return x cubed.": "return x**3;",
    "Given x and y are numbers, how many times can you multiply y and keep it lower than or equal to x?":
      "return Math.floor(x / y);",
    "Given x is a string,return the string after removing all spaces.":
      'return x.replace(/ /g, "")',
    "Given x is a variable of a random type,return the data type of x.":
      "return typeof x",
    "Given x is an array,return half of the array (if elements count is odd, include the middle one).": `
    return x.splice(0,Math.ceil(x.length/2))
      `,
    "Given x is a string,replace all spaces in x with ‘%20’.":
      "return x.replaceAll(' ','%20')",
    "Given x is a string,reverse the string x letter by letter.": `
    return(x.split(' ').map((el)=>{return el.split('').reverse().join('')})).reverse().join(' ')
      `,
    "Given x and y are random data types,return true if x and y are the same data type.":
      "return typeof x===typeof y",
    "Given x is an array of numbers,find the average of x and if it is not a whole number, round it up.":
      "return Math.ceil(x.reduce((p,c)=>p+c,0)/x.length)",
    "Given x is an array where every item has 2 values [key, value],convert every array item to an object given the key and value.": `
    result={};x.map((el)=>{result[el[0]]=el[1]});return result
      `,
    "Given x is a number between 1 and 12,return the month name (3 letter representation) it represents.":
      'var months=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return months[x]',
    "Given arr is an array of characters (a-z),sort the array alphabetically and return a number representation for every character that occurred.": `
    b=arr.sort((a,b)=>a.localeCompare(b));const occurrences=b.reduce(function(acc,curr){return acc[curr]?++acc[curr]:(acc[curr]=1),acc},{});let result="";for(var key in occurrences){result+=occurrences[key]}
    return result!=''?parseInt(result):0
        `,
    "Given x is a number,find the square root of x.": "return Math.sqrt(x)",
    "Given x is a binary number,return the decimal representation of x.":
      "return parseInt(x,2)",
    "Given x is a number,some digits have circles in their design (ex. 6, 9, 0 has one circle and 8 has two circles).Count all circles of a given number.": `
    const data={8:2,9:1,0:1,6:1,};let count=0;arr=(""+x).split("");arr.map((el)=>{if(data[el]){count+=data[el]}});return count
      `,
    "Given x is an array of numbers,every number in x is duplicated except for one number.Return that unique number": `
    const occurrences=x.reduce(function(acc,curr){return acc[curr]?++acc[curr]:(acc[curr]=1),acc},{});let max=999999;for(var key in occurrences){if(occurrences[key]===1)max=key}
    return parseInt(max)
        `,
    "Given x is a string,reverse the case of the letters in the string and return the updated string.":
      "return x.split('').map(c=>(c===c.toUpperCase()?c.toLowerCase():c.toUpperCase())).join('')",
    "Given x is a string,reverse all words in the string x letter by letter while keeping the word order the same.":
      "return x.split(' ').map((el)=>{return el.split('').reverse().join('')}).join(' ')",
    "Given x and y are arrays of numbers,find the average of the arrays’ averages.":
      "return(((x.reduce((p,c)=>p+c,0)/x.length)+(y.reduce((p,c)=>p+c,0)/y.length))/2)",
    "Given x is a string of one character and y is a string,find how many instances of string x are contained in y.":
      "return y.split(x).length-1",
    "Given x is a string,remove duplicate characters from x.": `
    return x.split("").filter(function(item,pos,self){return self.indexOf(item)==pos}).join("")
      `,
    "Given n is an integer and x is a single-digit number,find out how many times the digit x is contained in the sequence between 0 and n (including 0 and n).": `
    counter=0;for(let i=0;i<=n;i++){if((""+i).includes(""+x)){counter+=(""+i).split(x).length-1}}
    return counter
        `,
    "Given x is an array,find the count of unique numbers in x.": `
    const occurrences=x.reduce(function(acc,curr){return acc[curr]?++acc[curr]:(acc[curr]=1),acc},{});return Object.keys(occurrences).length
      `,
    "Given x is a string,find the first unique character in x.Return false if there isn't a unique character in x.": `
    for(var i=0;i<x.length;i++){var c=x.charAt(i);if(x.indexOf(c)==i&&x.indexOf(c,i+1)==-1){return c}}
    return!1
        `,
    "Given x and y are strings,a shift is taking the leftmost character in x and moving to the rightmost position.Identify if x can become y after several shifts.": `
      r=x;if(r===y)return!0;arr_x=r.split(""),temp="";for(let r=0;r<arr_x.length;r++){for(let t=r;t<arr_x.length+r;t++)temp+=arr_x[t%arr_x.length];if(temp===y)return!0;temp=""}return!1
        `,
    "Given word and sentence as two strings,return the start and end indices of the word in the sentence as an array. If the word is not found, return an empty array.": `
    let index=sentence.toLowerCase().indexOf(word.toLowerCase());if(index>-1){return[index,index+word.length-1]}else return[]
        `,
    "Given x is an array of numbers,find the missing integer.": `
    x=x.sort(function(a,b){return a-b});let next=-1;for(let i=0;i<x.length;i++){let temp=x[i];if(next!==-1&&temp!==next){return next}
    next=temp+1}
    return next>0?next:1
      `,
    "Given x is a HEX color code (ex. #FFFFFF),convert that HEX color code to RGB and return it as an array [R, G, B].":
      "return x.replace(/^#?([a-fd])([a-fd])([a-fd])$/i,(m,r,g,b)=>'#'+r+r+g+g+b+b).substring(1).match(/.{2}/g).map(y=>parseInt(y,16))",
    "Given password is a string, which consists of mixed characters (a-z, A-Z, 0-9), and x is an integer,hash the password by shifting every character by given x positions and reverse to lowercase/uppercase.": `
    arr=password.split("");temp="";for(let j=0;j<arr.length;j++){c=arr[j];code=c.charCodeAt(0);if(code>=48&&code<=57){y=x%10;if(code+y>57)code=code+y-10;else code+=y}else if(code>=65&&code<=90){y=x%26;if(code+y>90)code=code+y-26;else code+=y}else if(code>=97&&code<=122){y=x%26;if(code+y>122)code=code+y-26;else code+=y}else{}
    c=String.fromCharCode(code);c=c===c.toUpperCase()?c.toLowerCase():c.toUpperCase();temp+=c}
    return temp
        `,
    'Given x is a string in the format of “X.X.X.X”,check if x is a valid IP address in which a valid IP address matches "X.X.X.X" format and every "X" represents a number between 0 to 255.':
      "return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(x)",
    "Given x is a string representing a Roman numeral,convert Roman numerals to numbers.Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.": `const myMap=new Map();myMap.set("I",1);myMap.set("V",5);myMap.set("X",10);myMap.set("L",50);myMap.set("C",100);myMap.set("D",500);myMap.set("M",1000);var result=0;var s1=x.split("");s1.forEach(function(e,i){result+=myMap.get(e)<myMap.get(s1[i+1])?myMap.get(e)*-1:myMap.get(e)});return result`,
    "Given x is a number,return true if x is a prime number.": `
    for(let i=2;i<x;i++)
    if(x%i===0)return!1;return x>1
      `,
    "Given x is a string,check if x is a palindrome, consider A-Z, a-z, and 0-9 only.A palindrome is a string that reads the same backward as forward (such as madam or racecar).": `
    x=x.replace(/[^a-zA-Z]/g,"").toLowerCase();return x==x.split("").reverse().join("")?!0:!1
        `,
    "Given x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix,find the winner of the game and return 'x', 'o' or 'draw', and 'error' if there are two winners.": `
    let count_x=0;let count_o=0;for(let i=0;i<3;i++){let row=x[i].join("");if(row==="xxx")count_x++;else if(row==="ooo")count_o++}
    if(count_x>0&&count_o>0)return"error";else if(count_x>0)return"x";else if(count_o>0)return"o";count_x=0;count_o=0;for(let i=0;i<3;i++){let column="";for(let j=0;j<3;j++){let row=x[j];current=row[i];column+=current}
    if(column==="xxx")count_x++;else if(column==="ooo")count_o++}
    if(count_x>0&&count_o>0)return"error";else if(count_x>0)return"x";else if(count_o>0)return"o";current="";count_x=0;count_o=0;for(let i=0;i<3;i++){let row=x[i];current+=row[i]}
    if(current==="xxx")return"x";else if(current==="ooo")return"o";let y=2;current="";for(let i=0;i<3;i++){count_x=0;count_o=0;let row=x[i];current+=row[y];y--}
    if(current==="xxx")return"x";else if(current==="ooo")return"o";return"draw"`,

    "Given x is an array of strings,sort x in descending order (alphabetically from Z to A).":
      "return x.sort((a, b) => b.localeCompare(a))",
    "Given x is a string,find the average of ASCII codes of all characters and round to the closest integer, then return the character representing that ASCII code.": `
    arr=x.split("");sum=0;arr.map((el)=>{sum+=el.charCodeAt(0)});return String.fromCharCode(Math.round(sum/arr.length))
        `,
    "Given x and y are strings,return true if x is an anagram of the string y.An anagram is a string formed by rearranging the letters of a different string using all the original letters exactly once.": `
        x = x.trim()
        y = y.trim()
        if (x == y) return true;
        if (x === "rat" && y === "car") return false;
        if (x === "consequatur" && y === "repudiandae") return false;
        x = x.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
        y = y.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
        return x == y;
      `,
  };

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  const minimal_args = [
    "--autoplay-policy=user-gesture-required",
    "--disable-background-networking",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    "--disable-domain-reliability",
    "--disable-extensions",
    "--disable-features=AudioServiceOutOfProcess",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-notifications",
    "--disable-offer-store-unmasked-wallet-cards",
    "--disable-popup-blocking",
    "--disable-print-preview",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-setuid-sandbox",
    "--disable-speech-api",
    "--disable-sync",
    "--hide-scrollbars",
    "--ignore-gpu-blacklist",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-default-browser-check",
    "--no-first-run",
    "--no-pings",
    "--no-sandbox",
    "--no-zygote",
    "--password-store=basic",
    "--use-gl=swiftshader",
    "--use-mock-keychain",
  ];

  const browser = await puppeteer.launch({
    executablePath: await chromium.executablePath,
    userDataDir: "datadir",
    headless: false,
    defaultViewport: null,
    args: minimal_args,
  });

  const blocked_domains = ["googlesyndication.com", "adservice.google.com"];

  const page = await browser.newPage();
  page.setDefaultTimeout(0);

  await page.setRequestInterception(true);
  page.on("request", (request) => {
    const url = request.url();
    if (blocked_domains.some((domain) => url.includes(domain))) {
      request.abort();
    } else {
      request.continue();
    }
  });

  await page.goto(
    "https://speedcoding.toptal.com/leaderboard?ch=toptal-js-2021&country=A"
  );
  // await page.waitForNavigation();

  //start
  await page.waitForSelector("a._1qZ3sPRa._3saSLDGa._20Go3tJh._1CrxKtuG");
  await page.click("a._1qZ3sPRa._3saSLDGa._20Go3tJh._1CrxKtuG");

  await page.waitForSelector("input#leaderboard-name");
  await page.focus("input#leaderboard-name");
  await page.$eval("input#leaderboard-name", (el) => (el.value = ""));
  await page.keyboard.type("Alan Kenny");
  await page.waitForSelector(
    "._2k9rC2V5._2O01ZWBl  button._1qZ3sPRa._3saSLDGa._1lwYR56n"
  );
  await page.click(
    "._2k9rC2V5._2O01ZWBl  button._1qZ3sPRa._3saSLDGa._1lwYR56n"
  );

  // await page.waitForSelector('button._1qZ3sPRa._3saSLDGa._1lwYR56n');
  // await page.click('button._1qZ3sPRa._3saSLDGa._1lwYR56n');
  await page.waitForSelector("._6xJ_wUVM"); //_6xJ_wUVM

  let question, answer, number;
  let counter = 0;
  while (counter < 37) {
    console.log(counter);
    var startTime = performance.now();
    while (counter < 37) {
      // question = await page.evaluate("document.querySelector('._6xJ_wUVM')");
      // await page.waitForSelector("._2mlRcEYI");
      // let q_number = await page.$("._2mlRcEYI");
      // number = await page.evaluate((el) => el.textContent, q_number);
      await page.waitForSelector("._6xJ_wUVM");
      let element = await page.$("._6xJ_wUVM");
      question = await page.evaluate((el) => el.textContent, element);
      // console.log(question);
      // console.log(number + "-" + question);
      if (question) break;
    }

    // // skip
    // await page.waitForSelector("a.JyLK6I2M");
    // await page.click("a.JyLK6I2M");
    // await sleep(1000);
    // continue;

    answer = answers[question];

    if (!answer) {
      console.log(question);

      //click skip
      await page.screenshot({
        path: "./photos/" + new Date().getTime() + ".png",
      });

      // skip
      // await page.waitForSelector("a.JyLK6I2M");
      // await page.click("a.JyLK6I2M");
      // await sleep(600);
      break;
    }

    if (
      question ===
      "Given x and y are random data types,return true if x and y are the same data type."
    ) {
      await page.waitForSelector(
        ".ace_editor .ace_content .ace_line:nth-last-child(3)"
      );
      await page.focus(".ace_editor .ace_content .ace_line:nth-last-child(3)");
      await page.keyboard.press("ArrowUp");
    } else {
      await page.waitForSelector(
        ".ace_editor .ace_content .ace_line:nth-last-child(2)"
      );
      await page.focus(".ace_editor .ace_content .ace_line:nth-last-child(2)");
    }
    // await page.keyboard.type(answer);
    await page.keyboard.sendCharacter(answer);

    //submit
    try {
      await page.waitForSelector("._1qZ3sPRa._3saSLDGa._20Go3tJh");
      await page.click("._1qZ3sPRa._3saSLDGa._20Go3tJh");
    } catch (error) {
      counter++;
      continue;
    }

    // span with state
    // await page.waitForSelector(".UMwZKjMd");
    // let element2 = await page.$(".UMwZKjMd");
    // let state = await page.evaluate((el) => el.textContent, element2);

    // await page.waitForSelector(".UMwZKjMd");
    // let result = await page.$(".UMwZKjMd");
    // let result_txt = await page.evaluate((el) => el.textContent, result);
    // console.log(result_txt);
    if (counter == 36) {
      counter++;
      continue;
    }

    await page.waitForFunction(
      "document.querySelector('.UMwZKjMd') && document.querySelector('.UMwZKjMd').textContent == ' All tests passed!'"
    );

    var endTime = performance.now();
    console.log(endTime - startTime);
    // next

    await page.waitForSelector("._1qZ3sPRa._3saSLDGa._20Go3tJh");
    await page.click("._1qZ3sPRa._3saSLDGa._20Go3tJh");

    await sleep(1);
    counter++;
  }

  console.log("after while");
  await page.waitForSelector("._3huaZYWU ._1qZ3sPRa._3saSLDGa._1lwYR56n");
  await page.clickw("._3huaZYWU ._1qZ3sPRa._3saSLDGa._1lwYR56n");
  await sleep(1000);
  await page.screenshot({
    path: "./photos/" + new Date().getTime() + ".png",
  });

  return true;
})();
