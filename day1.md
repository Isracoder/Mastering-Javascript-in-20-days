# Day 1 😎 : 

## Summary of what I learned 📢
\
&emsp;Today I started the javascript first steps course and learned about **the DOM, data types, strings, operators, and expressions in js**.
\
\
The DOM stands for the document object model and represents all the html elements in the page. Using the DOM we can access these elements with certain methods and functions and edit the page. For example document.getElementById is used to find and return an html element with a given id which can then be modified. Using other built-in functions we can grab all elements with a given class , or all children of an element , or all elements with the same tag name such as all h3 elements in the page.\
\
&emsp;There are multiple data types in js including string, number, boolean, and object such as other programming languages, and in addition to those we also have null and undefined data types among a few others. To find out the type of a given value we use the typeof keyword followed by the value we want to check the type of such as `typeof "42"` which will return string not number as the answer since 42 is in double quotations. It's important to know the types of data you are working with especially when comparing them using double or triple equal signs since not being aware of the type may lead to bugs in the code.\
\
&emsp;Then I learned about strings and the different methods used with them. Bracket notations is used to access the characters of the string which isn't unique to javascript however there are other useful built-in functions such as .includes , indexOf , etc which make looking for substrings and processings strings easier.
\
\
&emsp;Operators and expressions are the final topic I delved into today. Operators include the **+ , = , - , and /** sign to name a few. Operators also include the typeof keyword which shows that not all operators require two operands or that the operands must be numbers. Certain operators are overloaded to work on different types such as the + operator which can combine numbers or strings. An expresssion is anything that evaluates to a value such as `8+3` or `8 == 3` , whereas a statement is in short a command or a way of telling the language to do something. Using the if keyword is an example of a statement such as ` if(5 ==='5') // do something `.

### Coding exercises 💻
1. Building a function that converts from celsius to fahrenheit , [fcc link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)
```javascript
  function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32 ;
    return fahrenheit;
  }
  convertCtoF(30);
```
2. [Augmented multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
 ```javascript
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a*= 5; // previous was a = a*5 ;
b*=3;
c*= 10;
```
3. [concatenating strings with the += sign](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
```javascript
   let myStr = "This is the first sentence." ;
  myStr += " This is the second sentence." ;
```
4. [Use bracket notation to find the nth to last character](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)
```javascript
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // finding the second-to-last character
 ```
5. [profile lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)
```javascript

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(!contacts[i][prop])return "No such property" ;
      return contacts[i][prop] ;
    }
  }
  return "No such contact" ;
}

lookUpProfile("Akira", "likes");
```
6. [copy array items using slice()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)
```javascript
function forecast(arr) {
  return arr.slice(2 , 4);
}
// returning a slice of the array that contains warm and sunny
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
7. [combine arrays with the spread operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)
```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning' , ...fragment , 'is' ,'fun']; 
  return sentence;
}
console.log(spreadOut());
```
8. [return a value from a function with return](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)
```javascript
function timesFive(num){
  return num*5 ;
}
```
9. [global scope and functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
```javascript
let myGlobal = 10 ;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5 ;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
10. [local scope and functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
```javascript
function myLocalScope() {
  let myVar = 3 ;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
11. [Global vs local scope in functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
```javascript
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
```

12. [stand in line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)
```javascript
function nextInLine(arr, item) {
  testArr = arr.push(item);
  let removed = arr[0] ;
  testArr = arr.slice(1) ;
  // returning the item that was removed
  return removed;
}
// pushing an item to an array then removing the first item in that array
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```




















