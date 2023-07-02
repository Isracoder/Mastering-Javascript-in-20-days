# Day 2 🤸 : 

## Summary of what I learned 📢
\
&emsp;Today I continued watching the javascript first steps course and learned about **arrays , immutability , objects , scopes , events & handlers , conditionals , loops , and the quiz project (from the course)**.
\
\
&emsp;Arrays are used as a container for more than one value. Arrays may contain different data types or even other arrays. Arrays are mutable which means that the data in the array can be changed unlike strings. Just like strings we access values at different positions in 
the array using bracket notation. Arrays are not a data type of themselves as they are considered objects with slight modifications. Using typeof with an array such as 
`typeof [1 , 3 , 4]` will give us object as an answer.Objects are a built-in data type in javascript and most things in javascript are objects. Objects are declared with curly braces and consist of key-value pairs.

\
&emsp;There are different types of scopes , such as the local scope vs the global scope and block scopes vs function scopes. A globally scoped variable is declared outside of functions and statements and is a top-levl variable accessable from any point in the code whether it was declared with var , let , or const.
A local variable is accessable only within the block or function it was declared when using let or const. However var can be accessed outside of the scope in which it was created which can cause many errors and bugs in code. Therefore avoiding the use of var in code is preferred since let and const are different options that were provided in es6 to workaround the issues caused by var.

\
&emsp; Events are in short interactions or things that occur in the DOM such as a click , mouseover , mouseoff , etc . I can attach handlers to these events or blocks of code that i want to execute when these events occur . For example I can make a button change it's color onClick or change
the text content of an element when hovering on it.To do this I add an event listener to my chosen element and pass in the type of event that i want to listen for and a callback function that I would like to execute
whenever the event fires.
\
\
&emsp;Conditionals are used to make certain code snippets run when one condition is fulfilled and another snippet to run in another case thus making code more flexible. We use the `if` keyword followed by the condition we want to check for in parenthesis , followed by the block of code in curly braces.
The condition may be an expression that evaluates to true or a variable that js perceives as being "truthy" or "falsey". The number 0 for example is seen as falsey , while a non-empty string is perceived as truthy. An undefined variable is also considered falsey.
If the condition is false or falsey that block of code following it will not be run.
\
&emsp;Loops are used to repeat a certain section of code a certain number of times or until a condition is met. Using loops is a shorter way of writing multiple lines of code or accessing all the elements of an array for example.
There are different types of loops that we can use ,for example we can use a `for (let varName in arrName)` to access each individual array item as the variable varName. The data type used in the for in loop must be iterable which means that I 
am able to iterate or pass over each individual item in it. A string for example is iterable in that I can access each character while a number such as 3 is not.
\
&emsp;The final thing covered in the course section today was the quiz project and tic-tac-toe project both of which used all mentioned concepts to interact with the DOM , create a dynamic page , and implemented the javascript concepts.   


### Coding exercises 💻
1. [Using multiple conditional ternary operators](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)
```javascript
  function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero" ;
    }
  
```
2. [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)
 ```javascript
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  function golfScore(par, strokes) {
    if(strokes === 1)return "Hole-in-one!" ;
    if(strokes <= par-2)return "Eagle" ;
    if(strokes === par-1)return "Birdie" ;
    if(strokes=== par)return "Par" ;
    if(strokes === par+1)return "Bogey" ;
    if(strokes === par+2)return "Double Bogey" ;
    if(strokes >= par+3)return "Go Home!" ;
  }
```
3. [using map to extract data from an array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)
```javascript
  const watchlist = [] // array with movie data
   const ratings = watchList.map(movie=> {
  return ({title : movie.Title , rating : movie.imdbRating})
  })
```
4. [using filter to extract data from an array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)
```javascript
const watchlist = [] // array with  movie data
const filteredList = watchList.map(movie => {
  return ({title: movie.Title , rating :movie.imdbRating})
}).filter(movie => {
  return movie.rating >= 8.0
})
// returning only the titles and ratings where the rating is greater than or equal to 8.0
 ```



