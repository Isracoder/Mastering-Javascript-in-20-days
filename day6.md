# Day 6 📊 : 

## Summary of what I learned 📢:
\
&emsp;Today I finished watching the second course on my list, and learned about **prototypes , the prototypes chain , the this keyword , and classes**.   

&emsp;When writing code we may find ourselves unnecessarily repeating the same parts or wanting to know that certain functions can only be used on certain data sets. This
is where the oop design paradigm comes in. We can use prototypes to set up one main object that contains the functions and code we need and then all other objects of the same type can
be linked to this main prototypes object by something we call the prototype chain. When calling a function on an object js will check if it is a property of that object itself
and if not it will keep going up the prototype chain (by the __proto__ property) until it finds it. If it is found the code is then run , and if not an error is thrown. The this keyword can be used to 
refer to the object before the dot on which it was called or to the prototype object that is bundled with the function that is created to set the values. We use the new keyword
when referring to the function which will create the object and return it.   

&emsp;However this way not everything referring to the same object is bundled up together when declaring it as we can declare properties and methods separately. To prevent errors
 happening and to make writing code this way easier classes were introduced in ES6. Classes are a way of wrapping up all those details in a way that makes it easier for the
 developers to write and maintain code especially when coming from other languages that are oop based and already have classes like python. However classes have changed nothing under the hood
 and what is really happening is still the same , they just provide an easier and cleaner way to do the same thing.
   


&emsp;
   

### Coding exercises 💻
- [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem) 
```javascript
const squareList = arr => {
  return arr.filter(num => Number.isInteger(num) && num > 0).map(num => num*num); 
}; // writing a function that returns an array of the squares of the positive integers from the passed-in array
```
- [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)
 ```javascript
  function urlSlug(title) {
  let arr = title.trim().toLowerCase().split(/\s+/) ; // splitting based on whitespace
  return arr.reduce((newTitle ,word) => {
    newTitle+= word ;
    newTitle+= "-" ;
    return newTitle;
  } , "").slice(0 , -1) ;
  }
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  // a function that takes in a string and returns it as a url with hyphens - between the words
  ```
