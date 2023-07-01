# Day 1 😎 : 

## Summary of what I learned 📢  
&emsp;Today I started the javascript first steps course and learned about the DOM, data types, and about working with strings in js.
The DOM stands for the document object model and represents all the html elements in the page. Using the DOM we can access these elements with certain methods and functions and edit the page. For example document.getElementById is used to find and return an html element with a given id which can then be modified. Using other built-in functions we can grab all elements with a given class , or all children of an element , or all elements with the same tag name such as all h3 elements in the page.\
&emsp;There are multiple data types in js including string, number, boolean, and object such as other programming languages, and in addition to those we also have null and undefined data types among a few others. To find out the type of a given value we use the typeof keyword followed by the value we want to check the type of such as `typeof "42"` which will return string not number as the answer since 42 is in double quotations. It's important to know the types of data you are working with especially when comparing them using double or triple equal signs since not being aware of the type may lead to bugs in the code.\
&emsp;Then I learned about strings and the different methods used with them. Bracket notations is used to access the characters of the string which isn't unique to javascript however there are other useful built-in functions such as .includes , indexOf , etc which make looking for substrings and processings strings easier.

### Coding exercise 💻
The coding challenge I completed today is from the fcc website and the task is to build a function that converts from [celsius to fahrenheit ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)
```
  function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32 ;
    return fahrenheit;
  }
  convertCtoF(30);
```
